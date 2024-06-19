import Parish from './Parish.vue'
 import Parishs from './Parishs.vue'
 const parishNav={ routes:[
        {
                path: '/parish/:mode',
                name: 'parish',
                component: Parish,
                meta: { auth: true },
         },
         {
                path: '/parishes',
                name: 'parishes',
                component: Parishs,
                meta: { auth: true },
         },

        ], menu: {
                id: "address.parish",
                title: "Parishes",
                component: Parish,
                path: "parishes",
                width: "700px",
                editHeaders: [{ title: "Country", key: "country.displayKey" },
                { title: "District", key: "district.displayKey" },
                { title: "County", key: "county.displayKey" },
                { title: "Sub County", key: "subCounty.displayKey" },
                { title: "Parish Name", key: "parishName" },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Country", key: "country.displayKey" },
                { title: "District", key: "district.displayKey" },
                { title: "County", key: "county.displayKey" },
                { title: "Sub County", key: "subCounty.displayKey" },
                { title: "Parish Name", key: "parishName" },
                { title: "Hidden", key: "hidden" },
                ],
                children: [
                  { id: "address.parish.view", title: "View", to: {name:"parishes"} },
                  { id: "address.parish.new", title: "New", to: {name:"parish", params:{mode: 0}} },
                { id: "address.parish.edit", title: "Edit", to: {name:"parish", params:{mode: 1}} },
                { id: "address.parish.history", title: "History", to: {name:"parish", params:{mode: 2}} },
                ]
        }
}
export default parishNav;
