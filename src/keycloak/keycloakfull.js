// import { defineTenantStore } from '@/organisation/tenant/TenantStore';
// import { useAuthStore } from '@/store/authstore';
// import Keycloak from 'keycloak-js';
// import axios from 'axios';

// // Singleton Keycloak instance
// let keycloakInstance = null;

// // Keycloak service object to expose methods
// const keycloakService = {
//   async initKeycloak() {
//     const tenantStore = defineTenantStore();
//     const authStore = useAuthStore();

//     // Skip if already initialized
//     if (authStore.authenticated && keycloakInstance) {
//       return keycloakInstance;
//     }

//     // Fetch the first tenant
//     let tenant;
//     try {
//       tenant = await tenantStore.getFirstTenant();
//     } catch (e) {
//       console.error('Failed to fetch tenant:', e);
//       throw new Error('Unable to initialize Keycloak due to tenant fetch failure');
//     }

//     // Handle missing tenant
//     if (!tenant) {
//       console.warn('No tenant found. Skipping Keycloak initialization.');
//       throw new Error('No tenant found for this host');
//     }

//     // Validate tenant values
//     if (!tenant.authUrl || !tenant.realm || !tenant.clientId) {
//       throw new Error('Invalid tenant configuration: authUrl, realm, or clientId is missing');
//     }

//     // Keycloak configuration
//     const keyCloakOptions = {
//       url: tenant.authUrl,
//       realm: tenant.realm,
//       clientId: tenant.clientId,
//     };

//     // Initialize Keycloak instance
//     keycloakInstance = new Keycloak(keyCloakOptions);

//     // Token refresh handling
//     keycloakInstance.onTokenExpired = async () => {
//       console.log('Token expired. Trying to update it');
//       try {
//         await keycloakInstance.updateToken(30);
//         console.log('Token updated successfully');
//         authStore.setAuthData({
//           token: keycloakInstance.token,
//           refreshToken: keycloakInstance.refreshToken,
//           idToken: keycloakInstance.idToken,
//           authenticated: keycloakInstance.authenticated,
//         });
//       } catch (e) {
//         console.error('Failed to update token:', e);
//       }
//     };

//     // Set up auth event handlers
//     keycloakInstance.onAuthRefreshSuccess = () => {
//       console.log('Auth refresh success');
//       authStore.setAuthData({
//         token: keycloakInstance.token,
//         refreshToken: keycloakInstance.refreshToken,
//         idToken: keycloakInstance.idToken,
//         authenticated: keycloakInstance.authenticated,
//       });
//     };
//     keycloakInstance.onAuthLogout = () => {
//       console.log('User logged out');
//       authStore.setAuthData({
//         token: null,
//         refreshToken: null,
//         idToken: null,
//         authenticated: false,
//       });
//     };
//     keycloakInstance.onAuthSuccess = () => {
//       console.log('Auth success');
//       authStore.setAuthData({
//         token: keycloakInstance.token,
//         refreshToken: keycloakInstance.refreshToken,
//         idToken: keycloakInstance.idToken,
//         authenticated: keycloakInstance.authenticated,
//       });
//     };

//     // Initialize Keycloak
//     try {
//       const auth = await keycloakInstance.init({ onLoad: 'check-sso' }); // Changed to check-sso to allow registration without forcing login
//       console.log(`User is ${auth ? 'authenticated' : 'not authenticated'}`);
//       authStore.setAuthData({
//         token: keycloakInstance.token,
//         refreshToken: keycloakInstance.refreshToken,
//         idToken: keycloakInstance.idToken,
//         authenticated: keycloakInstance.authenticated,
//       });
//       return keycloakInstance;
//     } catch (e) {
//       console.error('Failed to initiate Keycloak:', e);
//       throw e;
//     }
//   },

//   // Expose Keycloak methods
//   login(options) {
//     if (!keycloakInstance) {
//       throw new Error('Keycloak not initialized');
//     }
//     return keycloakInstance.login(options);
//   },

//   logout(options) {
//     if (!keycloakInstance) {
//       throw new Error('Keycloak not initialized');
//     }
//     return keycloakInstance.logout(options);
//   },

//   updateToken(minValidity) {
//     if (!keycloakInstance) {
//       throw new Error('Keycloak not initialized');
//     }
//     return keycloakInstance.updateToken(minValidity);
//   },

//   register(options) {
//     if (!keycloakInstance) {
//       throw new Error('Keycloak not initialized');
//     }
//     return keycloakInstance.register(options);
//   },

//   // Register user via Keycloak Admin API
//   async registerUser(userData) {
//     const tenantStore = defineTenantStore();
//     const tenant = await tenantStore.getFirstTenant();
//     if (!tenant) {
//       throw new Error('No tenant found');
//     }

//     // Get admin token (using a service account or client credentials)
//     const tokenResponse = await axios.post(
//       `${tenant.authUrl}/realms/${tenant.realm}/protocol/openid-connect/token`,
//       new URLSearchParams({
//         grant_type: 'client_credentials',
//         client_id: 'admin-cli', // Replace with your service account client ID
//         client_secret: 'YOUR_CLIENT_SECRET', // Replace with your client secret
//       }),
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const adminToken = tokenResponse.data.access_token;

//     // Create user via Keycloak Admin API
//     const userPayload = {
//       username: userData.username,
//       email: userData.email,
//       enabled: true,
//       credentials: [
//         {
//           type: 'password',
//           value: userData.password,
//           temporary: false,
//         },
//       ],
//       attributes: userData.attributes || {}, // Custom attributes (e.g., { phone: userData.phone })
//     };

//     try {
//       await axios.post(
//         `${tenant.authUrl}/admin/realms/${tenant.realm}/users`,
//         userPayload,
//         {
//           headers: {
//             Authorization: `Bearer ${adminToken}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log('User registered successfully');
//     } catch (e) {
//       console.error('Failed to register user:', e.response?.data || e.message);
//       throw new Error('User registration failed');
//     }
//   },

//   // Getter for the Keycloak instance (use with caution)
//   getKeycloak() {
//     if (!keycloakInstance) {
//       throw new Error('Keycloak not initialized');
//     }
//     return keycloakInstance;
//   },
// };

// export default keycloakService;