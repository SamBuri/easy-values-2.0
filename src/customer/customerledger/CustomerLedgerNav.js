import CustomerLedger from './CustomerLedger.vue'
import CustomerLedgers from './CustomerLedgers.vue'
const customerLedgerNav = {
        routes:[
                // {
                //         path: '/customerledger/:mode',
                //         name: 'customerledger',
                //         component: CustomerLedger,
                //         meta: { auth: true },
                //  },
                 {
                        path: '/customerledgers',
                        name: 'customerledgers',
                        component: CustomerLedgers,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "customer.customerledger",
                title: "Customer Ledgers",
                component: CustomerLedger,
                path: "customerledgers",
                route: "customerledgers",
                icon: "mdi-dashboard",
                width: "700px",
                editHeaders: [
                { title: "Tran Date", key: "tranDate" , isDate: true },
                { title: "Document Type", key: "documentType" },
                { title: "Document No", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Amount", key: "amount" ,isNumeric:true},
                { title: "Debit", key: "debit" ,isNumeric:true},
                { title: "Credit", key: "credit" ,isNumeric:true},
                { title: "Balance", key: "balance" ,isNumeric:true},
                { Actions: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Customer Id", key: "customerId" },
                { title: "Customer Name", key: "customerName" },
                { title: "Tran Date", key: "tranDate" , isDate: true },
                { title: "Document Type", key: "documentType" },
                { title: "Document No", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Amount", key: "amount" ,isNumeric:true},
                { title: "Debit", key: "debit" ,isNumeric:true},
                { title: "Credit", key: "credit" ,isNumeric:true},
                { title: "Balance", key: "balance" ,isNumeric:true},
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }
                ],
                // children: [{ id: "customer.customerLedger.new", name: "New", route: "customerLedger", mode: 0 },
                // { id: "customer.customerLedger.edit", name: "Edit", route: "customerLedger", mode: 1 },
                // { id: "customer.customerLedger.history", name: "History", route: "customerLedger", mode: 2 },
                // ]
        }
}
export default customerLedgerNav;
