import Account from './Account.vue'
import Accounts from './Accounts.vue'
const accountNav = {
        routes: [
                {
                        path: '/account/:mode',
                        name: 'account',
                        component: Account,
                        meta: { auth: true },
                },
                {
                        path: '/accounts',
                        name: 'accounts',
                        component: Accounts,
                        meta: { auth: true },
                },

        ], menu: {
                id: "accounting.account",
                title: "Accounts",
                component: Account,
                path: "accounts",
                width: "1000px",
                editHeaders: [{ title:"Account Type",key:"accountCategory.accountType", label: "Account Type", field: "accountType" },
                { title:"Account Category",key:"accountCategory.categoryName", label: "Account Category", field: "accountCategory.categoryName" },
                { title:"Account Name",key:"accountName", label: "Account Name", field: "accountName" },
                { title:"Account Action",key:"accountAction", label: "Account Action", field: "accountAction" },
                { title:"Account Report",key:"accountReport", label: "Account Report", field: "accountReport" },
                { title:"Contra",key:"contra", label: "Contra", field: "contra" },
                { title:"Control Account",key:"controlAccount", label: "Control Account", field: "controlAccount" },
                { title:"Balance",key:"balance", label: "Balance", field: "balance", isNumeric: true },
                { title:"Read Only",key:"readOnly", label: "Read Only", field: "readOnly" },
                { title:"Hidden",key:"hidden", label: "Hidden", field: "hidden" },
                { title:"Actions",key:"actions" }],

                miniHeaders: [
                        { title:"Id", align: "start",key:"id", },
                        { title:"Account Type",key:"accountCategory.accountType", label: "Account Type", field: "accountType" },
                        { title:"Account Name",key:"accountName", label: "Account Name", field: "accountName" },
                ],



                headers: [{
                        title:"Id",
                        align: "start",
                        // sortable: false,
                       key:"id",
                },

                { title:"Account Type",key:"accountCategory.accountType", label: "Account Type", field: "accountType" },
                { title:"Account Category",key:"accountCategory.categoryName", label: "Account Category", field: "accountCategory" },
                { title:"Account Name",key:"accountName", label: "Account Name", field: "accountName" },
                { title:"Account Action",key:"accountAction", label: "Account Action", field: "accountAction" },
                { title:"Account Report",key:"accountReport", label: "Account Report", field: "accountReport" },
                { title:"Contra",key:"contra", label: "Contra", field: "contra" },
                { title:"Control Account",key:"controlAccount", label: "Control Account", field: "controlAccount" },
                { title:"Balance",key:"balance", label: "Balance", field: "balance", isNumeric: true },
                { title:"Read Only",key:"readOnly", label: "Read Only", field: "readOnly" },
                { title:"Hidden",key:"hidden", label: "Hidden", field: "hidden" },
                { title:"Branch",key:"branch", label: "Branch", field: "branch" },
                { title:"Creation Date",key:"creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title:"Last Modified Date",key:"lastModifiedDate", isDateTime: true },
                { title:"Created By",key:"createdBy", label: "Created By", field: "createdBy" },
                { title:"Modified By",key:"modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "accounting.account.view", title: "View", to: {name: "accounts",} },
                { id: "accounting.account.new", title: "New", to: {name: "account", params: {mode:0}} },
                { id: "accounting.account.edit", title: "Edit", to: {name: "account", params: {mode:1}} },
                { id: "accounting.account.history", title: "History", to: {name: "account", params: {mode:2}}},
                ]
        }
}
export default accountNav;
