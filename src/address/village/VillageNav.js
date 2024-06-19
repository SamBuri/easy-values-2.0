import Village from './Village.vue'
const villageNav = {
        route: {
                path: '/village/:mode',
                name: 'village',
                component: Village,
                meta: {auth: true}
        }, menu: {
                id: "address.village",
                name: "Villages",
                component: Village,
                path: "villages",
                width: "700px",
                editHeaders: [{ text: "Country", value: "country.displayKey" },
                { text: "District", value: "district.displayKey" },
                { text: "County", value: "county.displayKey" },
                { text: "Sub County", value: "subCounty.displayKey" },
                { text: "Parish", value: "parish.displayKey" },
                { text: "Village Name", value: "villageName" },
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
                { text: "Parish", value: "parish.displayKey" },
                { text: "Village Name", value: "villageName" },
                { text: "Hidden", value: "hidden" },
                ],
                children: [{ id: "address.village.new", name: "New", route: "village", mode: 0 },
                { id: "address.village.edit", name: "Edit", route: "village", mode: 1 },
                { id: "address.village.history", name: "History", route: "village", mode: 2 },
                ]
        }
}
export default villageNav;
