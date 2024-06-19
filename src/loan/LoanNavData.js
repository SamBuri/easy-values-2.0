import periodNav from "./period/PeriodNav"
import loanProductNav from './loanproduct/LoanProductNav'
import loanApplicationNav from "./loanapplication/LoanApplicationNav"
import loanApprovalNav from "./loanapproval/LoanApprovalNav"
import loanNav from "./loan/LoanNav"
import loanBillNav from "./loanbill/LoanBillNav"
import loanTransitionNav from "./loantransition/LoanTransitionNav"
import loanBillDetailNav from "./loanbilldetail/LoanBillDetailNav"

const loanNavData = {
    routes: [
        ...periodNav.routes,
        ...loanProductNav.routes,
        ...loanApplicationNav.routes,
        ...loanApprovalNav.routes,
        ...loanNav.routes,
        ...loanBillNav.routes,
        ...loanBillDetailNav.routes,
        ...loanTransitionNav.routes,


    ],
    nav: {
        id: "loan",
        title: "Loan",
        icon: "mdi-view-dashbord",
        children: [
            periodNav.menu,
            loanProductNav.menu,
            loanApplicationNav.menu,
            loanApprovalNav.menu,
            loanNav.menu,
            loanBillNav.menu,
            loanBillDetailNav.menu,
            loanTransitionNav.menu,


        ],
    },
    menus: [
        periodNav.menu,
        loanProductNav.menu,
        loanApplicationNav.menu,
        loanApprovalNav.menu,
        loanNav.menu,
        loanBillNav.menu,
        loanTransitionNav.menu,


    ],
}

export default loanNavData
