import BankTransaction from './BankTransaction.vue'
import BankTransactions from './BankTransactions.vue'
const bankTransactionNav = {
        routes:[
                {
                        path: '/banktransaction/:mode',
                        name: 'banktransaction',
                        component: BankTransaction,
                        meta: { auth: true },
                 },
                 {
                        path: '/banktransactions',
                        name: 'banktransactions',
                        component: BankTransactions,
                        meta: { auth: true },
                 },

                ], menu: {
                id: "banking.banktransaction",
                title: "Bank Transactions",
                component: BankTransaction,
                path: "banktransactions",
                width: "1000px",
                editHeaders: [{title: "Bank Account", key: "bankAccount.bankAccountName" },
                {title: "Tran Date", key: "tranDate", isDate: true },
                {title: "Account Action", key: "accountAction" },
                {title: "Notes", key: "notes" },
                {title: "Amount", key: "amount", isNumeric: true },
                {title: "Bl Posted", key: "blPoasted" },
                {title: "Gl Posted", key: "glPosted" },
                {title: "Actions", key: "actions" }],

                headers: [{
                       title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                {title: "Bank Account", key: "bankAccount.bankAccountName" },
                {title: "Tran Date", key: "tranDate", isDate: true },
                {title: "Account Action", key: "accountAction" },
                {title: "Notes", key: "notes" },
                {title: "Amount", key: "amount", isNumeric: true },
                {title: "Bl Posted", key: "blPoasted" },
                {title: "Gl Posted", key: "glPosted" },
                {title: "Branch", key: "branchName", label: "Branch", field: "branchName" },
                {title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                {title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                {title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                {title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }
                ],
                children: [
                  { id: "banking.bankTransaction.view", title: "View", to:{name:"banktransactions" }},
                { id: "banking.bankTransaction.new", title: "New", to:{name:"banktransaction",params: { mode: 0 }}},
                { id: "banking.bankTransaction.edit", title: "Edit", to:{name:"banktransaction",params: { mode: 1 }}},
                { id: "banking.bankTransaction.history", title: "History", to:{name:"banktransaction",params: { mode: 2 }} },
                ]
        }
}
export default bankTransactionNav;
