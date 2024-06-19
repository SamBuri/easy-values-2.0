import FinancialPeriod from './FinancialPeriod.vue'
const financialPeriodNav = {
        route: {
                path: '/financialPeriod/:mode',
                name: 'financialPeriod',
                component: FinancialPeriod
        }, menu: {
                id: "posting.financialperiod",
                name: "Financial Periods",
                component: FinancialPeriod,
                path: "financialperiods",
                width: "700px",
                editHeaders: [{ text: "Description", value: "description" },
                { text: "Start Date", value: "startDate" },
                { text: "End Date", value: "endDate" },
                { text: "Active", value: "active" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Description", value: "description" },
                { text: "Start Date", value: "startDate" },
                { text: "End Date", value: "endDate" },
                { text: "Active", value: "active" },
                ], children: [{ id: "posting.financialPeriod.new", name: "New", route: "financialPeriod", mode: 0 },
                { id: "posting.financialPeriod.edit", name: "Edit", route: "financialPeriod", mode: 1 },
                { id: "posting.financialPeriod.history", name: "History", route: "financialPeriod", mode: 2 },
                ]
        }
}
export default financialPeriodNav;
