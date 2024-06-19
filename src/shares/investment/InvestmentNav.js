import Investment from './Investment.vue'
import Investments from './Investments.vue'
const investmentNav = {
        routes: [{
                path: '/investment/:mode',
                name: 'investment',
                component: Investment,
                meta: { auth: true },
        },
        {
                path: '/investments',
                name: 'investments',
                component: Investments,
                meta: { auth: true },
        }], menu: {
                id: "shares.investment",
                title: "Investments",
                component: Investment,
                path: "investments",
                width: "1000px",
                editHeaders: [{ title: "Shareholder", key: "shareholder" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Share Type", key: "shareType" },
                { title: "Share Action", key: "shareAction" },
                { title: "Bank Account Id", key: "bankAccountId", isNumeric: true },
                { title: "Bank Account", key: "bankAccount" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Shareholder Id", key: "shareholder.id" },
                { title: "Shareholder", key: "shareholder.name" },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Share Type", key: "shareType.name" },
                { title: "Share Action", key: "shareAction" },
                { title: "Bank Account", key: "bankAccount" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Unit Price", key: "unitPrice", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Bl Posted", key: "blPosted" },
                { title: "Gl Posted", key: "glPosted" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "shares.investment.view", title: "View", to: {name:"investments"} },
                { id: "shares.investment.new", title: "New", to: {name:"investment",params: {mode: 0}} },
                { id: "shares.investment.edit", title: "Edit", to:{name:"investment",params: {mode: 1}} },
                { id: "shares.investment.history", title: "History", to: {name:"investment",params: {mode: 0}} },
                ]
        }
}
export default investmentNav;
