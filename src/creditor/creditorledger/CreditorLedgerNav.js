import CreditorLedger from './CreditorLedger.vue'
import CreditorLedgers from './CreditorLedgers.vue'
const creditorLedgerNav = {
        routes: [
                {
                        path: '/creditorledger/:mode',
                        name: 'creditorledger',
                        component: CreditorLedger,
                        meta: { auth: true },
                },
                {
                        path: '/creditorledgers',
                        name: 'creditorledgers',
                        component: CreditorLedgers,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "creditor.creditorledger",
                title: "Creditor Ledgers",
                component: CreditorLedger,
                path: "creditorledgers",
                to:{name: "creditorledgers"},
                width: "1000px",
                editHeaders: [{ title: "Creditor Id", key: "creditorId" },
                { title: "CreditorName", key: "creditorName" },
                { title: "TranDate", key: "tranDate", isDate: true },
                { title: "DocumentType", key: "documentType" },
                { title: "DocumentNo", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Debit", key: "debit", isNumeric: true },
                { title: "Credit", key: "credit", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Creditor Id", key: "creditorId" },
                { title: "CreditorName", key: "creditorName" },
                { title: "TranDate", key: "tranDate", isDate: true },
                { title: "DocumentType", key: "documentType" },
                { title: "DocumentNo", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Debit", key: "debit", isNumeric: true },
                { title: "Credit", key: "credit", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                // children: [{ id: "creditor.creditorLedger.new", name: "New", route: "creditorLedger", mode: 0 },
                // { id: "creditor.creditorLedger.edit", name: "Edit", route: "creditorLedger", mode: 1 },
                // { id: "creditor.creditorLedger.history", name: "History", route: "creditorLedger", mode: 2 },
                // ]
        }
}
export default creditorLedgerNav;
