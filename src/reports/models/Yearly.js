import funcs from '../../../../utils/funcs';
import Monthly from './Monthly.vue'
const monthlyNav = {

        route: {
                path: '/monthlyreceipts',
                name: 'monthlyreceipts',
                component: Monthly,
                meta: { auth: true }
        },

        menu:  { id: "sales.receipt.reports.monthly", title: "Monthly",  to: {name: "monthlyreceipts" }},

        headers: [
        { title: "Year", key: "year", label: "Year", field: "year"},
        { title: "Month", key: "month", label: "Month", field: "month"},
        { title: "Week", key: "week", label: "Week", field: "week"},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-365)),
               endDate: funcs.today(),
               path: `receipts/reports/monthly`,
               branches: [],
        }



}
export default monthlyNav;
