import BSAccountGroup from "./BSAccountGroup.vue";
import BSAccountGroups from "./BSAccountGroups.vue";
import { navUtils } from "saburi-vue-utils";

const bSAccountGroupNav = {
  routes: navUtils.allRoutes("bs-account-group", BSAccountGroup, "bs-account-groups", BSAccountGroups, true, "bsaccountgroup"),
  menu: {
    id: "accounting.bsaccountgroup",
    title: "BS Account Groups",
    component: BSAccountGroup,
    path: "bs-account-groups",
    requires: navUtils.allRoles("bs-account-groups"),
    width: "700px",
    editHeaders: [
      {
        title: "Business Section",
        key: "businessSectionId",
        label: "Business Section",
        field: "businessSectionId",
      },
      {
        text: "Business Section",
        value: "businessSection",
        label: "Business Section",
        field: "businessSection",
      },
      {
        text: "Asset Account",
        value: "assetAccount",
        label: "Asset Account",
        field: "assetAccount",
      },
      {
        text: "Equity Account",
        value: "equityAccount",
        label: "Equity Account",
        field: "equityAccount",
      },
      {
        text: "Liability Account",
        value: "liabilityAccount",
        label: "Liability Account",
        field: "liabilityAccount",
      },
      { text: "Actions", value: "actions" },
    ],
    headers: [
      {
        text: "Id",
        align: "start",
        // sortable: false,
        value: "id",
      },
      {
        text: "Business Section",
        value: "businessSectionId",
        label: "Business Section",
        field: "businessSectionId",
      },
      {
        text: "Business Section",
        value: "businessSection",
        label: "Business Section",
        field: "businessSection",
      },
      {
        text: "Asset Account",
        value: "assetAccount",
        label: "Asset Account",
        field: "assetAccount",
      },
      {
        text: "Equity Account",
        value: "equityAccount",
        label: "Equity Account",
        field: "equityAccount",
      },
      {
        text: "Liability Account",
        value: "liabilityAccount",
        label: "Liability Account",
        field: "liabilityAccount",
      },
      { text: "Branch", value: "branch", label: "Branch", field: "branch" },
      {
        text: "Creation Date",
        value: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        text: "Last Modified Date",
        value: "lastModifiedDate",
        isDateTime: true,
      },
      {
        text: "Created By",
        value: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        text: "Modified By",
        value: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],
    children: navUtils.allChildren("accounting", "bs-account-groups", "bs-account-groups", false, "bsaccountgroup"),
  },
};
export default bSAccountGroupNav;
