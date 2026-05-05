import TenantGroup from './TenantGroup.vue'
import TenantGroups from './TenantGroups.vue'
import navUtils from "@/nav/NavUtils";

const tenantGroupNav = {
  routes: navUtils.allRoutes("tenantgroup", TenantGroup, "tenantgroups", TenantGroups, true),
  menu: {
    id: "organisation.tenantgroup",
    title: "Tenant Groups",
    component: TenantGroup,
    path: "tenantgroups",
    requires: navUtils.allRoles("tenantgroup"),
    width: "700px",
    editHeaders: [{title: "Realm", key: "realm"},
      {title: "Auth Url", key: "authUrl"},
      {title: "Issuer Url", key: "issuerUrl"},
      {title: "Auth Client Id", key: "authClientId"},
      // {title: "Implicit Client Id", key: "implicitClientId"},
      // {title: "Implicit Client Secret", key: "implicitClientSecret"},
      {title: "Disabled", key: "disabled"},
      {title: "Actions", key: "actions"}], headers: [{
      title: "Id",
      align: "start",
      // sortable: false,
      key: "id",
    },
      {title: "Auth Url", key: "authUrl"},
      {title: "Realm", key: "realm"},
      {title: "Issuer Url", key: "issuerUrl"},
      {title: "Auth Client Id", key: "authClientId"},
      // {title: "Implicit Client Id", key: "implicitClientId"},
      // {title: "Implicit Client Secret", key: "implicitClientSecret"},
      {title: "Disabled", key: "disabled"},
      {title: "Branch", key: "branch",},
      {title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true},
      {title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
      {title: "Created By", key: "createdBy",},
      {title: "Modified By", key: "modifiedBy",}],
    children: navUtils.allChildren(
      "organisation",
      "tenantgroup",
      "tenantgroups",
      false
    ),
  }
}
export default tenantGroupNav;
