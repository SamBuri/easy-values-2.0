import funcs from '../../../utils/funcs';
import Monthly from './Monthly.vue'
const monthlyNav = {

        route: {
                path: '/monthlyloanbills',
                name: 'monthlyloanbills',
                component: Monthly,
                meta: { auth: true }
        },

        menu:  { id: "reports.loanbills.monthly", title: "Monthly",  to: {name:"monthlyloanbills" }},

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Month", key: "month", label: "Month", field: "month", chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true,  chartkey: true},
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-365)),
               endDate: funcs.today(),
               path: `loanbills/reports/monthly`,
               branches: [],
               drawChart: true,
        }



}
export default monthlyNav;
