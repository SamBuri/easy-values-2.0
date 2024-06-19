import LookupObject from "./LookupObject.vue";
const lookupObjectNav = {
  route: {
    path: "/lookupObject/:mode",
    name: "lookupObject",
    component: LookupObject,
    meta: { auth: true },
  },
  menu: {
    id: "lookup.lookupobject",
    title: "LookupObjects",
    component: LookupObject,
    path: "lookupobjects",
    width: "700px",
    editHeaders: [
      { title: "Object Name", key: "objectName" },
      { title: "ReadOnly", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Object Name", key: "objectName" },
      { title: "ReadOnly", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
    ],
    children: [
      {
        id: "lookup.lookupObject.view",
        title: "View",
        to: { name: "lookupObjects" },
      },
      {
        id: "lookup.lookupObject.new",
        title: "New",
        to: { name: "lookupObject", params: { mode: 0 } },
      },
      {
        id: "lookup.lookupObject.edit",
        title: "Edit",
        to: { name: "lookupObject", params: { mode: 1 } },
      },
      {
        id: "lookup.lookupObject.history",
        title: "History",
        to: { name: "lookupObject", params: { mode: 2 } },
      },
    ],
  },
};
export default lookupObjectNav;
