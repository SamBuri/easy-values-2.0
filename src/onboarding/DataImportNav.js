import { navUtils } from 'saburi-vue-utils';
import { importActions, onboardingModuleMapping } from './DataImportMapping';

const dataImportNav = {
  routes: [navUtils.viewRoute("data-import", () => import('./DataImportWizard.vue'))],
  menu: {
    id: "dataimport",
    title: "Data Import",
    icon: "mdi-file-import",
    to: { name: "data-import" },
    requires: importActions,
  },
};

export { importActions, onboardingModuleMapping };
export default dataImportNav;
