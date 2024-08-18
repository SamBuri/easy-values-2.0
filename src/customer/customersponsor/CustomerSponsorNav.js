import CustomerSponsor from './CustomerSponsor.vue'
 import CustomerSponsors from './CustomerSponsors.vue'
 const customerSponsorNav={ routes:[
        {
                path: '/customersponsor/:mode',
                name: 'customersponsor',
                component: CustomerSponsor,
                meta: { auth: true },
         },
         {
                path: '/customersponsors',
                name: 'customersponsors',
                component: CustomerSponsors,
                meta: { auth: true },
         },
        
        ],
menu:{id: "customer.customersponsor",
        title: "Customer Sponsors",
        component: CustomerSponsor,
        path: "customersponsors",
        width: "700px",
editHeaders: [{ title: "Customer", key: "customer"    },
{ title: "Sponsor", key: "sponsor"    },
{ title: "Is Default", key: "isDefault"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Customer", key: "customer"    },
{ title: "Sponsor", key: "sponsor"    },
{ title: "Is Default", key: "isDefault"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "customer.customerSponsor.view", title: "View",  to:{ name: "customersponsors", }},
{ id: "customer.customerSponsor.new", title: "New",  to:{ name: "customersponsor", params: {mode:0}}},
{ id: "customer.customerSponsor.edit", title: "Edit",  to:{ name: "customersponsor", params: {mode:1}}},
{ id: "customer.customerSponsor.history", title: "History",  to:{ name: "customersponsor", params: {mode:2}}},
]}
}
export default customerSponsorNav;
