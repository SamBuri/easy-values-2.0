import SubCounty from './SubCounty.vue'
 import SubCounties from './SubCounties.vue'
 const subCountyNav={ routes:[
        {
                path: '/subcounty/:mode',
                name: 'subcounty',
                component: SubCounty,
                meta: { auth: true },
         },
         {
                path: '/subcounties',
                name: 'subcounties',
                component: SubCounties,
                meta: { auth: true },
         },

        ], menu: {
                id: "address.subcounty",
                title: "Sub Counties",
                component: SubCounty,
                path: "subcounties",
                width: "700px",
                editHeaders: [{ title: "County", key: "county.displayKey" },
                { title: "Sub County Name", key: "subCountyName" },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "County", key: "county.displayKey" },
                { title: "Sub County Name", key: "subCountyName" },
                { title: "Hidden", key: "hidden" },
                ],
                children: [
                  { id: "address.subCounty.view", title: "View", to:{ name: "subcounties" } },
                { id: "address.subCounty.new", title: "New", to:{ name: "subcounty",params: { mode: 0}} },
                { id: "address.subCounty.edit", title: "Edit", to:{ name: "subcounty",params: { mode: 1}} },
                { id: "address.subCounty.history", title: "History", to:{ name: "subcounty",params: { mode: 2}} },
                ]
        }
}
export default subCountyNav;
