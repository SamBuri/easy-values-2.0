import GeneralLedger from './GeneralLedger.vue'
import GeneralLedgers from './GeneralLedgers.vue'
const generalLedgerNav = {
        routes: [
                {
                        path: '/generalledger/:mode',
                        name: 'generalledger',
                        component: GeneralLedger,
                        meta: { auth: true },
                },
                {
                        path: '/generalledgers',
                        name: 'generalledgers',
                        component: GeneralLedgers,
                        meta: { auth: true },
                },

        ], menu: {
                id: "accounting.generalledger",
                title: "General Ledgers",
                component: GeneralLedger,
                path: "generalledgers",
                to: {name: "generalledgers"},
                width: "1000px",
                editHeaders: [{ title: "Financial Period Id", key: "financialPeriodId", label: "Financial Period Id", field: "financialPeriodId" },
                { title: "Document Type", key: "documentType", label: "Document Type", field: "documentType" },
                { title: "Document No", key: "documentNo", label: "Document No", field: "documentNo" },
                { title: "Account Id", key: "accountId", label: "Account Id", field: "accountId" },
                { title: "Account Name", key: "accountName", label: "Account Name", field: "accountName" },
                { title: "Account  Type", key: "accountType", label: "Account  Type", field: "accountType" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Debit", key: "debit", label: "Debit", field: "debit", isNumeric: true },
                { title: "Credit", key: "credit", label: "Credit", field: "credit", isNumeric: true },
                { title: "Balance", key: "balance", label: "Balance", field: "balance", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Financial Period Id", key: "financialPeriodId", label: "Financial Period Id", field: "financialPeriodId" },
                { title: "Document Type", key: "documentType", label: "Document Type", field: "documentType" },
                { title: "Document No", key: "documentNo", label: "Document No", field: "documentNo" },
                { title: "Account Id", key: "accountId", label: "Account Id", field: "accountId" },
                { title: "Account Name", key: "accountName", label: "Account Name", field: "accountName" },
                { title: "Account  Type", key: "accountType", label: "Account  Type", field: "accountType" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Debit", key: "debit", label: "Debit", field: "debit", isNumeric: true },
                { title: "Credit", key: "credit", label: "Credit", field: "credit", isNumeric: true },
                { title: "Balance", key: "balance", label: "Balance", field: "balance", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],

        }
}
export default generalLedgerNav;
