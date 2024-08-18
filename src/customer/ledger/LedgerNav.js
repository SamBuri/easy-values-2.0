import funcs from '../../utils/funcs'
import Ledger from './Ledger.vue'
const ledgerNav = {

        route: {
                path: '/customerledger',
                name: 'customerledger',
                component: Ledger,
                meta: { auth: true }
        },

        menu: { id: "customerledger.ledger", title: "Ledger", route: "customerledger" },

        headers: [
                {
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Customer Id", key: "customerId" },
                { title: "Customer Name", key: "customerName" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Document Type", key: "documentType" },
                { title: "Document No", key: "documentNo" },
                { title: "Description", key: "description" },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Debit", key: "debit", isNumeric: true },
                { title: "Credit", key: "credit", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
        ],

        model: {
                accountId: "",
                accountName: "",
                startDate: funcs.addDays(new Date, -7),
                endDate: new Date(),
                path: `customerledgers/ledger`,
                branches: [],
        }



}
export default ledgerNav;
