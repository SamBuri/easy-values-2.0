import CustomerGroup from './CustomerGroup.vue'
const customerGroupNav = {
        route: {
                path: '/customerGroup/:mode',
                name: 'customerGroup',
                component: CustomerGroup,
                meta: {auth: true}
        }, menu: {
                id: "customer.customergroup",
                title: "Customer Groups",
                component: CustomerGroup,
                path: "customergroups",
                width: "700px",
                editHeaders: [{ text: "Customer Group", value: "customerGroup" },
                { text: "Receivable Account", value: "receivableAccountId.displayKey" },
                { text: "Receivable Account Name", value: "receivableAccountName" },
                { text: "Service Charge Account", value: "serviceChargeAccountId.displayKey" },
                { text: "Service Charge Account Name", value: "serviceChargeAccountName" },
                { text: "Discount Account", value: "discountAccountId.displayKey" },
                { text: "Discount Account Name", value: "discountAccountName" },
                { text: "Refund Account Id", value: "refundAccountId.displayKey" },
                { text: "Refund Account Name", value: "refundAccountName" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Customer Group", value: "customerGroup" },
                { text: "Receivable Account", value: "receivableAccountId.displayKey" },
                { text: "Receivable Account Name", value: "receivableAccountName" },
                { text: "Service Charge Account", value: "serviceChargeAccountId.displayKey" },
                { text: "Service Charge Account Name", value: "serviceChargeAccountName" },
                { text: "Discount Account", value: "discountAccountId.displayKey" },
                { text: "Discount Account Name", value: "discountAccountName" },
                { text: "Refund Account Id", value: "refundAccountId.displayKey" },
                { text: "Refund Account Name", value: "refundAccountName" },
                ], children: [{ id: "customer.customerGroup.new", title: "New", route: "customerGroup", mode: 0 },
                { id: "customer.customerGroup.edit", title: "Edit", route: "customerGroup", mode: 1 },
                { id: "customer.customerGroup.history", title: "History", route: "customerGroup", mode: 2 },
                ]
        }
}
export default customerGroupNav;
