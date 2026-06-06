import { defineTenantStore } from '@/organisation/tenant/TenantStore';
import { useAuthStore } from '@/store/authstore';
import Keycloak from 'keycloak-js';

export default async function initKeyCloak() {
  const tenantStore = defineTenantStore();
  const authStore = useAuthStore();

  // Skip if already initialized
  // if (authStore.authenticated) {
  //   return authStore.keycloak;
  // }

  // Fetch the first tenant
  let tenant;
  try {
    tenant = await tenantStore.getFirstTenant();
    console.log("Tenant", tenant)
  } catch (e) {
    console.error('Failed to fetch tenant:', e);
    throw new Error('Unable to initialize Keycloak due to tenant fetch failure');
  }

  // Handle missing tenant
  if (!tenant) {
    console.warn('No tenant found. Skipping Keycloak initialization.');
    throw new Error('No tenant found for this host');
  }

  // Validate tenant values
  if (!tenant.authUrl || !tenant.realm || !tenant.authClientId) {
    throw new Error('Invalid tenant configuration: authUrl, realm, or clientId is missing');
  }

  // Keycloak configuration
  const keyCloakOptions = {
    url: tenant.authUrl,
    realm: tenant.realm,
    clientId: tenant.authClientId,
  };

  const keycloak = new Keycloak(keyCloakOptions);

  // Token refresh handling
  keycloak.onTokenExpired = async () => {
    console.log('Token expired. Trying to update it');
    try {
      await keycloak.updateToken(30);
      console.log('Token updated successfully');
    } catch (e) {
      console.error('Failed to update token, logging out:', e);
      authStore.setAuthData(null);
      keycloak.logout();
    }
  };

  // Periodically check token validity every 10 seconds to handle background tabs/throttling
  setInterval(async () => {
    if (keycloak.authenticated && keycloak.isTokenExpired(30)) {
      console.log('Periodic check: Token will expire soon. Updating token...');
      try {
        await keycloak.updateToken(30);
        console.log('Periodic check: Token updated successfully');
      } catch (e) {
        console.error('Periodic check: Failed to update token, logging out:', e);
        authStore.setAuthData(null);
        keycloak.logout();
      }
    }
  }, 10000);

  // Set up auth event handlers
  keycloak.onAuthRefreshSuccess = () => {
    console.log('Auth refresh success');
    authStore.setAuthData(keycloak);
  };
  keycloak.onAuthLogout = () => {
    console.log('User logged out');
    // authStore.setAuthData(keycloak);
  };
  keycloak.onAuthSuccess = () => {
    console.log('Auth success');
    authStore.setAuthData(keycloak);
  };

  // Initialize Keycloak
  try {
    const auth = await keycloak.init({ onLoad: 'login-required' });
    console.log(`User is ${auth ? 'authenticated' : 'not authenticated'}`);
    authStore.setAuthData(keycloak);
    return keycloak;
  } catch (e) {
    console.error('Failed to initiate Keycloak:', e);
    throw e;
  }
}
