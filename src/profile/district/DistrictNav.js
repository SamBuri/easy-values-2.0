import District from './District.vue'
 import Districts from './Districts.vue'
 const districtNav={ routes:[
        {
                path: '/district/:mode',
                name: 'district',
                component: District,
                meta: { auth: true },
         },
         {
                path: '/districts',
                name: 'districts',
                component: Districts,
                meta: { auth: true },
         },

        ], menu: {
                id: "address.district",
                title: "Districts",
                component: District,
                path: "districts",
                width: "700px",
                editHeaders: [{ title: "Country", key: "country.displayKey" },
                { title: "District Name", key: "districtName" },
                { title: "Default", key: "isDefault" },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Country", key: "country.displayKey" },
                { title: "District Name", key: "districtName" },
                { title: "Default", key: "isDefault" },
                { title: "Hidden", key: "hidden" },
                ],
                children: [
                  { id: "address.district.view", title: "View", to: {name: "districts"} },
                { id: "address.district.new", title: "New", to: {name: "district", params:{mode: 0}} },
                { id: "address.district.edit", title: "Edit", to: {name: "district", params:{mode: 1}}},
                { id: "address.district.history", title: "History", to: {name: "district", params:{mode: 1}} },
                ]
        }
}
export default districtNav;
