import Refund from './Refund.vue'
import Refunds from './Refunds.vue'
const refundNav = {
        routes: [
                {
                        path: '/refund/:mode',
                        name: 'refund',
                        component: Refund,
                        meta: { auth: true },
                },
                {
                        path: '/refunds',
                        name: 'refunds',
                        component: Refunds,
                        meta: { auth: true },
                },

        ], menu: {
                id: "sales.refund",
                title: "Refunds",
                component: Refund,
                path: "refunds",
                width: "1000px",
                editHeaders: [{ title: "Receipt", key: "receipt", label: "Receipt", field: "receipt" },
                { title: "Refund Date", key: "refundDate", label: "Refund Date", field: "refundDate", isDate: true },
                { title: "Bank Account Type", key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                { title: "Bank Account Id", key: "bankAccountId", label: "Bank Account Id", field: "bankAccountId" },
                { title: "Bank Account", key: "bankAccount", label: "Bank Account", field: "bankAccount" },
                { title: "Refund Type", key: "refundType", label: "Refund Type", field: "refundType" },
                { title: "Credit Note Id", key: "creditNoteId", label: "Credit Note Id", field: "creditNoteId" },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Refund Receipt Invoices", key: "refundReceiptInvoices", label: "Refund Receipt Invoices", field: "refundReceiptInvoices" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Receipt Id", key: "receipt.id", label: "Receipt Id", field: "receipt.id" },
                { title: "Customer", key: "receipt.customer", label: "Customer", field: "receipt.customer" },
                { title: "Refund Date", key: "refundDate", label: "Refund Date", field: "refundDate", isDate: true },
                { title: "Bank Account Type", key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                { title: "Bank Account Id", key: "bankAccountId", label: "Bank Account Id", field: "bankAccountId" },
                { title: "Bank Account", key: "bankAccount", label: "Bank Account", field: "bankAccount" },
                { title: "Refund Type", key: "refundType", label: "Refund Type", field: "refundType" },
                { title: "Credit Note Id", key: "creditNoteId", label: "Credit Note Id", field: "creditNoteId" },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "BL Post Status", key: "blPostStatus", label: "BL Post Status", field: "blPostStatus" },
                { title: "CL Post Status", key: "clPostStatus", label: "CL Post Status", field: "clPostStatus" },
                { title: "GL Post Status", key: "glPostStatus", label: "GL Post Status", field: "glPostStatus" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "sales.refund.view", title: "View",  to:{ name: "refunds", }},
                  { id: "sales.refund.new", title: "New",  to:{ name: "refund", params: {mode:0}}},
                  { id: "sales.refund.edit", title: "Edit",  to:{ name: "refund", params: {mode:1}}},
                  { id: "sales.refund.history", title: "History",  to:{ name: "refund", params: {mode:2}}},
                  ]
        }
}
export default refundNav;
