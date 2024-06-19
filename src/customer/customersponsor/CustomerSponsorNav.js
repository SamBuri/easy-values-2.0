import CustomerSponsor from './CustomerSponsor.vue'
 const customerSponsorNav={ route: {
                path: '/customerSponsor/:mode',
                name: 'customerSponsor',
                component: CustomerSponsor,
                meta: {auth: true}
        },menu:{id: "customer.customersponsor",
        name: "Customer Sponsors",
        component: CustomerSponsor,
        path: "customersponsors",
        width: "700px",
editHeaders: [{ title: "Customer", key: "customer.displayKey" },
{ title: "Sponsor", key: "sponsor.displayKey" },
{ title: "Is Default", key: "isDefault" },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Customer", key: "customer.displayKey" },
{ title: "Sponsor", key: "sponsor.displayKey" },
{ title: "Is Default", key: "isDefault" },
],
children: [{ id: "customer.customerSponsor.new", title: "New", route: "customerSponsor", mode: 0},
{ id: "customer.customerSponsor.edit", title: "Edit", route: "customerSponsor", mode: 1},
{ id: "customer.customerSponsor.history", title: "History", route: "customerSponsor", mode: 2},
]}
}
export default customerSponsorNav;
