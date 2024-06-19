import ShareholderLedger from './ShareholderLedger.vue'
import ShareholderLedgers from './ShareholderLedgers.vue'
const shareholderLedgerNav = {
        routes: [

                {
                        path: '/shareholderledgers',
                        name: 'shareholderledgers',
                        component: ShareholderLedgers,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "shares.shareholderledger",
                title: "Shareholder Ledgers",
                component: ShareholderLedger,
                path: "shareholderledgers",
                to:{name:"shareholderledgers"},
                width: "1000px",
                editHeaders: [{ title: "Shareholder Id", key: "shareholderId" },
                { title: "Shareholder Name", key: "shareholderName" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Document Type", key: "documentType" },
                { title: "Document No", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Share Type Id", key: "shareTypeId", isNumeric: true },
                { title: "Share Type", key: "shareType" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Debit", key: "debit", isNumeric: true },
                { title: "Credit", key: "credit", isNumeric: true },
                { title: "Qty Balance", key: "qtyBalance", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Shareholder Id", key: "shareholderId" },
                { title: "Shareholder Name", key: "shareholderName" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Document Type", key: "documentType" },
                { title: "Document No", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Share Type", key: "shareType" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Debit", key: "debit", isNumeric: true },
                { title: "Credit", key: "credit", isNumeric: true },
                { title: "Qty Balance", key: "qtyBalance", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                // children: [{ id: "shares.shareholderLedger.new", title: "New", route: "shareholderLedger", mode: 0 },
                // { id: "shares.shareholderLedger.edit", name: "Edit", route: "shareholderLedger", mode: 1 },
                // { id: "shares.shareholderLedger.history", name: "History", route: "shareholderLedger", mode: 2 },
                // ]
        }
}
export default shareholderLedgerNav;
