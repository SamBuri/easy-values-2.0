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
import registerComponents from "./components";

// Composables
import { createApp } from "vue";

import initKeyCloak from "./keycloak/InitKeyCloak";

const app = createApp(App);

import { provide } from "vue";

registerPlugins(app);
//register components. Create all utility components in  the components folder
registerComponents(app);

// app.mount("#app");
// initialize keycloak
initKeyCloak(() => {
    console.log("Keycloak initialized successfully");
    
  })
    .then((keycloak) => {
      // Store Keycloak instance in app's global properties
    //   app.config.globalProperties.$keycloak = keycloak;
      app.provide('keycloak', keycloak);
      app.mount("#app");
     
    })
    .catch((error) => {
      console.error("Failed to initialize Keycloak:", error);
      // Optionally mount the app anyway or show an error page
    //   app.mount("#app");
    });
// initKeyCloak(()=>app.mount("#app"));
console.log("Environment Variables:", import.meta.env);
console.log("Testing:");




