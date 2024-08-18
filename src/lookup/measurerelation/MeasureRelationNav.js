import MeasureRelation from "./MeasureRelation.vue";
import MeasureRelations from "./MeasureRelations.vue";
const measureRelationNav = {
  routes: [
    {
      path: "/measurerelation/:mode",
      name: "measurerelation",
      component: MeasureRelation,
      meta: { auth: true },
    },
    {
      path: "/measurerelations",
      name: "measurerelations",
      component: MeasureRelations,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "lookup.measurerelation",
    title: "Measure Relations",
    component: MeasureRelation,
    path: "measurerelations",
    width: "700px",
    editHeaders: [
     { title: "Measure Name", key: "measureName" },
      { title: "Measure Size", key: "measureSize", isNumeric: true },
      { title: "Basic", key: "basic" },
      { title: "Default Usage", key: "defaultUsage" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Measure Group", key: "measureGroup" },
      { title: "Measure Name", key: "measureName" },
      { title: "Measure Size", key: "measureSize", isNumeric: true },
      { title: "Basic", key: "basic" },
      { title: "Default Usage", key: "defaultUsage" },
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
    children: [
      {
        id: "lookup.measureRelation.view",
        title: "View",
        to: { name: "measurerelations" },
      },
      {
        id: "lookup.measureRelation.new",
        title: "New",
        to: { name: "measurerelation", params: { mode: 0 } },
      },
      {
        id: "lookup.measureRelation.edit",
        title: "Edit",
        to: { name: "measurerelation", params: { mode: 1 } },
      },
      {
        id: "lookup.measureRelation.history",
        title: "History",
        to: { name: "measurerelation", params: { mode: 2 } },
      },
    ],
  },
};
export default measureRelationNav;
