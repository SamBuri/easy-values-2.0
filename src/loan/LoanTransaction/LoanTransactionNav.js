import LoanTransaction from './LoanTransaction.vue'
import navUtils from '@/nav/NavUtils';
const loanTransactionNav = {
        route: {
                path: '/loantransaction',
                name: 'loantransaction',
                component: LoanTransaction,
                meta: { auth: true }
        },
        route: navUtils.editRoute("loantransaction", LoanTransaction, true),
        menu: {
                id: "loan.loanTransactions",
                title: "Loan Transactions",
                component: LoanTransaction,
                path: "loantransactions",
                icon: "mdi-cash-multiple",
                requires: navUtils.allRoles("loantransaction"),
                width: "700px",
                route: "loantransaction",
                to:{name:'loantransaction' }

        },

}
export default loanTransactionNav;
