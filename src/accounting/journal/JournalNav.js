import Journal from './Journal.vue'
import Journals from './Journals.vue'
const journalNav = {
        routes:[
                {
                        path: '/journal/:mode',
                        name: 'journal',
                        component: Journal,
                        meta: { auth: true },
                 },
                 {
                        path: '/journals',
                        name: 'journals',
                        component: Journals,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "accounting.journal",
                title: "Journals",
                component: Journal,
                path: "journals",
                width: "1000px",
                editHeaders: [{ title: "Financial Period Id", key: "financialPeriodId", label: "Financial Period Id", field: "financialPeriodId" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Reference No", key: "referenceNo", label: "Reference No", field: "referenceNo" },
                { title: "Currency", key: "currencyId", label: "Currency", field: "currencyId" },
                { title: "Currency", key: "currency", label: "Currency", field: "currency" },
                { title: "Base Amount", key: "baseAmount", label: "Base Amount", field: "baseAmount", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", label: "Exchange Rate", field: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Post Status", key: "postStatus", label: "Post Status", field: "postStatus" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Financial Period Id", key: "financialPeriodId", label: "Financial Period Id", field: "financialPeriodId" },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Reference No", key: "referenceNo", label: "Reference No", field: "referenceNo" },
                { title: "Currency", key: "currency", label: "Currency", field: "currency" },
                { title: "Base Amount", key: "baseAmount", label: "Base Amount", field: "baseAmount", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", label: "Exchange Rate", field: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Post Status", key: "postStatus", label: "Post Status", field: "postStatus" },
               { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "accounting.journal.view", title: "View", to: {name: "journals"} },
                  { id: "accounting.journal.new", title: "New",  to: {name: "journal", params: {mode:0}} },
                { id: "accounting.journal.edit", title: "Edit", to: {name: "journal", params: {mode:1}}},
                { id: "accounting.journal.history", title: "History",to: {name: "journal", params: {mode:2}} },
                ]
        }
}
export default journalNav;
