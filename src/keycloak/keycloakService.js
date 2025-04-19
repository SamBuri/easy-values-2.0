// keycloak/keycloakService.js
import Keycloak from 'keycloak-js';
import { useAuthStore } from '@/store/authstore';
import { defineTenantStore } from '@/organisation/tenant/TenantStore';
import { withTimeout } from '@/utils/timeout';

class KeycloakService {
  constructor() {
    this.keycloak = null;
  }

  async initKeycloak() {
    const tenantStore = defineTenantStore();
    const authStore = useAuthStore();

    if (keycloak) {
      return keycloak;
    }

    let tenant;
    try {
      tenant = await tenantStore.getFirstTenant();
    } catch (e) {
      throw new Error('Unable to initialize Keycloak due to tenant fetch failure');
    }

    if (!tenant) {
      throw new Error('No tenant found for this host');
    }

    if (!tenant.authUrl || !tenant.realm || !tenant.clientId) {
      throw new Error('Invalid tenant configuration: authUrl, realm, or clientId is missing');
    }

    const keycloakOptions = {
      url: tenant.authUrl,
      realm: tenant.realm,
      clientId: tenant.clientId,
    };

    this.keycloak = new Keycloak(keycloakOptions);

    // Set up token refresh handling
    this.keycloak.onTokenExpired = async () => {
      console.log('Token expired, attempting to refresh');
      try {
        const refreshed = await withTimeout(this.keycloak.updateToken(30), 10000);
        console.log(refreshed ? 'Token was refreshed' : 'Token is still valid');
      } catch (error) {
        console.error('Failed to refresh token:', error);
        this.keycloak.logout();
      }
    };

    // Set up auth event handlers
    this.keycloak.onAuthRefreshSuccess = () => {
      console.log('Auth refresh success');
      authStore.setAuthData(this.keycloak);
    };
    this.keycloak.onAuthLogout = () => {
      console.log('User logged out');
      authStore.setAuthData(null);
    };
    this.keycloak.onAuthSuccess = () => {
      console.log('Auth success');
      authStore.setAuthData(this.keycloak);
    };

    try {
      const auth = await withTimeout(
        this.keycloak.init({ onLoad: 'login-required' }),
        10000 // 10-second timeout
      );
      console.log(`User is ${auth ? 'authenticated' : 'not authenticated'}`);
      authStore.setAuthData(this.keycloak);
      return this.keycloak;
    } catch (e) {
      console.error('Failed to initiate Keycloak:', e);
      throw e;
    }
  }

  getKeycloak() {
    return this.keycloak;
  }
}

export default new KeycloakService();