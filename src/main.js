/**
 * Bootstraps the Vue monolith. Authentication is handled by router guards and
 * the embedded Spring Authorization Server rather than a gateway or Keycloak.
 */
import "@/utils/Prototypes";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import App from "./App.vue";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
