import axios from "axios";
import constants from "./constants";
import store from "../store/index";
import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
// import keycloakToken from './keycloakToken'
// const processingEnvironment = 'dev'; //'test', 'dev' , 'live'
// const devBaseDomain = http://localhost:8089/'; //dev Server
// const liveBaseDomain = 'https://capiservicegateway.herokuapp.com/'; //test Server

// var baseUrl = (processingEnvironment == 'live') ? liveBaseDomain : devBaseDomain;
// var remUrl = "http://easy-loadba-ymtyd37ppzwe-1808acffc1463c96.elb.us-east-1.amazonaws.com:8089/";

// var remUrl = "" //process.env.VUE_APP_API_PATH
// console.log("API URL", window.VUE_APP_API_URL)
var baseURL = ""; // window.VUE_APP_API_URL;
// var apiUrl =  baseURL?baseURL:"https://api.capidattex.net/"
var apiUrl = baseURL ? baseURL : "http://localhost:8089/";
console.log("The API Gateway 1", apiUrl);

const api = {
   createAPI() {
    const authStore = useAuthStore();
    const tenantStore = defineTenantStore();
    const branchStore = defineBranchStore();
    let token = authStore.user.token;
    let tenant = tenantStore.firstTenant;
    let currentBranch = branchStore.currentBranch;

    // let ct =  Date.now();

    // if(expiry-60000<=ct){
    //    authStore.refreshUserToken();
    // }

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
