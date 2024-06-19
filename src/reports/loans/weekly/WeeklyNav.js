import funcs from '../../../utils/funcs'
import Weekly from './Weekly.vue'
const weeklyNav = {

        route: {
                path: '/weeklyloans',
                name: 'weeklyloans',
                component: Weekly,
                meta: { auth: true }
        },

        menu:  { id: "reports.loan.weekly", title: "Weekly",  to: {name:"weeklyloans"} },

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Week", key: "week", chartLabel: true },
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-30)),
               endDate: funcs.today(),
               path: `loans/reports/weekly`,
               branches: [],
        }



}
export default weeklyNav;
