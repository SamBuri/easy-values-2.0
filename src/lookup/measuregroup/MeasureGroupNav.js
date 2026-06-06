import MeasureGroup from "./MeasureGroup.vue";
import MeasureGroups from "./MeasureGroups.vue";
import { navUtils } from 'saburi-vue-utils';
const measureGroupNav = {
  // routes: [
  //   {
  //     path: "/measuregroup/:mode",
  //     name: "measuregroup",
  //     component: MeasureGroup,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/measuregroups",
  //     name: "measuregroups",
  //     component: MeasureGroups,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("measuregroup", MeasureGroup, "measuregroups", MeasureGroups, true),
  menu: {
    id: "lookup.measuregroup",
    title: "Measure Groups",
    component: MeasureGroup,
    path: "measuregroups",
    width: "700px",
    icon: "mdi-ruler",
    requires: navUtils.allRoles("measuregroup"),
    editHeaders: [
      { title: "Measure Group Name", key: "measureGroupName" },
      { title: "Measure Relation", key: "measureRelation" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Measure Group Name", key: "measureGroupName" },
      { title: "Branch", key: "branch" },
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
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    // children: [
    //   {
    //     id: "lookup.measureGroup.view",
    //     title: "View",
    //     to: { name: "measuregroups" },
    //     icon: "mdi-table",
    //   },
    //   {
    //     id: "lookup.measureGroup.new",
    //     title: "New",
    //     to: { name: "measuregroup", params: { mode: 0 } },
    //     icon: "mdi-plus-circle",
    //   },
    //   {
    //     id: "lookup.measureGroup.edit",
    //     title: "Edit",
    //     to: { name: "measuregroup", params: { mode: 1 } },
    //     icon: "mdi-pencil",
    //   },
    //   {
    //     id: "lookup.measureGroup.history",
    //     title: "History",
    //     to: { name: "measuregroup", params: { mode: 2 } },
    //     icon: "mdi-history",
    //   },
    // ],

    children: navUtils.allChildren("lookup", "measuregroup", "measuregroups", false),
  },
};
export default measureGroupNav;
