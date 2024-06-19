import SubCounty from './SubCounty.vue'
const subCountyNav = {
        route: {
                path: '/subCounty/:mode',
                name: 'subCounty',
                component: SubCounty,
                meta: {auth: true}
        }, menu: {
                id: "address.subcounty",
                name: "Sub Counties",
                component: SubCounty,
                path: "subcounties",
                width: "700px",
                editHeaders: [{ text: "County", value: "county.displayKey" },
                { text: "Sub County Name", value: "subCountyName" },
                { text: "Hidden", value: "hidden" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "County", value: "county.displayKey" },
                { text: "Sub County Name", value: "subCountyName" },
                { text: "Hidden", value: "hidden" },
                ],
                children: [{ id: "address.subCounty.new", name: "New", route: "subCounty", mode: 0 },
                { id: "address.subCounty.edit", name: "Edit", route: "subCounty", mode: 1 },
                { id: "address.subCounty.history", name: "History", route: "subCounty", mode: 2 },
                ]
        }
}
export default subCountyNav;
