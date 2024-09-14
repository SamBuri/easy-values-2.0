import Parish from './Parish.vue'
 import Parishes from './Parishes.vue'
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
                component: Parishes,
                meta: { auth: true },
         },
        
        ],
menu:{id: "profile.parish",
        title: "Parishes",
        component: Parish,
        path: "parishes",
        width: "700px",
editHeaders: [{ title: "Country", key: "countryId"    },
{ title: "District", key: "districtId"    },
{ title: "County", key: "countyId"    },
{ title: "Sub County", key: "subCountyId"    },
{ title: "Parish Name", key: "parishName"    },
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
{ title: "Parish Name", key: "parishName"    },
{ title: "Hidden", key: "hidden"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.parish.view", title: "View",  to:{ name: "parishes", }},
{ id: "profile.parish.new", title: "New",  to:{ name: "parish", params: {mode:0}}},
{ id: "profile.parish.edit", title: "Edit",  to:{ name: "parish", params: {mode:1}}},
{ id: "profile.parish.history", title: "History",  to:{ name: "parish", params: {mode:2}}},
]}
}
export default parishNav;
