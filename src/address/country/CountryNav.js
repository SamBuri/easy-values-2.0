import Country from './Country.vue'
const countryNav = {
        route: {
                path: '/country/:mode',
                name: 'country',
                component: Country,
                meta: {auth: true}
        }, menu: {
                id: "address.country",
                name: "Countries",
                component: Country,
                path: "countries",
                width: "700px",
                editHeaders: [{ text: "Country Name", value: "countryName" },
                { text: "Country Code", value: "countryCode" },
                { text: "Default", value: "isDefault" },
                { text: "Hidden", value: "hidden" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Country Name", value: "countryName" },
                { text: "Country Code", value: "countryCode" },
                { text: "Default", value: "isDefault" },
                { text: "Hidden", value: "hidden" },
                ],
                children: [{ id: "address.country.new", name: "New", route: "country", mode: 0 },
                { id: "address.country.edit", name: "Edit", route: "country", mode: 1 },
                { id: "address.country.history", name: "History", route: "country", mode: 2 },
                ]
        }
}
export default countryNav;
