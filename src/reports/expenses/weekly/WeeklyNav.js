import funcs from '../../../utils/funcs'
import Weekly from './Weekly.vue'
const weeklyNav = {

        route: {
                path: '/weeklyexpenses',
                name: 'weeklyexpenses',
                component: Weekly,
                meta: { auth: true }
        },

        menu:  { id: "reports.expenses.weekly", title: "Weekly",  to: {name: "weeklyexpenses"} },

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Week", key: "week", chartLabel: true },
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-30)),
               endDate: funcs.today(),
               path: `expenses/reports/weekly`,
               branches: [],
               drawChart: true,
        }



}
export default weeklyNav;
