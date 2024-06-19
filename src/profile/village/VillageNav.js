import Village from './Village.vue'
 import Villages from './Villages.vue'
 const villageNav={ routes:[
        {
                path: '/village/:mode',
                name: 'village',
                component: Village,
                meta: { auth: true },
         },
         {
                path: '/villages',
                name: 'villages',
                component: Villages,
                meta: { auth: true },
         },

        ], menu: {
                id: "address.village",
                title: "Villages",
                component: Village,
                path: "villages",
                width: "700px",
                editHeaders: [{ title: "Country", value: "country.displayKey" },
                { title: "District", value: "district.displayKey" },
                { title: "County", value: "county.displayKey" },
                { title: "Sub County", value: "subCounty.displayKey" },
                { title: "Parish", value: "parish.displayKey" },
                { title: "Village Name", value: "villageName" },
                { title: "Hidden", value: "hidden" },
                { title: "Actions", value: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { title: "Country", value: "country.displayKey" },
                { title: "District", value: "district.displayKey" },
                { title: "County", value: "county.displayKey" },
                { title: "Sub County", value: "subCounty.displayKey" },
                { title: "Parish", value: "parish.displayKey" },
                { title: "Village Name", value: "villageName" },
                { title: "Hidden", value: "hidden" },
                ],
                children: [
                  { id: "address.village.view", title: "View", to: {name:"villages"}},
                { id: "address.village.new", title: "New", to: {name:"village",params:{ mode: 0 }}},
                { id: "address.village.edit", title: "Edit", to: {name:"village",params:{ mode: 1 }}},
                { id: "address.village.history", title: "History", to: {name:"village",params:{ mode: 2 }}},
                ]
        }
}
export default villageNav;
