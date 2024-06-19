import funcs from '../../../utils/funcs';
import Daily from './Daily.vue'
const dailyNav = {

        route: {
                path: '/dailyreceipts',
                name: 'dailyreceipts',
                component: Daily,
                meta: { auth: true }
        },

        menu:  { id: "reports.receipts.daily", title: "Daily",  to: {name:"dailyreceipts"} },

        headers: [
        { title: "Receipt Date", key: "date", label: "Receipt Date", field: "date", isDate: true, chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true,chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `receipts/reports/daily`,
               branches: [],
               drawChart: true,
        }



}
export default dailyNav;
