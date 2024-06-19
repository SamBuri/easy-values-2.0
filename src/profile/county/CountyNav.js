import County from './County.vue'
 import Counties from './Counties.vue'
 const countyNav={ routes:[
        {
                path: '/county/:mode',
                name: 'county',
                component: County,
                meta: { auth: true },
         },
         {
                path: '/counties',
                name: 'counties',
                component: Counties,
                meta: { auth: true },
         },

        ], menu: {
                id: "address.county",
                title: "Counties",
                component: County,
                path: "counties",
                width: "700px",
                editHeaders: [{ title: "District", key: "district.displayKey" },
                { title: "County Name", key: "countyName" },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "District", key: "district.displayKey" },
                { title: "County Name", key: "countyName" },
                { title: "Hidden", key: "hidden" },
                ],
                children: [
                  { id: "address.county.view", title: "View", to: {name:"counties"} },
                { id: "address.county.new", title: "New", to: {name:"county", params: {mode: 0}} },
                { id: "address.county.edit", title: "Edit", to: {name:"county", params: {mode: 1}} },
                { id: "address.county.history", title: "History",  to: {name:"county", params: {mode: 2}} },
                ]
        }
}
export default countyNav;
