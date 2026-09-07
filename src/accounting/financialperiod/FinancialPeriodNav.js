import FinancialPeriod from './FinancialPeriod.vue'
import FinancialPeriods from './FinancialPeriods.vue'
import { navUtils } from 'saburi-vue-utils';
const financialPeriodNav = {
        // routes: [
        //         {
        //                 path: '/financialperiod/:mode',
        //                 name: 'financialperiod',
        //                 component: FinancialPeriod,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/financialperiods',
        //                 name: 'financialperiods',
        //                 component: FinancialPeriods,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("financial-period", FinancialPeriod, "financial-periods", FinancialPeriods, true, "financialperiod"),
        menu: {
                id: "accounting.financialperiod",
                title: "Financial Periods",
                component: FinancialPeriod,
                path: "financial-periods",
                requires: navUtils.allRoles("financial-periods"),
                icon: "mdi-calendar-range",
                width: "700px",
                editHeaders: [{ title: "Name", key: "name" },
                { title: "Start Date", key: "startDate", isDate: true },
                { title: "End Date", key: "endDate", isDate: true },
                { title: "Active", key: "active" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Name", key: "name" },
                { title: "Start Date", key: "startDate", isDate: true },
                { title: "End Date", key: "endDate", isDate: true },
                { title: "Active", key: "active" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: navUtils.allChildren('accounting', 'financial-periods', 'financial-periods', false, 'financialperiod'),
        }
}
export default financialPeriodNav;
