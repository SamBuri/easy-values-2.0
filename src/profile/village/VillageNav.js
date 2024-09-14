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
        
        ],
menu:{id: "profile.village",
        title: "Villages",
        component: Village,
        path: "villages",
        width: "700px",
editHeaders: [{ title: "Country", key: "countryId"    },
{ title: "District", key: "districtId"    },
{ title: "County", key: "countyId"    },
{ title: "Sub County", key: "subCountyId"    },
{ title: "Parish", key: "parishId"    },
{ title: "Village Name", key: "villageName"    },
{ title: "Hidden", key: "hidden"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Country", key: "countryId"    },
{ title: "District", key: "districtId"    },
{ title: "County", key: "countyId"    },
{ title: "Sub County", key: "subCountyId"    },
{ title: "Parish", key: "parishId"    },
{ title: "Village Name", key: "villageName"    },
{ title: "Hidden", key: "hidden"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.village.view", title: "View",  to:{ name: "villages", }},
{ id: "profile.village.new", title: "New",  to:{ name: "village", params: {mode:0}}},
{ id: "profile.village.edit", title: "Edit",  to:{ name: "village", params: {mode:1}}},
{ id: "profile.village.history", title: "History",  to:{ name: "village", params: {mode:2}}},
]}
}
export default villageNav;
