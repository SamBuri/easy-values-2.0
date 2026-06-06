import { navUtils } from 'saburi-vue-utils';

const dataImportNav = {

  routes: [navUtils.viewRoute("dataimport", () => import('./DataImportWizard.vue'))],
    menu: {
        id: "dataimport",
        title: "Data Import",
        icon: "mdi-file-import",
        // requires: ["dataimport_read"],
      to: { name: "dataimport" },
      requires: navUtils.viewRoles("company"),
        path: "/organisation/data-import",
    },

}

export default dataImportNav;
