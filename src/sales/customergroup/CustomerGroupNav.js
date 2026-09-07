import CustomerGroup from './CustomerGroup.vue'
import CustomerGroups from './CustomerGroups.vue'
import { navUtils } from 'saburi-vue-utils';
const customerGroupNav = {
        // routes: [
        //         {
        //                 path: '/customergroup/:mode',
        //                 name: 'customergroup',
        //                 component: CustomerGroup,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/customergroups',
        //                 name: 'customergroups',
        //                 component: CustomerGroups,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("customer-group", CustomerGroup, "customer-groups", CustomerGroups, true, "customergroup"),
        menu: {
                id: "sales.customergroup",
                title: "Customer Groups",
                component: CustomerGroup,
                icon: "mdi-account-group-outline",
                path: "customer-groups",
                requires: navUtils.allRoles("customer-groups"),
                width: "700px",
                editHeaders: [{ title: "Customer Group", key: "customerGroup" },
                { title: "Receivable Account", key: "receivableAccountId" },
                { title: "Discount Account", key: "discountAccountId" },
                { title: "Write Off Account", key: "writeOffAccountId" },
                { title: "Withholding Tax Account", key: "withholdingTaxAccountId" },
                { title: "Actions", key: "actions" }], 
                headers: [
                //         {
                //         title: "Id",
                //         align: "start",
                //         // sortable: false,
                //         key: "id",
                // },
                { title: "Customer Group", key: "customerGroup" },
                { title: "Receivable Account", key: "receivableAccount" },
                { title: "Discount Account", key: "discountAccount" },
                { title: "Write Off Account", key: "writeOffAccount" },
                { title: "Withholding Tax Account", key: "withholdingTaxAccount" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "sales.customerGroup.view", title: "View", to: { name: "customergroups", }, icon: "mdi-table" },
                // { id: "sales.customerGroup.new", title: "New", to: { name: "customergroup", params: { mode: 0 } }, icon: "mdi-plus-circle" },
                // { id: "sales.customerGroup.edit", title: "Edit", to: { name: "customergroup", params: { mode: 1 } }, icon: "mdi-pencil" },
                // { id: "sales.customerGroup.history", title: "History", to: { name: "customergroup", params: { mode: 2 } }, icon: "mdi-history" },
                // ]
                children: navUtils.allChildren("sales", "customer-groups", "customer-groups", false, "customergroup"),
        }
}
export default customerGroupNav;
