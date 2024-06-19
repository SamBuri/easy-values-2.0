import Keycloak from "keycloak-js";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { useAuthStore } from "@/store/authstore";
export default async function initKeyCloak(callback) {
  const tenantStore = defineTenantStore();
  const firstTenant = async () => {
    await tenantStore.getFirstTenant();
    return tenantStore.firstTenant;
  };

  const tenant = await firstTenant();
  console.log("The current tenant is ", tenant);
  const keyCloakOptions = {
    url: tenant.authUrl,
    realm: tenant.realm,
    clientId: tenant.clientId,
    onLoad: "login-required",
  };
  const keycloak = new Keycloak(keyCloakOptions);

  const authStore = useAuthStore();

  keycloak.onTokenExpired = () => {
    console.log("Token expired. Trying to update it")
   try{
    keycloak.updateToken();
    console.log('Token Updated')
   }catch(e){
    console.log('Failed to update token')

   }

  };
  keycloak.onAuthRefreshSuccess = () => authStore.setAuthData(keycloak);
  keycloak.onAuthLogout = () => {
    authStore.setAuthData(keycloak);
  };
  keycloak.onAuthSuccess = () => {
    authStore.setAuthData(keycloak);
  };


  const tryInit = async (callback)=>{
    try {
      let auth = await keycloak.init({ onLoad: "login-required" });
      console.log(`User is ${auth ? "authenticated" : "not authenticated"}`);
      if(callback)callback()
    } catch (e) {
      console.log("Failed to initiate keycloak ", e);
    }
  };

  const init = async (callback) => {
    try {
     tryInit(callback);
    } catch (e) {
      console.log("Failed to initiate keycloak. Trying one more time ", e);
      tryInit(callback);
    }
  };



  try {

    await init(callback);
  } catch (error) {
    console.error("Failed to initialize Keycloak:", error);
  }
}
