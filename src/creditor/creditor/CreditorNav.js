import Creditor from './Creditor.vue'
import Creditors from './Creditors.vue'
const creditorNav = {
        routes: [
                {
                        path: '/creditor/:mode',
                        name: 'creditor',
                        component: Creditor,
                        meta: { auth: true },
                },
                {
                        path: '/creditors',
                        name: 'creditors',
                        component: Creditors,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "creditor.creditor",
                name: "Creditors",
                component: Creditor,
                path: "creditors",
                width: "700px",
                editHeaders: [
                { text: "Name", value: "name" },
                { text: "Phone No", value: "phoneNo" },
                { text: "Account", value: "account" },
                { text: "Account Name", value: "accountName" },
                { text: "Balance", value: "balance", isNumeric: true },
                { text: "Hidden", value: "hidden" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
               
                { text: "Name", value: "name" },
                { text: "Phone No", value: "phoneNo" },
                { text: "Account", value: "account" },
                { text: "Account Name", value: "accountName" },
                { text: "Balance", value: "balance", isNumeric: true },
                { text: "Hidden", value: "hidden" },
                { text: "Branch", value: "branch", label: "Branch", field: "branch" },
                { text: "Creation Date", value: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { text: "Last Modified Date", value: "lastModifiedDate", isDateTime: true },
                { text: "Created By", value: "createdBy", label: "Created By", field: "createdBy" },
                { text: "Modified By", value: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [{ id: "creditor.creditor.new", name: "New", route: "creditor", mode: 0 },
                { id: "creditor.creditor.edit", name: "Edit", route: "creditor", mode: 1 },
                { id: "creditor.creditor.history", name: "History", route: "creditor", mode: 2 },
                ]
        }
}
export default creditorNav;
