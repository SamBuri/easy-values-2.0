import { defineAuthStore } from "saburi-vue-utils";
import { authService } from "@/security/auth/AuthService";

let _refreshPromise = null;

export const useAuthStore = defineAuthStore({
  storeId: "auth",
  actions: {
    setForcePasswordChange(value) {
      this.forcePasswordChange = Boolean(value);
      if (this.user) {
        this.user.forcePasswordChange = Boolean(value);
      }
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
    async logout() {
      try {
        const config = await authService.getClientConfig();
        const target = authService.logoutUrl(config, this.idToken);
        this.clear();
        window.location.assign(target);
      } catch (e) {
        this.clear();
        window.location.assign("/login");
      }
    }
  }
});

export default useAuthStore;
