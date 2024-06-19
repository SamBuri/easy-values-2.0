import Keycloak from 'keycloak-js';
import { useAuthStore } from '@/store/authstore';
import { defineTenantStore } from '@/organisation/tenant/TenantStore';
import tenantNav from '@/organisation/tenant/TenantNav';
import httmMethods from '@/utils/HttpMethods';

var authUrl = window.VUE_APP_AUTH_URL;
  var authBaseUrl = authUrl || "http://localhost:8100/auth";


// const options = {
//   url: import.meta.env.VITE_KEYCLOAK_URL,
//   clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
//   realm: import.meta.env.VITE_KEYCLOAK_REALM
// }


var keycloak = null;
var tenant = null;

await getFirstTenant();

let authenticated;
let store = null;

/**
 * Initializes Keycloak, then run callback. This will prompt you to login.
 *
 * @param onAuthenticatedCallback
 */
async function init(onInitCallback) {
  try {
    authenticated = await keycloak.init({ onLoad: "login-required" })
    onInitCallback()
    initStore();
  } catch (error) {
    console.error("Keycloak init failed")
    console.error(error)
  }
};

/**
 * Initializes store with Keycloak user data
 *
 */
async function initStore() {
  try {
    store = useAuthStore()
    store.initOauth(keycloak)

    // Show alert if user is not authenticated
    if (!authenticated) { alert("not authenticated") }
  } catch (error) {
    console.error("Keycloak init failed")
    console.error(error)
  }
};

/**
 * Logout user
 */
function logout() {
  keycloak.logout();
  // keycloak.logout({ redirectUri: url });
  initStore();
}

/**
 * Refreshes token
 */
async function refreshToken() {
  try {
    await keycloak.updateToken(480);
    initStore();
    return keycloak;
  } catch (error) {
    console.error('Failed to refresh token');
    console.error(error);
  }
}

async function getFirstTenant() {
  let host =window.location.host;

  httmMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`)
      .then(response => {
          tenant = response.data;
          if(!tenant){
            if(!tenant) console.log("No tenant found for the host: ",host);
            return;
          }
          const options = {
            url: tenant.authUrl,
            realm: tenant.realm,
            clientId: tenant.clientId,
            onLoad: "login-required",
          };
         keycloak = new Keycloak(options);



      }).catch(e => {

          console.log("Failed to read tenant data",e);

      })

}

const keycloakService = {
  CallInit: init,
  CallInitStore: initStore,
  CallLogout: logout,
  CallTokenRefresh: refreshToken
};



export default keycloakService;
