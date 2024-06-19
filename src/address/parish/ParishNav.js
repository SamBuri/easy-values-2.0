import Parish from './Parish.vue'
const parishNav = {
        route: {
                path: '/parish/:mode',
                name: 'parish',
                component: Parish,
                meta: {auth: true}
        }, menu: {
                id: "address.parish",
                name: "Parishs",
                component: Parish,
                path: "parishs",
                width: "700px",
                editHeaders: [{ text: "Country", value: "country.displayKey" },
                { text: "District", value: "district.displayKey" },
                { text: "County", value: "county.displayKey" },
                { text: "Sub County", value: "subCounty.displayKey" },
                { text: "Parish Name", value: "parishName" },
                { text: "Hidden", value: "hidden" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Country", value: "country.displayKey" },
                { text: "District", value: "district.displayKey" },
                { text: "County", value: "county.displayKey" },
                { text: "Sub County", value: "subCounty.displayKey" },
                { text: "Parish Name", value: "parishName" },
                { text: "Hidden", value: "hidden" },
                ],
                children: [{ id: "address.parish.new", name: "New", route: "parish", mode: 0 },
                { id: "address.parish.edit", name: "Edit", route: "parish", mode: 1 },
                { id: "address.parish.history", name: "History", route: "parish", mode: 2 },
                ]
        }
}
export default parishNav;
