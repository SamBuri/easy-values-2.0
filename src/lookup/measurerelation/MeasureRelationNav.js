import MeasureRelation from './MeasureRelation.vue'
const measureRelationNav = {
        routes: [
               {path: '/measurerelation/:mode',
                name: 'measurerelation',
                component: MeasureRelation,
                meta: {auth: true}
        },
      ], menu: {
                id: "items.measurerelation",
                name: "Measure Relations",
                component: MeasureRelation,
                path: "measurerelations",
                width: "700px",
                editHeaders: [
                { title: "Measure Name", key: "measureName" },
                { title: "Measure Size", key: "measureSize" },
                { title: "Basic", key: "basic" },
                { title: "Default Usage", key: "defaultUsage" },
                { title: "Actions", key: "actions" },
                ], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Measure Group", key: "measureGroup.displayKey" },
                { title: "Measure Name", key: "measureName" },
                { title: "Measure Size", key: "measureSize" },
                { title: "Basic", key: "basic" },
                { title: "Default Usage", key: "defaultUsage" },
                ], children: [
                  { id: "items.measureRelation.view", name: "View", to: {name: "measurerelations" }},
                  { id: "items.measureRelation.new", name: "New", to: {name: "measurerelation",params:{ mode: 0} }},
                { id: "items.measureRelation.edit", name: "Edit", to: {name: "measurerelation",params:{ mode: 1}} },
                { id: "items.measureRelation.history", name: "History", to: {name: "measurerelation",params:{ mode: 2}} },
                ]
        }
}
export default measureRelationNav;
