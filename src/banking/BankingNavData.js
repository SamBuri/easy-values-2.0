import bankAccountNav from "./bankaccount/BankAccountNav"
import bankLedgerNav from "./bankledger/BankLedgerNav"
import bankTransactionNav from "./banktransaction/BankTransactionNav"
import bankTransferNav from "./banktransfer/BankTransferNav"
import ledgerNav from "./ledger/LedgerNav"


const bankingNavData = {
    routes: [
        ...bankAccountNav.routes,
        ...bankTransferNav.routes,
        ...bankTransactionNav.routes,
        ...bankLedgerNav.routes,
        ledgerNav.route,
    ],
    nav: {
        id: "banking",
        title: "Banking",
        icon: "mdi-view-dashbord",
        children: [
            bankAccountNav.menu,
            bankTransferNav.menu,
            bankTransactionNav.menu,
            bankLedgerNav.menu,
            ledgerNav.menu

        ],
    },

    menus: [

        bankAccountNav.menu,
        bankLedgerNav.menu,
        bankTransferNav.menu,
        bankTransactionNav.menu,

    ]

}

export default bankingNavData
