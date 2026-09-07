import OrganisationSetting from './OrganisationSetting.vue';
import OrganisationSettings from './OrganisationSettings.vue';
import { navUtils } from 'saburi-vue-utils';

const organisationSettingNav = {
  routes: navUtils.allRoutes("organisation-setting", OrganisationSetting, "organisation-settings", OrganisationSettings, true, "organisationsetting"),
  menu: {
    id: "organisation.organisationsetting",
    title: "Organisation Settings",
    component: OrganisationSetting,
    path: "organisation-settings",
    requires: navUtils.allRoles("organisation-settings"),
    width: "700px",
    editHeaders: [
      { title: "Company", key: "company.companyName" },
      { title: "Setting", key: "setting.propertyName" },
      { title: "Property Value", key: "propertyValue" },
      { title: "Actions", key: "actions" }
    ],
    headers: [
      { title: "Id", key: "id" },
      { title: "Company", key: "company.companyName" },
      { title: "Setting", key: "setting.propertyName" },
      { title: "Property Value", key: "propertyValue" },
      { title: "Creation Date", key: "creationDate", isDateTime: true },
      { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true }
    ],
    children: navUtils.allChildren("organisation", "organisation-settings", "organisation-settings", false, "organisationsetting")
  }
};

export default organisationSettingNav;
