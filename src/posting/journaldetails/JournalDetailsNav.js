import JournalDetails from './JournalDetails.vue'
const journalDetailsNav = {
        route: {
                path: '/journalDetails/:mode',
                name: 'journalDetails',
                component: JournalDetails
        }, menu: {
                id: "posting.journaldetails",
                name: "Journal Details",
                component: JournalDetails,
                path: "journaldetails",
                width: "700px",
                editHeaders: [{ text: "Account Group", value: "accountGroup" },
                { text: "Account Type", value: "accountType" },
                { text: "Account Id", value: "accountId" },
                { text: "Account Name", value: "accountName" },
                { text: "Account Action", value: "accountAction" },
                { text: "Amount", value: "amount" },
                { text: "Notes", value: "notes" },
                { text: "Actions", value: "actions" }
                ], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Account Group", value: "accountGroup" },
                { text: "Journal", value: "journal.displayKey" },
                { text: "Account Id", value: "accountId" },
                { text: "Account Name", value: "accountName" },
                { text: "Account Type", value: "accountType" },
                { text: "Account Action", value: "accountAction" },
                { text: "Amount", value: "amount" },
                { text: "Notes", value: "notes" },
                ], children: [{ id: "posting.journalDetails.new", name: "New", route: "journalDetails", mode: 0 },
                { id: "posting.journalDetails.edit", name: "Edit", route: "journalDetails", mode: 1 },
                { id: "posting.journalDetails.history", name: "History", route: "journalDetails", mode: 2 },
                ]
        }
}
export default journalDetailsNav;
