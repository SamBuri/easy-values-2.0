import Shareholder from './Shareholder.vue'
import Shareholders from './Shareholders.vue'
const shareholderNav = {
        routes: [
                {
                        path: '/shareholder/:mode',
                        name: 'shareholder',
                        component: Shareholder,
                        meta: { auth: true },
                },
                {
                        path: '/shareholders',
                        name: 'shareholders',
                        component: Shareholders,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "shares.shareholder",
                title: "Shareholders",
                component: Shareholder,
                path: "shareholders",
                width: "700px",
                editHeaders: [{ title: "Profile Id", key: "id" },
                { title: "Name", key: "name" },
                { title: "Phone No", key: "phoneNo" },
                { title: "Account", key: "accountId" },
                { title: "Account", key: "account" },
                { title: "Shares", key: "shares", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Hidden", key: "hidden" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Profile Id", key: "id" },
                { title: "Name", key: "name" },
                { title: "Phone No", key: "phoneNo" },
                { title: "Account", key: "accountId" },
                { title: "Account", key: "account" },
                { title: "Shares", key: "shares", isNumeric: true },
                { title: "Balance", key: "balance", isNumeric: true },
                { title: "Hidden", key: "hidden" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "shares.shareholder.view", title: "View", to: {name:"shareholders"} },
                { id: "shares.shareholder.new", title: "New", to: {name:"shareholder", params:{mode: 0}} },
                { id: "shares.shareholder.edit", title: "Edit", to: {name:"shareholder", params:{mode: 1}} },
                { id: "shares.shareholder.history", title: "History", to: {name:"shareholder", params:{mode: 2}} },
                ]
        }
}
export default shareholderNav;
