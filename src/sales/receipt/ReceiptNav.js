import Receipt from './Receipt.vue'
import Receipts from './Receipts.vue'

const receiptNav = {
         routes:[
                {
                        path: '/receipt/:mode',
                        name: 'receipt',
                        component: Receipt,
                        meta: { auth: true },
                 },
                 {
                        path: '/receipts',
                        name: 'receipts',
                        component: Receipts,
                        meta: { auth: true },
                 },

                ],


        menu: {
                id: "sales.receipt",
                title: "Receipts",
                component: Receipt,
                path: "receipts",
                to: {name: 'receipts'},
                width: "1000px",
                miniHeaders: [
                        { title: "Id", align: "start", key: "id", label: "Receipt Date", field: "receiptDate" },
                        { title: "Receipt Date", key: "receiptDate", label: "Receipt Date", field: "receiptDate", isDate: true },
                        { title: "Customer Id", key: "customerId", label: "Customer Id", field: "customerId" },
                        { title: "Customer", key: "customer", label: "Customer", field: "customer" },
                        { title: "Bank Account", key: "bankAccountName", label: "Bank Account", field: "bankAccountName" },
                        { title: "Change Given", key: "changeGiven", label: "Change Given", field: "changeGiven", isNumeric: true },
                        { title: "Amount Paid", key: "amountPaid", label: "Amount Paid", field: "amountPaid", isNumeric: true },
                        { title: "Discount", key: "discount", label: "Discount", field: "discount", isNumeric: true },
                        { title: "Withholding Tax", key: "withholdingTax", label: "Withholding Tax", field: "withholdingTax", isNumeric: true },
                        { title: "Amount Received", key: "amountReceived", label: "Amount Received", field: "amountReceived", isNumeric: true },


                ],

                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                        label: "Receipt Date", field: "receiptDate"
                },
                { title: "Receipt Date", key: "receiptDate", label: "Receipt Date", field: "receiptDate", isDate: true },
                { title: "Customer Id", key: "customerId", label: "Customer Id", field: "customerId" },
                { title: "Customer", key: "customer", label: "Customer", field: "customer" },
                { title: "Bank Account Type", key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                // { title: "Bank Account Id", key: "bankAccountId" },
                { title: "Bank Account", key: "bankAccountName", label: "Bank Account", field: "bankAccountName" },
                { title: "Total Bill", key: "totalBill", label: "Total Bill", field: "totalBill", isNumeric: true },
                { title: "Amount Tendered", key: "amountTendered", label: "Amount Tendered", field: "amountTendered", isNumeric: true },
                // { title: "Currency Id", key: "currencyId" },
                { title: "Currency", key: "currency", label: "Currency", field: "currency" },
                { title: "Exchange Rate", key: "exchangeRate", label: "Exchange Rate", field: "exchangeRate", isNumeric: true },
                { title: "Change Given", key: "changeGiven", label: "Change Given", field: "changeGiven", isNumeric: true },
                { title: "Amount Paid", key: "amountPaid", label: "Amount Paid", field: "amountPaid", isNumeric: true },
                { title: "Amount In Words", key: "amountWords", label: "Amount In Words", field: "amountWords" },
                { title: "Discount", key: "discount", label: "Discount", field: "discount", isNumeric: true },
                { title: "Withholding Tax", key: "withholdingTax", label: "Withholding Tax", field: "withholdingTax", isNumeric: true },
                { title: "Amount Received", key: "amountReceived", label: "Amount Received", field: "amountReceived", isNumeric: true },
                { title: "BL Post Status", key: "blPostStatus", label: "BL Post Status", field: "blPostStatus" },
                { title: "CL Post Status", key: "clPostStatus", label: "CL Post Status", field: "clPostStatus" },
                { title: "GL Post Status", key: "glPostStatus", label: "GL Post Status", field: "glPostStatus" },
                { title: "Amount Refunded", key: "amountRefunded", label: "Amount Refunded", field: "amountRefunded", isNumeric: true },
                { title: "Cancelled", key: "cancelled", label: "Cancelled", field: "cancelled" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }

                ],


                children: [
                  { id: "sales.receipt.view", title: "View", route: "receipts",  to: {name: 'receipts' },},
                        { id: "sales.receipt.new", title: "New", route: "receipt", mode: 0, to: {name: 'receipt', params: { mode:0} },},
                        { id: "sales.receipt.preview", title: "Preview", route: "receipt", mode: 2, to: {name: 'receipt', params: { mode:2}} },
                        { id: "sales.receipt.history", title: "History", route: "receipt", locked: true,  to: {name: 'receipt',params: { mode:3}} },

                ]
        }
}
export default receiptNav;
