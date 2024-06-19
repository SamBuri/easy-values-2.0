import bankAccountNav from "./bankaccount/BankAccountNav"
import bankLedgerNav from "./bankledger/BankLedgerNav"
import bankLedgerPreviewNav from "./bankledgerpreview/BankLedgerPreviewNav"
import bankTransactionNav from "./banktransaction/BankTransactionNav"
import bankTransferNav from "./banktransfer/BankTransferNav"
import ledgerNav from "./ledger/LedgerNav"


const bankingNavData = {
    routes: [
        ...bankAccountNav.routes,
        ...bankLedgerNav.routes,
        ...bankTransferNav.routes,
        ...bankTransactionNav.routes,
        bankLedgerPreviewNav.route,
        ledgerNav.route,
    ],
    nav: {
        id: "banking",
        title: "Banking",
        icon: "mdi-view-dashbord",
        children: [
            bankAccountNav.menu,
            bankLedgerNav.menu,
            bankTransferNav.menu,
            bankTransactionNav.menu,
            bankLedgerPreviewNav.menu,
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
