import Country from "./Country.vue";
import Countries from "./Countries.vue";
import { navUtils } from 'saburi-vue-utils';

const countryNav = {
  routes: navUtils.allRoutes("country", Country, "countries", Countries, true),
  menu: {
    id: "lookup.country",
    title: "Countries",
    component: Country,
    path: "countries",
    icon: "mdi-earth",
    requires: navUtils.allRoles("country"),
    width: "700px",
    editHeaders: [
      { title: "Country Name", key: "countryName" },
      { title: "Country Code", key: "countryCode" },
      { title: "Dialling Code", key: "diallingCode" },
      { title: "Default", key: "default" },
      { title: "Hidden", key: "hidden" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      { title: "Id", align: "start", key: "id" },
      { title: "Country Name", key: "countryName" },
      { title: "Country Code", key: "countryCode" },
      { title: "Dialling Code", key: "diallingCode" },
      { title: "Default", key: "default" },
      { title: "Hidden", key: "hidden" },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
        isDateTime: true
},
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true
},
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    children: navUtils.allChildren("lookup", "country", "countries", false)
}
};
export default countryNav;
