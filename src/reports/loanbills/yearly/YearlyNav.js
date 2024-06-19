import funcs from '../../../utils/funcs';
import Yearly from './Yearly.vue'
const yearlyNav = {

        route: {
                path: '/yearlyloanbills',
                name: 'yearlyloanbills',
                component: Yearly,
                meta: { auth: true }
        },

        menu:  { id: "reports.loanbills.yearly", title: "Yearly",  to: {name:"yearlyloanbills" }},

        headers: [
        { title: "year", key: "year", label: "year", field: "year", chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-(10*365))),
               endDate: funcs.today(),
               path: `loanbills/reports/yearly`,
               branches: [],
               drawChart: true,
        }



}
export default yearlyNav;
