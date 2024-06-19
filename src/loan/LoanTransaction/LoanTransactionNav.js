import LoanTransaction from './LoanTransaction.vue'
const loanTransactionNav = {
        route: {
                path: '/loantransaction',
                name: 'loantransaction',
                component: LoanTransaction,
                meta: { auth: true }
        },
        menu: {
                id: "loan.loanTransactions",
                title: "Loan Transactions",
                component: LoanTransaction,
                path: "loantransactions",
                width: "700px",
                route: "loantransaction",
                to:{name:'loantransaction' }

        },

}
export default loanTransactionNav;
