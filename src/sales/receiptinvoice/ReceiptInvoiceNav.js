import ReceiptInvoice from './ReceiptInvoice.vue'
import ReceiptInvoices from './ReceiptInvoices.vue'
import { navUtils } from 'saburi-vue-utils';
const receiptInvoiceNav = {
        routes: navUtils.allRoutes("receipt-invoice", ReceiptInvoice, "receipt-invoices", ReceiptInvoices, true, "receiptinvoice"),
        menu: {
                id: "sales.receiptinvoice",
                title: "Receipt Invoices",
                component: ReceiptInvoice,
                path: "receipt-invoices",
                requires: navUtils.allRoles("receipt-invoices"),
                width: "700px",
                editHeaders: [{ title: "Receipt", key: "receipt" },
                { title: "Invoice", key: "invoice" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Refunded", key: "amountRefunded", isNumeric: true },
                { title: "Actions", key: "actions" }],
                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Receipt", key: "receipt" },
                { title: "Invoice", key: "invoice" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Refunded", key: "amountRefunded", isNumeric: true },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: navUtils.allChildren("sales", "receipt-invoices", "receipt-invoices", false, "receiptinvoice"),
        }
}
export default receiptInvoiceNav;
