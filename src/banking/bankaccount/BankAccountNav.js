import BankAccount from './BankAccount.vue'
import BankAccounts from './BankAccounts.vue'
const bankAccountNav = {
        routes: [
                {
                        path: '/bankaccount/:mode',
                        name: 'bankaccount',
                        component: BankAccount,
                        meta: { auth: true },
                },
                {
                        path: '/bankaccounts',
                        name: 'bankaccounts',
                        component: BankAccounts,
                        meta: { auth: true },
                },

        ], menu: {
                id: "banking.bankaccount",
                title: "Bank Accounts",
                component: BankAccount,
                path: "bankaccounts",
                width: "1000px",
                editHeaders: [{title: "Bank Account Name",key: "bankAccountName", label: "Bank Account Name", field: "bankAccountName" },
                {title: "Bank Account Type",key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                {title: "Account No",key: "accountNo", label: "Account No", field: "accountNo" },
                {title: "Bank Name",key: "bankName", label: "Bank Name", field: "bankName" },
                {title: "Branch Name",key: "branchName", label: "Branch Name", field: "branchName" },
                {title: "Currency",key: "currency", label: "Currency", field: "currency" },
                {title: "Balance",key: "balance", label: "Balance", field: "balance", isNumeric: true },
                {title: "Gl Account",key: "glAccount", label: "Gl Account", field: "glAccount" },
                {title: "Phone No",key: "phoneNo", label: "Phone No", field: "phoneNo" },
                {title: "Email",key: "email", label: "Email", field: "email" },
                {title: "Address",key: "address", label: "Address", field: "address" },
                {title: "Is Default",key: "isDefault", label: "Is Default", field: "isDefault" },
                {title: "Hidden",key: "hidden", label: "Hidden", field: "hidden" },
                {title: "Actions",key: "actions" }],


                miniHeaders: [
                        {title: "Id", align: "start",key: "id", },
                        {title: "Bank Account Type",key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                        {title: "Bank Account Name",key: "bankAccountName", label: "Bank Account Name", field: "bankAccountName" },
                        {title: "Balance",key: "balance", label: "Balance", field: "balance", isNumeric: true },


                ],

                headers: [{
                       title: "Id",
                        align: "start",
                        // sortable: false,
                       key: "id",
                },
                {title: "Bank Account Name",key: "bankAccountName", label: "Bank Account Name", field: "bankAccountName" },
                {title: "Bank Account Type",key: "bankAccountType", label: "Bank Account Type", field: "bankAccountType" },
                {title: "Account No",key: "accountNo", label: "Account No", field: "accountNo" },
                {title: "Bank Name",key: "bankName", label: "Bank Name", field: "bankName" },
                {title: "Branch Name",key: "branchName", label: "Branch Name", field: "branchName" },
                {title: "Currency",key: "currency", label: "Currency", field: "currency" },
                {title: "Balance",key: "balance", label: "Balance", field: "balance", isNumeric: true },
                {title: "Gl Account",key: "glAccount", label: "Gl Account", field: "glAccount" },
                {title: "Charges Gl Account",key: "chargesGlAccount", label: "Charges Gl Account", field: "chargesGlAccount" },
                {title: "Phone No",key: "phoneNo", label: "Phone No", field: "phoneNo" },
                {title: "Email",key: "email", label: "Email", field: "email" },
                {title: "Address",key: "address", label: "Address", field: "address" },
                {title: "Is Default",key: "isDefault", label: "Is Default", field: "isDefault" },
                {title: "Hidden",key: "hidden", label: "Hidden", field: "hidden" },
                {title: "Branch",key: "branch", label: "Branch", field: "branch" },
                {title: "Creation Date",key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                {title: "Last Modified Date",key: "lastModifiedDate", isDateTime: true },
                {title: "Created By",key: "createdBy", label: "Created By", field: "createdBy" },
                {title: "Modified By",key: "modifiedBy", label: "Modified By", field: "modifiedBy" }
                ],
                children: [
                  { id: "banking.bankAccount.view", title: "view", to: {name: "bankaccounts"} },
                { id: "banking.bankAccount.new", title: "New", to: {name: "bankaccount",params:{ mode: 0}} },
                { id: "banking.bankAccount.edit", title: "Edit",  to: {name: "bankaccount",params:{ mode: 1}} },
                { id: "banking.bankAccount.history", title: "History",  to: {name: "bankaccount",params:{ mode: 2}} },
                ]
        }
}
export default bankAccountNav;


