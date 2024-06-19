import BSAccountGroup from "./BSAccountGroup.vue";
import BSAccountGroups from "./BSAccountGroups.vue";
const bSAccountGroupNav = {
  routes: [
    {
      path: "/bsaccountgroup/:mode",
      name: "bsaccountgroup",
      component: BSAccountGroup,
      meta: { auth: true },
    },
    {
      path: "/bsaccountgroups",
      name: "bsaccountgroups",
      component: BSAccountGroups,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "accounting.bsaccountgroup",
    title: "BS Account Groups",
    component: BSAccountGroup,
    path: "bsaccountgroups",
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
    children: [
      {
        id: "accounting.bSAccountGroup.new",
        name: "New",
        route: "bSAccountGroup",
        mode: 0,
      },
      {
        id: "accounting.bSAccountGroup.edit",
        name: "Edit",
        route: "bSAccountGroup",
        mode: 1,
      },
      {
        id: "accounting.bSAccountGroup.history",
        name: "History",
        route: "bSAccountGroup",
        mode: 2,
      },
    ],
  },
};
export default bSAccountGroupNav;
