import Period from './Period.vue'
import Periods from './Periods.vue'
import { navUtils } from 'saburi-vue-utils';
const periodNav = {
        // routes: [
        //         {
        //                 path: '/period/:mode',
        //                 name: 'period',
        //                 component: Period,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/periods',
        //                 name: 'periods',
        //                 component: Periods,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("period", Period, "periods", Periods, true),
        menu: {
                id: "loan.period",
                title: "Periods",
                component: Period,
                path: "periods",
                icon: "mdi-calendar-clock-outline",
                requires: navUtils.allRoles("period"),
                width: "700px",
                editHeaders: [{ title: "Period Name", key: "periodName" },
                { title: "Days", key: "days", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Period Name", key: "periodName" },
                { title: "Days", key: "days", isNumeric: true },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                // children: [{ id: "loan.period.view", title: "View", icon: "mdi-table", to: { name: "periods", } },
                // { id: "loan.period.new", title: "New", icon: "mdi-plus-circle" ,to: { name: "period", params: { mode: 0 } } },
                // { id: "loan.period.edit", title: "Edit",  icon: "mdi-pencil",to: { name: "period", params: { mode: 1 } } },
                // { id: "loan.period.history", title: "History", icon: "mdi-history", to: { name: "period", params: { mode: 2 } } },
                // ]
                children: navUtils.allChildren('loan', 'period', 'periods', false),
        }
}
export default periodNav;
