import funcs from '../../utils/funcs'
import ShLedger from './ShLedger.vue'
const shLedgerNav = {

        route: {
                path: '/shledger',
                name: 'shledger',
                component: ShLedger,
                meta: { auth: true }
        },

        menu:  { id: "shareholderledger.ledger", title: "Ledger",  to: {name:"shledger"} },

        headers: [
        { title: "Tran Date", key: "tranDate", isDate:true },
        { title: "Description", key: "description" },
        { title: "Amount", key: "amount", isNumeric: true },
        { title: "Debit", key: "debit",  isNumeric: true },
        { title: "Credit", key: "credit",  isNumeric: true },
        { title: "Balance", key: "balance",  isNumeric: true },
        ],

        model: {
               ShId: "",
               ShName: "",
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `shareholderledgers/ledger/`,
               branches: [],
        }



}
export default shLedgerNav;
