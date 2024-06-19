import funcs from '../../../utils/funcs'
import Weekly from './Weekly.vue'
const weeklyNav = {

        route: {
                path: '/weeklyloanbills',
                name: 'weeklyloanbills',
                component: Weekly,
                meta: { auth: true }
        },

        menu:  { id: "reports.loanbills.weekly", title: "Weekly",  to: {name:"weeklyloanbills" }},

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Week", key: "week", chartLabel: true },
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-30)),
               endDate: funcs.today(),
               path: `loanbills/reports/weekly`,
               branches: [],
               drawChart: true,
        }



}
export default weeklyNav;
