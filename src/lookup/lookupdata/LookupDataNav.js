import { navUtils } from 'saburi-vue-utils';
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
  routes: navUtils.allRoutes("ldata", LookupData, "lookup-data", LookupDatas, true, "lookupdata"),
  menu: {
    id: "lookup.lookupdata",
    title: "Lookup Data",
    component: LookupData,
    path: "lookup-data",
    width: "700px",
    icon:"mdi-database-arrow-up",
    requires: navUtils.allRoles("lookup-data"),
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
    children: navUtils.allChildren("lookup", "lookup-data", "lookup-data", false, "ldata"),
  },
};
export default lookupDataNav;
