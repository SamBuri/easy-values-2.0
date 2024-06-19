import AccountsGroup from './AccountsGroup.vue'
import AccountsGroups from './AccountsGroups.vue'
const accountsGroupNav = {
        routes:[
                {
                        path: '/accountsgroup/:mode',
                        name: 'accountsgroup',
                        component: AccountsGroup,
                        meta: { auth: true },
                 },
                 {
                        path: '/accountsgroups',
                        name: 'accountsgroups',
                        component: AccountsGroups,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "customer.accountsgroup",
                title: "Accounts Groups",
                component: AccountsGroup,
                path: "accountsgroups",
                width: "700px",
                editHeaders: [
                        { text: "Business Section", value: "businessSection", label: "Business Section", field: "businessSection" },
                        { text: "Receivable Account", value: "receivableAccount", label: "Receivable Account", field: "receivableAccount" },
                        { text: "Discount Account", value: "discountAccount", label: "Discount Account", field: "discountAccount" },
                        { text: "Write Off Account", value: "writeOffAccount", label: "Write Off Account", field: "writeOffAccount" },
                        { text: "Withholding Tax Account", value: "withholdingTaxAccount",label: "Withholding Tax Account", field: "withholdingTaxAccount" },
                        { text: "Actions", value: "actions" }], headers: [{
                                text: "Id",
                                align: "start",
                                // sortable: false,
                                value: "id",
                        },
                        { text: "Business Section", value: "businessSection", label: "Business Section", field: "businessSection" },
                        { text: "Receivable Account", value: "receivableAccount", label: "Receivable Account", field: "receivableAccount" },
                        { text: "Discount Account", value: "discountAccount", label: "Discount Account", field: "discountAccount" },
                        { text: "Write Off Account", value: "writeOffAccount", label: "Write Off Account", field: "writeOffAccount" },
                        { text: "Withholding Tax Account", value: "withholdingTaxAccount",label: "Withholding Tax Account", field: "withholdingTaxAccount" },
                        { text: "Branch", value: "branch", label: "Branch", field: "branch" },
                        { text: "Creation Date", value: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        { text: "Last Modified Date", value: "lastModifiedDate", isDateTime: true },
                        { text: "Created By", value: "createdBy", label: "Created By", field: "createdBy" },
                        { text: "Modified By", value: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "customer.accountsGroup.new", title: "New", route: "accountsgroup", mode: 0 },
                { id: "customer.accountsGroup.edit", title: "Edit", route: "accountsgroup", mode: 1 },
                { id: "customer.accountsGroup.history", title: "History", route: "accountsgroup", mode: 2 },
                ]
        }
}
export default accountsGroupNav;
