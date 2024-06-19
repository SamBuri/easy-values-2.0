import MeasureGroup from "./MeasureGroup.vue";
import MeasureGroups from "./MeasureGroups.vue";
const measureGroupNav = {
  routes: [
    {
      path: "/measuregroup/:mode",
      name: "measuregroup",
      component: MeasureGroup,
      meta: { auth: true },
    },
    {
      path: "/measuregroups",
      name: "measuregroups",
      component: MeasureGroups,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "items.measuregroup",
    title: "Measure Groups",
    component: MeasureGroup,
    path: "measuregroups",
    width: "700px",
    editHeaders: [
      { title: "Measure Group Name", key: "measureGroupName" },
      { title: "Measure Relation", key: "measureRelation.displayKey" },
      { Actions: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Measure Group Name", key: "measureGroupName" },
      { title: "Measure Relation", key: "measureRelation.displayKey" },
    ],
    children: [
      {
        id: "items.measureGroup.view",
        title: "View",
        to: { name: "measuregroups" },
      },
      {
        id: "items.measureGroup.new",
        title: "New",
        to: { name: "measuregroup", params: { mode: 0 } },
      },
      {
        id: "items.measureGroup.edit",
        title: "Edit",
        to: { name: "measuregroup", params: { mode: 1 } },
      },
      {
        id: "items.measureGroup.history",
        title: "History",
        to: { name: "measuregroup", params: { mode: 2 } },
      },
    ],
  },
};
export default measureGroupNav;
