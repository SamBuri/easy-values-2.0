import FinancialPeriod from './FinancialPeriod.vue'
 import FinancialPeriods from './FinancialPeriods.vue'
 const financialPeriodNav={ routes:[
        {
                path: '/financialperiod/:mode',
                name: 'financialperiod',
                component: FinancialPeriod,
                meta: { auth: true },
         },
         {
                path: '/financialperiods',
                name: 'financialperiods',
                component: FinancialPeriods,
                meta: { auth: true },
         },
        
        ],
menu:{id: "accounting.financialperiod",
        title: "Financial Periods",
        component: FinancialPeriod,
        path: "financialperiods",
        width: "700px",
editHeaders: [{ title: "Name", key: "name"    },
{ title: "Start Date", key: "startDate"  , isDate: true },
{ title: "End Date", key: "endDate"  , isDate: true },
{ title: "Active", key: "active"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Name", key: "name"    },
{ title: "Start Date", key: "startDate"  , isDate: true },
{ title: "End Date", key: "endDate"  , isDate: true },
{ title: "Active", key: "active"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "accounting.financialPeriod.view", title: "View",  to:{ name: "financialperiods", }},
{ id: "accounting.financialPeriod.new", title: "New",  to:{ name: "financialperiod", params: {mode:0}}},
{ id: "accounting.financialPeriod.edit", title: "Edit",  to:{ name: "financialperiod", params: {mode:1}}},
{ id: "accounting.financialPeriod.history", title: "History",  to:{ name: "financialperiod", params: {mode:2}}},
]}
}
export default financialPeriodNav;
