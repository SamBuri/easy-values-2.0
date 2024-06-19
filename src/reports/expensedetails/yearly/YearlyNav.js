import funcs from '../../../utils/funcs';
import Yearly from './Yearly.vue'
const yearlyNav = {

        route: {
                path: '/yearlyexpensedetails',
                name: 'yearlyexpensedetails',
                component: Yearly,
                meta: { auth: true }
        },

        menu:  { id: "reports.expensedetails.yearly", name: "Yearly", to: {name:"yearlyexpensedetails"} },

        headers: [
        { title: "year", key: "year", label: "year", field: "year"},
        { title: "Item Category", key: "itemCategory",  chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-(10*365))),
               endDate: funcs.today(),
               path: `expensedetails/reports/yearly`,
               branches: [],
               drawChart: true,
        }



}
export default yearlyNav;
