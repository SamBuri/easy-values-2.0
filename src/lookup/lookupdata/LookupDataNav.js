import LookupData from "./LookupData.vue";
import LookupDatas from "./LookupDatas.vue";
const lookupDataNav = {
  routes: [
    {
      path: "/ldata/:mode",
      name: "ldata",
      component: LookupData,
      meta: { auth: true },
    },
    {
      path: "/lookupdata",
      name: "lookupdata",
      component: LookupDatas,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "lookup.lookupdata",
    title: "Lookup Data",
    component: LookupData,
    path: "lookupdata",
    width: "700px",
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
      },
      {
        id: "lookup.lookupData.new",
        title: "New",
        to: { name: "ldata", params: { mode: 0 } },
      },
      {
        id: "lookup.lookupData.edit",
        title: "Edit",
        to: { name: "ldata", params: { mode: 1 } },
      },
      {
        id: "lookup.lookupData.history",
        title: "History",
        to: { name: "ldata", params: { mode: 2 } },
      },
    ],
  },
};
export default lookupDataNav;
