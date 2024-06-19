import funcs from '../../../utils/funcs';
import Monthly from './Monthly.vue'
const monthlyNav = {

        route: {
                path: '/monthlyexpensedetails',
                name: 'monthlyexpensedetails',
                component: Monthly,
                meta: { auth: true }
        },

        menu:  { id: "reports.expensedetails.monthly", title: "Monthly",  to: {name: "monthlyexpensedetails"} },

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Month", key: "month", label: "Month", field: "month"},
        { title: "Item Category", key: "itemCategory",  chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-365)),
               endDate: funcs.today(),
               path: `expensedetails/reports/monthly`,
               branches: [],
               drawChart: true,
        }



}
export default monthlyNav;
