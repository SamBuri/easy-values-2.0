import funcs from '../../../utils/funcs';
import Yearly from './Yearly.vue'
const yearlyNav = {

        route: {
                path: '/yearlyreceipts',
                name: 'yearlyreceipts',
                component: Yearly,
                meta: { auth: true }
        },

        menu:  { id: "reports.receipt.yearly", name: "Yearly",  to: {name: "yearlyreceipts" }},

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year", chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-(10*365))),
               endDate: funcs.today(),
               path: `receipts/reports/yearly`,
               branches: [],
               drawChart: true,
        }



}
export default yearlyNav;
