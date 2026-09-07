import { navUtils } from 'saburi-vue-utils';

const dataImportNav = {

  routes: [navUtils.viewRoute("dataimport", () => import('./DataImportWizard.vue'))],
    menu: {
        id: "dataimport",
        title: "Data Import",
        icon: "mdi-file-import",
      to: { name: "dataimport" },
      requires: ["dataimport"],
    },

}

export default dataImportNav;
