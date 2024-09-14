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
        
        ],
menu:{id: "profile.subcounty",
        title: "Sub Counties",
        component: SubCounty,
        path: "subcounties",
        width: "700px",
editHeaders: [{ title: "County", key: "countyId"    },
{ title: "Sub County Name", key: "subCountyName"    },
{ title: "Hidden", key: "hidden"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "County", key: "countyId"    },
{ title: "Sub County Name", key: "subCountyName"    },
{ title: "Hidden", key: "hidden"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.subCounty.view", title: "View",  to:{ name: "subcounties", }},
{ id: "profile.subCounty.new", title: "New",  to:{ name: "subcounty", params: {mode:0}}},
{ id: "profile.subCounty.edit", title: "Edit",  to:{ name: "subcounty", params: {mode:1}}},
{ id: "profile.subCounty.history", title: "History",  to:{ name: "subcounty", params: {mode:2}}},
]}
}
export default subCountyNav;
