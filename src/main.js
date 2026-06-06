/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import "@/utils/Prototypes"; //add protypes

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import initKeyCloak from "./keycloak/InitKeyCloak";
import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";

const app = createApp(App);

registerPlugins(app);

const authStore = useAuthStore();
const tenantStore = defineTenantStore();

// initialize keycloak
initKeyCloak()
    .then((keycloak) => {
      app.provide('keycloak', keycloak);
      app.mount("#app");
    })
    .catch((error) => {
      console.error("Failed to initialize Keycloak:", error);
    });
// initKeyCloak(()=>app.mount("#app"));
console.log("Environment Variables:", import.meta.env);
console.log("Testing:");




