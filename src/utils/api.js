import axios from "axios";
import constants from "./constants";
import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { defineBranchStore } from "@/organisation/branch/BranchStore";

const config = window.__APP_CONFIG__ || {};

console.log("Environment Variables:", import.meta.env);
var baseURL = import.meta.env.VITE_API_URL;
// baseURL= window.appConfig?.API_URL||baseURL
// baseURL="https://api.capidattex.net/"
console.log("API URL", baseURL)
var apiUrl = baseURL ||"http://localhost:8089/";
console.log("The API Gateway 1", apiUrl);

const api = {
   createAPI() {
    const authStore = useAuthStore();
    const tenantStore = defineTenantStore();
    const branchStore = defineBranchStore();
    let token = authStore.user.token;
    let tenant = tenantStore.firstTenant;
    let currentBranch = branchStore.currentBranch;

    

    let keycloak = authStore.keycloak
    if(!keycloak) window.location.reload;
    if(keycloak.isTokenExpired(30)) keycloak.updateToken(-1);

    let api = axios.create({
      baseURL: apiUrl,
      headers: {
        Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
        Authorization: `Bearer ${token}`,
        "Tenant-Id": tenant.id,
        "Tenant-Type": tenant.tenantType,
        "Branch-Id": currentBranch.id,
        Branch: currentBranch.branchName,
        "Dev-Name": tenant.company.devName,
      },
    });

    // tenant.company.devName,

    // api.interceptors.request.use(config => ({
    //   ...config,

    //   headers: {
    //     ...config.headers,
    //     "Username": localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
    //     //  "Authorization": `Bearer ${localStorage.getItem(constants.LOCAL_STORAGE_KEYS.VUE_TOKEN)}`
    //     "Authorization": `Bearer ${store.state.security.user.keycloak.token}`

    //   }

    // }), null, { synchronous: true })
    return api;
  },

  createAPINoHeaders() {
    let api = axios.create({
      baseURL: apiUrl,
    });
    console.log("API URL NO headers URL ", apiUrl);
    return api;
  },
};

// api.defaults.timeout = 120000;

export default api;
