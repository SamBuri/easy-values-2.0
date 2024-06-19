import JournalDetails from './JournalDetails.vue'
const journalDetailsNav = {
        route: {
                path: '/journalDetails',
                name: 'journalDetails',
                component: JournalDetails,
                meta: { auth: true },
        }, menu: {
                id: "accounting.journaldetails",
                title: "Journal Details",
                component: JournalDetails,
                path: "journaldetails",
                to: {name: "journaldetails"},
                width: "700px",
                editHeaders: [
                { title: "Account Id", key: "accountId", label: "Account Id", field: "accountId" },
                { title: "Account Name", key: "accountName", label: "Account Name", field: "accountName" },
                { title: "Account Type", key: "accountType", label: "Account Type", field: "accountType" },
                { title: "Account Action", key: "accountAction", label: "Account Action", field: "accountAction" },
                { title: "Base Amount", key: "baseAmount", label: "Base Amount", field: "baseAmount", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Journal", key: "journal", label: "Journal", field: "journal" },
                { title: "Account Id", key: "accountId", label: "Account Id", field: "accountId" },
                { title: "Account Name", key: "accountName", label: "Account Name", field: "accountName" },
                { title: "Account Type", key: "accountType", label: "Account Type", field: "accountType" },
                { title: "Account Action", key: "accountAction", label: "Account Action", field: "accountAction" },
                { title: "Base Amount", key: "baseAmount", label: "Base Amount", field: "baseAmount", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Notes", key: "notes", label: "Notes", field: "notes" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],

        }
}
export default journalDetailsNav;
