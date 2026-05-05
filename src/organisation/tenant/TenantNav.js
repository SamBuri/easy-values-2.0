import Tenant from "./Tenant.vue";
import Tenants from "./Tenants.vue";
import navUtils from "@/nav/NavUtils";
const tenantNav = {

  routes: navUtils.allRoutes("tenant", Tenant, "tenants", Tenants, true),
  menu: {
    id: "organisation.tenant",
    title: "Tenants",
    component: Tenant,
    icon: "mdi-domain",
    path: "tenants",
    requires: navUtils.allRoles("tenant"),
    width: "700px",
    editHeaders: [

      { title: "Host", key: "host", label: "Host"},
      {
        title: "Tenant Group",
        key: "tenantGroup",

      },
      { title: "Actions", key: "actions" },
    ],
    headers: [

      { title: "Host", key: "host", },
      {
        title: "Auth Url",
        key: "tenantGroup.authUrl",
        label: "Auth Url",
        field: "authUrl",
      },
      { title: "Realm", key: "tenantGroup.realm",  },
      {
        title: "Issuer Url",
        key: "tenantGroup.issuerUrl",

      },

      {
        title: "Disabled",
        key: "disabled",

      },
      {
        title: "Creation Date",
        key: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      {
        title: "Created By",
        key: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        title: "Modified By",
        key: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],

    children: navUtils.allChildren(
      "organisation",
      "tenant",
      "tenants",
      false
    ),
  },
};
export default tenantNav;
