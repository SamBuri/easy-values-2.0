import MeasureGroup from './MeasureGroup.vue'
const measureGroupNav = {
        route: {
                path: '/measureGroup/:mode',
                name: 'measureGroup',
                component: MeasureGroup,
                meta: { auth: true }
        }, menu: {
                id: "items.measuregroup",
                name: "Measure Groups",
                component: MeasureGroup,
                path: "measuregroups",
                width: "700px",
                editHeaders: [{ text: "Measure Group Name", value: "measureGroupName" },
                { text: "Measure Relation", value: "measureRelation.displayKey" },
                { Actions: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Measure Group Name", value: "measureGroupName" },
                { text: "Measure Relation", value: "measureRelation.displayKey" },
                ], children: [{ id: "items.measureGroup.new", name: "New", route: "measureGroup", mode: 0 },
                { id: "items.measureGroup.edit", name: "Edit", route: "measureGroup", mode: 1 },
                { id: "items.measureGroup.history", name: "History", route: "measureGroup", mode: 2 },
                ]
        }
}
export default measureGroupNav;
