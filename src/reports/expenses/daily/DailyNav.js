import funcs from '../../../utils/funcs';
import Daily from './Daily.vue'
const dailyNav = {

        route: {
                path: '/dailyexpenses',
                name: 'dailyexpenses',
                component: Daily,
                meta: { auth: true }
        },

        menu:  { id: "reports.expenses.daily", title: "Daily",  to: {name: "dailyexpenses" }},

        headers: [
        { title: "Tran Date", key: "date", label: "Tran Date", field: "date", isDate: true, chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `expenses/reports/daily`,
               branches: [],
               drawChart: true,
        }



}
export default dailyNav;
