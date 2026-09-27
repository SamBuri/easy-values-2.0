import { defineStore } from "pinia";
import { defineBranchStore } from "saburi-vue-utils";
import { authService } from "@/security/auth/AuthService";

function decodeJwt(token) {
  try {
    if (!token) return null;
    const value = token.split(".")[1];
    if (!value) return null;
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error("Failed to decode JWT", error);
    return null;
  }
}

function normalizeClaimValues(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.flatMap(normalizeClaimValues);
  if (typeof value === "string") {
    return value.split(",").map((entry) => entry.trim()).filter(Boolean);
  }
  return [String(value)];
}

let _refreshPromise = null;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    refreshToken: null,
    idToken: null,
    authenticated: false,
    forcePasswordChange: false,
    expiresAt: 0,
    fullName: null,
    defaultBranch: null,
    otherBranches: [],
    roles: [],
    authorities: [],
    user: null,
    orgId: null,
    orgName: null,
    branchId: null,
    branch: null,
    issuer: null,
  }),
  persist: true,
  getters: {
    currentBranch() {
      return defineBranchStore().currentBranch;
    },
    allBranches() {
      return defineBranchStore().currentUserBranches;
    },
  },
  actions: {
    setForcePasswordChange(value) {
      this.forcePasswordChange = Boolean(value);
      if (this.user) {
        this.user.forcePasswordChange = Boolean(value);
      }
    },
    async setTokens(tokens, userContext = null) {
      this.token = tokens.access_token || tokens.token || null;
      this.refreshToken = tokens.refresh_token || tokens.refreshToken || this.refreshToken;
      this.idToken = tokens.id_token || tokens.idToken || this.idToken;
      const idClaims = decodeJwt(this.idToken) || {};
      const accessClaims = decodeJwt(this.token) || {};
      const claims = { ...idClaims, ...accessClaims };
      this.expiresAt = (accessClaims.exp || idClaims.exp || 0) * 1000;
      if (!this.expiresAt && tokens.expires_in) {
        this.expiresAt = Date.now() + Number(tokens.expires_in) * 1000;
      }
      this.authenticated = Boolean(this.token && (this.expiresAt > Date.now() || this.expiresAt === 0));

      const tokenBranches = userContext?.branches || claims.branches || [];
      if (userContext) {
        this.forcePasswordChange = Boolean(userContext.forcePasswordChange);
        this.fullName = userContext.fullName;
        this.roles = Array.from(new Set(userContext.roles || []));
        this.authorities = Array.from(new Set(userContext.authorities || []));
        this.user = {
          fullName: userContext.fullName,
          username: userContext.username,
          email: userContext.email,
          roles: this.roles,
          authorities: this.authorities,
          forcePasswordChange: this.forcePasswordChange,
          branches: tokenBranches,
        };
        this.defaultBranch = userContext.defaultBranch;
        this.otherBranches = userContext.otherBranches || [];
        this.orgId = userContext.orgId;
        this.orgName = userContext.orgName;
        this.branchId = userContext.branchId;
        this.branch = userContext.branch;
      } else {
        this.forcePasswordChange = Boolean(accessClaims.force_password_change || idClaims.force_password_change);
        this.roles = Array.from(new Set(normalizeClaimValues(claims.roles)));
        this.authorities = Array.from(new Set(normalizeClaimValues(claims.authorities)));
        this.fullName = claims.name || [claims.given_name, claims.family_name].filter(Boolean).join(" ") || claims.preferred_username || null;
        this.user = {
          fullName: this.fullName,
          username: claims.preferred_username || claims.sub || "",
          email: claims.email || "",
          roles: this.roles,
          authorities: this.authorities,
          forcePasswordChange: this.forcePasswordChange,
          branches: tokenBranches,
        };
        this.defaultBranch = Array.isArray(claims.default_branch) ? claims.default_branch[0] : claims.default_branch || claims.defaultBranch || null;
        this.otherBranches = claims.other_branches || claims.otherBranches || [];
        this.orgId = accessClaims.org_id || null;
        this.orgName = accessClaims.org_name || null;
        this.branchId = accessClaims.branch_id || null;
        this.branch = accessClaims.branch || null;
      }
      this.issuer = accessClaims.iss || null;
      if (tokenBranches && tokenBranches.length > 0) {
        defineBranchStore().currentUserBranches = tokenBranches;
        const activeBranchId = this.branchId || this.defaultBranch;
        let matched = tokenBranches.find(b => String(b.id) === String(activeBranchId));
        defineBranchStore().setCurrentBranch(matched || tokenBranches[0]);
      } else {
        const branches = Array.from(new Set([this.defaultBranch, ...this.otherBranches].filter(Boolean)));
        await defineBranchStore().setCurrentUserBranches(branches, this.defaultBranch);
      }
    },
    async switchBranch(branch) {
      if (!branch || !branch.id) return;
      const data = await authService.switchBranch(this.token, branch.id);
      if (data) {
        const tokens = data.data || data.entity || data;
        await this.setTokens(tokens);
        defineBranchStore().setCurrentBranch(branch);
      }
    },
    async setAuthData(data) {
      if (!data) return this.clear();
      await this.setTokens(data);
    },
    isTokenValid(skewSeconds = 30) {
      if (!this.token) return false;
      if (!this.expiresAt) return true;
      return this.expiresAt > Date.now() + skewSeconds * 1000;
    },
    isTokenForClientGroup(clientGroup) {
      return true;
    },
    isTokenValidForClientGroup(clientGroup, skewSeconds = 30) {
      return this.isTokenValid(skewSeconds);
    },
    async ensureValidToken(selectedConfig = null, force = false) {
      if (!force && this.isTokenValid(30)) {
        return this.token;
      }
      if (!this.refreshToken) {
        this.clear();
        throw new Error("Token expired and no refresh token available");
      }

      if (_refreshPromise) {
        return _refreshPromise;
      }

      _refreshPromise = (async () => {
        try {
          const config = selectedConfig || await authService.getClientConfig();
          const tokens = await authService.refresh(config, this.refreshToken);
          await this.setTokens(tokens);
          return this.token;
        } catch (error) {
          console.error("Token refresh failed:", error);
          this.clear();
          throw error;
        } finally {
          _refreshPromise = null;
        }
      })();

      return _refreshPromise;
    },
    async refreshTokens(selectedConfig = null) {
      if (!this.refreshToken) {
        return this.token;
      }
      try {
        const config = selectedConfig || await authService.getClientConfig();
        const tokens = await authService.refresh(config, this.refreshToken);
        let userContext = null;
        try {
          userContext = await authService.getUserContext(tokens.access_token);
        } catch (e) {
          console.warn("Failed to refresh user context after password change:", e);
        }
        await this.setTokens(tokens, userContext);
        this.setForcePasswordChange(false);
        return this.token;
      } catch (error) {
        console.error("Token refresh failed:", error);
        return this.token;
      }
    },
    clear() {
      this.$reset();
    },
    async logout() {
      const config = await authService.getClientConfig();
      const target = authService.logoutUrl(config, this.idToken);
      this.clear();
      window.location.assign(target);
    },
    hasAuthority(authority) {
      return this.authorities.includes(authority);
    },
    hasAnyAuthority(authorities = []) {
      return authorities.some((authority) => this.hasAuthority(authority));
    },
    hasRole(role) {
      return this.authorities.includes(role) || this.roles.includes(role);
    },
    hasRealmRole(role) {
      return this.hasRole(role);
    },
  },
});


