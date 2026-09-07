import MeasureRelation from "./MeasureRelation.vue";
import MeasureRelations from "./MeasureRelations.vue";
import { navUtils } from "saburi-vue-utils";

const measureRelationNav = {
  routes: navUtils.allRoutes("measure-relation", MeasureRelation, "measure-relations", MeasureRelations, true, "measurerelation"),
  menu: {
    id: "lookup.measurerelation",
    title: "Measure Relations",
    component: MeasureRelation,
    path: "measure-relations",
    requires: navUtils.allRoles("measure-relations"),
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
    children: navUtils.allChildren("lookup", "measure-relations", "measure-relations", false, "measurerelation"),
  },
};
export default measureRelationNav;
