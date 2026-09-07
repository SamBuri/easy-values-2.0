
import Journal from './Journal.vue'
import Journals from './Journals.vue'
import { navUtils } from 'saburi-vue-utils';
const journalNav = {
        // routes: [
        //         {
        //                 path: '/journal/:mode',
        //                 name: 'journal',
        //                 component: Journal,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/journals',
        //                 name: 'journals',
        //                 component: Journals,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes('journal', Journal, 'journals', Journals, true),
        menu: {
                id: "accounting.journal",
                title: "Journals",
                component: Journal,
                path: "journals",
                icon: "mdi-book-open-page-variant",
                requires: navUtils.allRoles("journals"),
                width: "1000px",
                editHeaders: [{ title: "Financial Period Id", key: "financialPeriodId" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Description", key: "description" },
                { title: "Reference No", key: "referenceNo" },
                { title: "Currency", key: "currencyId" },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Journal Details", key: "journalDetails" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Financial Period Id", key: "financialPeriodId" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Description", key: "description" },
                { title: "Reference No", key: "referenceNo" },
                { title: "Currency", key: "currencyId" },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Journal Details", key: "journalDetails" },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: navUtils.allChildren('accounting', 'journals', 'journals', false, 'journal'),
        }
}
export default journalNav;
