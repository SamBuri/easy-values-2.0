import BankTransfer from './BankTransfer.vue'
import BankTransfers from './BankTransfers.vue'
const bankTransferNav = {
        routes: [
                {
                        path: '/banktransfer/:mode',
                        name: 'banktransfer',
                        component: BankTransfer,
                        meta: { auth: true },
                },
                {
                        path: '/banktransfers',
                        name: 'banktransfers',
                        component: BankTransfers,
                        meta: { auth: true },
                },

        ], menu: {
                id: "banking.banktransfer",
                title: "Bank Transfers",
                component: BankTransfer,
                path: "banktransfers",
                width: "1000px",
                editHeaders: [{ title: "From Account Type", key: "fromAccountType" },
                { title: "From Account", key: "fromAccount.displayKey" },
                { title: "From Currency", key: "fromCurrencyId.displayKey" },
                { title: "From Currency", key: "fromCurrency" },
                { title: "To Account Type", key: "toAccountType" },
                { title: "To Account", key: "toAccount.displayKey" },
                { title: "To Currency", key: "toCurrencyId.displayKey" },
                { title: "To Currency", key: "toCurrency" },
                { title: "Reference No", key: "referenceNo" },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
                { title: "Transfer Charge", key: "transferCharge", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "BL Possted", key: "blPosted" },
                { title: "GL Posted", key: "glPosted" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "From Account Type", key: "fromAccountType" },
                { title: "From Account", key: "fromAccount.displayKey" },
                { title: "From Currency", key: "fromCurrencyId.displayKey" },
                { title: "From Currency", key: "fromCurrency" },
                { title: "To Account Type", key: "toAccountType" },
                { title: "To Account", key: "toAccount.displayKey" },
                { title: "To Currency", key: "toCurrencyId.displayKey" },
                { title: "To Currency", key: "toCurrency" },
                { title: "Reference No", key: "referenceNo" },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
                { title: "Transfer Charge", key: "transferCharge", isNumeric: true },
                { title: "Amount", key: "amount" },
                { title: "BL Possted", key: "blPosted" },
                { title: "GL Posted", key: "glPosted" },
                { title: "Branch", key: "branchName", label: "Branch", field: "branchName" },
                ],
                children: [
                  { id: "banking.bankTransfer.view", title: "View", to: {name: "banktransfers"} },
                { id: "banking.bankTransfer.new", title: "tile", to: {name: "banktransfer", params: {mode: 0}} },
                { id: "banking.bankTransfer.edit", title: "Edit", to: {name: "banktransfer", params: {mode: 1}} },
                { id: "banking.bankTransfer.history", title: "History", to: {name: "banktransfer", params: {mode: 2}}},
                ]
        }
}
export default bankTransferNav;
