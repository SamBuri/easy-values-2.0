import funcs from '../../../utils/funcs';
import Daily from './Daily.vue'
const dailyNav = {

        route: {
                path: '/dailyexpensedetails',
                name: 'dailyexpensedetails',
                component: Daily,
                meta: { auth: true }
        },

        menu:  { id: "reports.expensedetails.daily", title: "Daily",  to: {name: "dailyexpensedetails" }},

        headers: [
        { title: "Tran Date", key: "tranDate", isDate: true},
        { title: "Item Category", key: "itemCategory",  chartLabel: true, groupColumn: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `expensedetails/reports/daily`,
               branches: [],
               drawChart: true,
        }



}
export default dailyNav;
