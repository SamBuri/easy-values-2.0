import navUtils from "@/nav/NavUtils";
import LookupData from "./LookupData.vue";
import LookupDatas from "./LookupDatas.vue";
const lookupDataNav = {
  // routes: [
  //   {
  //     path: "/ldata/:mode",
  //     name: "ldata",
  //     component: LookupData,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/lookupdata",
  //     name: "lookupdata",
  //     component: LookupDatas,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("ldata", LookupData, "lookupdata", LookupDatas, true),
  menu: {
    id: "lookup.lookupdata",
    title: "Lookup Data",
    component: LookupData,
    path: "lookupdata",
    width: "700px",
    icon:"mdi-database-arrow-up",
    requires: navUtils.allRoles("lookupdata"),
    requires: ['lookupdata_all', 'lookupdata_view', 'lookupdata_create', 'lookupdata_update', 'lookupdata_delete'],
    editHeaders: [
      { title: "Lookup Object", key: "lookupObject" },
      { title: "Lookup Data Name", key: "lookupDataName" },
      { title: "Read Only", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
      { title: "Default", key: "isDefault" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },


      { title: "Object Name", key: "lookupObject.objectName" },
      { title: "Lookup Data Name", key: "lookupDataName" },
      { title: "Read Only", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
      { title: "Default", key: "isDefault" },
      { title: "Branch", key: "branch", label: "Branch", field: "branch" },
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
    children: [
      {
        id: "lookup.lookupData.view",
        title: "View",
        to: { name: "lookupdata" },
        icon: "mdi-table",
        requires: ['lookupdata_all', 'lookupdata_view'],
      },
      {
        id: "lookup.lookupData.new",
        title: "New",
        to: { name: "ldata", params: { mode: 0 } },
        icon: "mdi-plus-circle",
        requires: ['lookupdata_all', 'lookupdata_create'],
      },
      {
        id: "lookup.lookupData.edit",
        title: "Edit",
        to: { name: "ldata", params: { mode: 1 } },
        icon: "mdi-pencil",
        requires: ['lookupdata_all', 'lookupdata_updata'],
      },
      {
        id: "lookup.lookupData.history",
        title: "History",
        to: { name: "ldata", params: { mode: 2 } },
        icon: "mdi-history",
        requires: ['lookupdata_all', 'lookupdata_view'],
      },
    ],
  },
};
export default lookupDataNav;
