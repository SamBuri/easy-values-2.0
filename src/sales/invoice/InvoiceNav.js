import Invoice from './Invoice.vue'
import Invoices from './Invoices.vue'
const invoiceNav = {
        routes: [
                {
                        path: '/invoice/:mode',
                        name: 'invoice',
                        component: Invoice,
                        meta: { auth: true },
                },
                {
                        path: '/invoices',
                        name: 'invoices',
                        component: Invoices,
                        meta: { auth: true },
                },

        ], menu: {
                id: "sales.invoice",
                title: "Invoices",
                component: Invoice,
                path: "invoices",
                width: "1000px",
                editHeaders: [{ title: "Invoice Date", key: "invoiceDate" },
                { title: "Invoice Type", key: "invoiceType" },
                { title: "Sell To", key: "sellToId" },
                { title: "Sell To Name", key: "sellToName" },
                { title: "Bill To", key: "billToId" },
                { title: "Bill To Name", key: "billToName" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", isNumeric: true },
                { title: "Original Amount", key: "originalAmount", isNumeric: true },
                { title: "Original Amount Words", key: "originalAmountWords" },
                { title: "Amount Paid", key: "amountPaid", isNumeric: true },
                { title: "Amount Refunded", key: "amountRefunded", isNumeric: true },
                { title: "Entry Mode", key: "entryMode" },
                ], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                        label: "Id", field: "id"
                },


                { title: "Invoice Date", key: "invoiceDate", label: "Invoice Date", field: "invoiceDate", isDate: true },
                { title: "Invoice Type", key: "invoiceType", label: "Invoice Type", field: "invoiceType" },
                { title: "Sell To", key: "sellToId", label: "Sell To", field: "sellToId" },
                { title: "Sell To Name", key: "sellToName", label: "Sell To Name", field: "sellToName" },
                { title: "Bill To", key: "billToId", label: "Bill To", field: "billToId" },
                { title: "Bill To Name", key: "billToName", label: "Bill To Name", field: "billToName" },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Original Amount", key: "originalAmount", label: "Original Amount", field: "originalAmount", isNumeric: true },
                { title: "Original Amount Words", key: "originalAmountWords", label: "Original Amount Words", field: "originalAmountWords" },
                { title: "Amount Paid", key: "amountPaid", label: "Amount Paid", field: "amountPaid", isNumeric: true },
                { title: "Amount Refunded", key: "amountRefunded", label: "Amount Refunded", field: "amountRefunded", isNumeric: true },
                { title: "Business Section", key: "businessSection" },
                { title: "Entry Mode", key: "entryMode", label: "Entry Mode", field: "entryMode" },
                { title: "CL Post Status", key: "clPostStatus", label: "CL Post Status", field: "clPostStatus" },
                { title: "GL Post Status", key: "glPostStatus", label: "GL Post Status", field: "glPostStatus" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }

                ],
                children: [
                  {id: "invoices.view", title: "View", to: {name: "invoices"}},
                  { id: "invoices.invoice.new", title: "New", route: "invoice", mode: 0, to:{name:"invoice", params:{mode:0}} },
                { id: "invoices.invoice.history", title: "History", route: "invoice", mode: 2, to:{name:"invoice", params: {mode:2}} },
                ],
        }
}
export default invoiceNav;
