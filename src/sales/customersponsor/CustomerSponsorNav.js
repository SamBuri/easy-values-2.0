import CustomerSponsor from './CustomerSponsor.vue'
import CustomerSponsors from './CustomerSponsors.vue'
import { navUtils } from 'saburi-vue-utils';
const customerSponsorNav = {
        routes: navUtils.allRoutes("customer-sponsor", CustomerSponsor, "customer-sponsors", CustomerSponsors, true, "customersponsor"),
        menu: {
                id: "sales.customersponsor",
                title: "Customer Sponsors",
                component: CustomerSponsor,
                path: "customer-sponsors",
                requires: navUtils.allRoles("customer-sponsors"),
                width: "700px",
                editHeaders: [{ title: "Customer", key: "customer.id" },
                { title: "Sponsor", key: "sponsor.id" },
                { title: "Is Default", key: "isDefault" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Customer", key: "customer.id" },
                { title: "Sponsor", key: "sponsor.id" },
                { title: "Is Default", key: "isDefault" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: navUtils.allChildren("sales", "customer-sponsors", "customer-sponsors", false, "customersponsor"),
        }
}
export default customerSponsorNav;
