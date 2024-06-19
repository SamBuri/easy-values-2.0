import IncomeStatement from './IncomeStatement.vue'
import funcs from '../../utils/funcs';

const incomestatementNav = {

        route: {
                path: '/incomestatement',
                name: 'incomestatement',
                component: IncomeStatement,
                meta: { auth: true }
        },

        menu:  { id: "accounting.incomestatement", title: "Income Statement",  to: {name: "incomestatement"} },

        headers: [
        { title: "Account Type", key: "accountType" },
        { title: "Account Category", key: "categoryName" },
        { title: "accountName", key: "accountName"},
        { title: "Amount", key: "balance",  isNumeric: true },

        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-30)),
               endDate: funcs.today(),
               path: `generalledgers/accountbalances`,
               branches: [],
        }



}
export default incomestatementNav;
