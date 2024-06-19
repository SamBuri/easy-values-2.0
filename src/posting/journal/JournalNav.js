import Journal from './Journal.vue'
const journalNav = {
        route: {
                path: '/journal/:mode',
                name: 'journal',
                component: Journal
        }, menu: {
                id: "posting.journal",
                name: "Journals",
                component: Journal,
                path: "journals",
                width: "1000px",
                editHeaders: [{ text: "Financial Period", value: "financialPeriod.displayKey" },
                { text: "Tran Date", value: "tranDate" },
                { text: "Description", value: "description" },
                { text: "Document Type", value: "documentType" },
                { text: "Document No", value: "documentNo" },
                { text: "Reference No", value: "referenceNo" },
                { text: "Currency", value: "currencyId.displayKey" },
                { text: "Currency", value: "currency" },
                { text: "Base Amount", value: "baseAmount" },
                { text: "Exchange Rate", value: "exchangeRate" },
                { text: "Amount", value: "amount" },
                { text: "Amount Words", value: "amountWords" },
                { text: "Posted", value: "posted" },
                { text: "Entry Mode", value: "entryMode" },
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Financial Period", value: "financialPeriod.displayKey" },
                { text: "Tran Date", value: "tranDate" },
                { text: "Description", value: "description" },
                { text: "Document Type", value: "documentType" },
                { text: "Document No", value: "documentNo" },
                { text: "Reference No", value: "referenceNo" },
                { text: "Currency", value: "currencyId" },
                { text: "Currency", value: "currency" },
                { text: "Base Amount", value: "baseAmount" },
                { text: "Exchange Rate", value: "exchangeRate" },
                { text: "Amount", value: "amount" },
                { text: "Amount Words", value: "amountWords" },
                { text: "Posted", value: "posted" },
                { text: "Entry Mode", value: "entryMode" },
               ], children: [{ id: "posting.journal.new", name: "New", route: "journal", mode: 0 },
                { id: "posting.journal.edit", name: "Edit", route: "journal", mode: 1 },
                { id: "posting.journal.history", name: "History", route: "journal", mode: 2 },
                ]
        }
}
export default journalNav;
