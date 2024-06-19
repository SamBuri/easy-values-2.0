import MeasureRelation from './MeasureRelation.vue'
const measureRelationNav = {
        route: {
                path: '/measureRelation/:mode',
                name: 'measureRelation',
                component: MeasureRelation,
                meta: {auth: true}
        }, menu: {
                id: "items.measurerelation",
                name: "Measure Relations",
                component: MeasureRelation,
                path: "measurerelations",
                width: "700px",
                editHeaders: [
                { text: "Measure Name", value: "measureName" },
                { text: "Measure Size", value: "measureSize" },
                { text: "Basic", value: "basic" },
                { text: "Default Usage", value: "defaultUsage" },
                { text: "Actions", value: "actions" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Measure Group", value: "measureGroup.displayKey" },
                { text: "Measure Name", value: "measureName" },
                { text: "Measure Size", value: "measureSize" },
                { text: "Basic", value: "basic" },
                { text: "Default Usage", value: "defaultUsage" },
                ], children: [{ id: "items.measureRelation.new", name: "New", route: "measureRelation", mode: 0 },
                { id: "items.measureRelation.edit", name: "Edit", route: "measureRelation", mode: 1 },
                { id: "items.measureRelation.history", name: "History", route: "measureRelation", mode: 2 },
                ]
        }
}
export default measureRelationNav;
