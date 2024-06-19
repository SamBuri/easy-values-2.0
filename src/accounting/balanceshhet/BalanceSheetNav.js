import BalanceSheet from './BalanceSheet.vue'
import funcs from '../../utils/funcs';

const balanceSheetNav = {

        route: {
                path: '/balancesheet',
                name: 'balancesheet',
                component: BalanceSheet,
                meta: { auth: true }
        },

        menu:  { id: "accounting.balancesheet", title: "Balance Sheet",  to: {name: "balancesheet"} },

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
export default balanceSheetNav;
