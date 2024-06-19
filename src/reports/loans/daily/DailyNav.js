import funcs from '../../../utils/funcs';
import Daily from './Daily.vue'
const dailyNav = {

        route: {
                path: '/dailyloans',
                name: 'dailyloans',
                component: Daily,
                meta: { auth: true }
        },

        menu:  { id: "reports.loans.daily", title: "Daily",  to: {name:"dailyloans"} },

        headers: [
        { title: "Loan Date", key: "date", label: "Loan Date", field: "date", isDate: true, chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `loans/reports/daily`,
               branches: [],
               drawChart: true,
        }



}
export default dailyNav;
