import Country from './Country.vue'
 import Countries from './Countries.vue'
 const countryNav={ routes:[
        {
                path: '/country/:mode',
                name: 'country',
                component: Country,
                meta: { auth: true },
         },
         {
                path: '/countries',
                name: 'countries',
                component: Countries,
                meta: { auth: true },
         },
        
        ],
menu:{id: "profile.country",
        title: "Countries",
        component: Country,
        path: "countries",
        width: "700px",
editHeaders: [{ title: "Country Name", key: "countryName"    },
{ title: "Country Code", key: "countryCode"    },
{ title: "Default", key: "default"    },
{ title: "Hidden", key: "hidden"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Country Name", key: "countryName"    },
{ title: "Country Code", key: "countryCode"    },
{ title: "Default", key: "default"    },
{ title: "Hidden", key: "hidden"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "profile.country.view", title: "View",  to:{ name: "countries", }},
{ id: "profile.country.new", title: "New",  to:{ name: "country", params: {mode:0}}},
{ id: "profile.country.edit", title: "Edit",  to:{ name: "country", params: {mode:1}}},
{ id: "profile.country.history", title: "History",  to:{ name: "country", params: {mode:2}}},
]}
}
export default countryNav;
