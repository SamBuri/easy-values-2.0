/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
import registerComponents from "./components";

// Composables
import { createApp } from "vue";

import initKeyCloak from "./keycloak/InitKeyCloak";

const app = createApp(App);

registerPlugins(app);
//register components. Create all utility components in  the components folder
registerComponents(app);
//initialize keycloak
initKeyCloak(()=>app.mount("#app"));




