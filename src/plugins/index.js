/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import store from '@/store'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


import { createPinia } from "pinia";

const pinia = createPinia();

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(router)
 pinia.use(piniaPluginPersistedstate);
  app.use(pinia)
  app.use(store)
}
