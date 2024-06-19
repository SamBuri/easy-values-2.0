import funcs from '../../../utils/funcs';
import Daily from './Daily.vue'
const dailyNav = {

        route: {
                path: '/dailyloanbills',
                name: 'dailyloanbills',
                component: Daily,
                meta: { auth: true }
        },

        menu:  { id: "reports.loanbills.daily", title: "Daily",  to: {name:"dailyloanbills" }},

        headers: [
        { title: "Bill Date", key: "date", label: "Bill Date", field: "date", isDate: true, chartLabel: true},
        { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true, chartkey: true },
        { title: "Count", key: "count", label: "Count", field: "count", isNumeric: true, chartkey: true },
        ],

        model: {
               startDate: funcs.formatDate(funcs.addDays( funcs.today(),-7)),
               endDate: funcs.today(),
               path: `loanbills/reports/daily`,
               branches: [],
               drawChart: true,
        }



}
export default dailyNav;
