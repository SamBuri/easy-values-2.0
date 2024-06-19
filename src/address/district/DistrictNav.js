import District from './District.vue'
const districtNav = {
        route: {
                path: '/district/:mode',
                name: 'district',
                component: District,
                meta: { auth: true }
        }, menu: {
                id: "address.district",
                name: "Districts",
                component: District,
                path: "districts",
                width: "700px",
                editHeaders: [{ text: "Country", value: "country.displayKey" },
                { text: "District Name", value: "districtName" },
                { text: "Default", value: "isDefault" },
                { text: "Hidden", value: "hidden" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Country", value: "country.displayKey" },
                { text: "District Name", value: "districtName" },
                { text: "Default", value: "isDefault" },
                { text: "Hidden", value: "hidden" },
                ],
                children: [{ id: "address.district.new", name: "New", route: "district", mode: 0 },
                { id: "address.district.edit", name: "Edit", route: "district", mode: 1 },
                { id: "address.district.history", name: "History", route: "district", mode: 2 },
                ]
        }
}
export default districtNav;
