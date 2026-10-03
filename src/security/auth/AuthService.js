import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL;
const apiBaseUrl = (rawApiUrl && rawApiUrl !== "EV_APP_API_URL"
  ? rawApiUrl
  : (typeof window !== "undefined" ? window.location.origin : "http://localhost:8181")
).replace(/\/$/, "");
const verifierKey = "easy-values.pkce.verifier";
const stateKey = "easy-values.oauth.state";
let _cachedClientConfig = null;

function base64Url(bytes) {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function randomValue(size = 32) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return base64Url(bytes);
}

async function sha256(value) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
}

function redirectUri() {
  return `${window.location.origin}/oauth/callback`;
}

export const authService = {
  apiBaseUrl,

  async getClientConfig(host = window.location.host) {
    if (_cachedClientConfig && _cachedClientConfig.host === host) {
      return _cachedClientConfig.config;
    }
    try {
      const response = await axios.get(`${apiBaseUrl}/api/v1/auth/client-config`, {
        params: { host }
      });
      _cachedClientConfig = { host, config: response.data };
      return response.data;
    } catch (error) {
      console.warn("Failed to fetch client config from backend, falling back to defaults", error);
      return {
        issuer: `${apiBaseUrl}`,
        clientId: "saburi-web",
        clientName: "Saburi Main App",
        redirectUri: redirectUri(),
        postLogoutRedirectUri: window.location.origin,
        scopes: ["openid", "profile"]
      };
    }
  },

  async getUserContext(token) {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/v1/auth/user-context`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (err) {
      const response = await axios.get(`${apiBaseUrl}/auth/user-context`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    }
  },

  async login(clientConfig = null, returnTo = window.location.pathname + window.location.search) {
    const config = clientConfig || await this.getClientConfig();
    const verifier = randomValue(64);
    const state = randomValue();
    const safeReturnTo = (returnTo && !returnTo.startsWith("/oauth/callback")) ? returnTo : "/";
    sessionStorage.setItem(verifierKey, verifier);
    sessionStorage.setItem(stateKey, JSON.stringify({
      state,
      returnTo: safeReturnTo,
      issuer: config.issuer,
      clientId: config.clientId
    }));
    const params = new URLSearchParams({
      response_type: "code",
      client_id: config.clientId,
      scope: (config.scopes || ["openid", "profile"]).join(" "),
      redirect_uri: config.redirectUri || redirectUri(),
      code_challenge: base64Url(await sha256(verifier)),
      code_challenge_method: "S256",
      state
    });
    window.location.assign(`${config.issuer}/oauth2/authorize?${params}`);
  },

  async exchangeCode(code, state) {
    const stored = JSON.parse(sessionStorage.getItem(stateKey) || "{}");
    const verifier = sessionStorage.getItem(verifierKey);
    if (!state || state !== stored.state || !verifier) throw new Error("Invalid OAuth callback state");
    
    const issuer = stored.issuer || `${apiBaseUrl}`;
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: stored.clientId || "saburi-web",
      redirect_uri: redirectUri(),
      code,
      code_verifier: verifier
    });
    const response = await axios.post(`${issuer}/oauth2/token`, body, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    sessionStorage.removeItem(verifierKey);
    sessionStorage.removeItem(stateKey);
    const returnTarget = (stored.returnTo && !stored.returnTo.startsWith("/oauth/callback")) ? stored.returnTo : "/";
    return { tokens: response.data, returnTo: returnTarget };
  },

  async refresh(clientConfig, refreshToken) {
    const config = clientConfig || await this.getClientConfig();
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: config.clientId || "saburi-web",
      refresh_token: refreshToken
    });
    const response = await axios.post(`${config.issuer}/oauth2/token`, body, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    return response.data;
  },

  logoutUrl(clientConfig, idToken) {
    const postLogoutRedirect = window.location.origin;
    const issuer = clientConfig?.issuer || `${apiBaseUrl}`;
    const clientId = clientConfig?.clientId || "saburi-web";
    if (!idToken) {
      return postLogoutRedirect;
    }
    const params = new URLSearchParams({
      post_logout_redirect_uri: postLogoutRedirect,
      client_id: clientId,
      id_token_hint: idToken
    });
    return `${issuer}/connect/logout?${params}`;
  },

  async switchBranch(token, branchId) {
    try {
      const response = await axios.post(`${apiBaseUrl}/api/v1/auth/switch-branch`, { branchId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (err) {
      const response = await axios.post(`${apiBaseUrl}/auth/switch-branch`, { branchId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    }
  },

  async getMyBranches(token) {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/v1/auth/my-branches`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (err) {
      const response = await axios.get(`${apiBaseUrl}/auth/my-branches`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    }
  }
};

