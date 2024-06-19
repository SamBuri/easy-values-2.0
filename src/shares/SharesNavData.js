import investmentNav from "./investment/InvestmentNav"
import shLedgerNav from "./ledger/ShLedgerNav"
import shareholderNav from "./shareholder/ShareholderNav"
import shareholderLedgerNav from "./shareholderledger/ShareholderLedgerNav"
import shareholderSharesNav from "./shareholdershares/ShareholderSharesNav"
import shareTransferNav from "./sharetransfer/ShareTransferNav"
import shareTypeNav from "./sharetype/ShareTypeNav"

const sharesNavData = {
    routes: [
        ...shareTypeNav.routes,
        ...shareholderNav.routes,
        ...investmentNav.routes,
        ...shareTransferNav.routes,
        ...shareholderLedgerNav.routes,
        ...shareholderSharesNav.routes,
        shLedgerNav.route,



    ],
    nav: {
        id: "Shares",
        title: "Shares",
        icon: "mdi-view-dashbord",
        children: [
            shareTypeNav.menu,
            shareholderNav.menu,
            investmentNav.menu,
            shareTransferNav.menu,
            shareholderLedgerNav.menu,
            shareholderSharesNav.menu,
            shLedgerNav.menu
        ],
    },

    menus: [
        shareTypeNav.menu,
        shareholderNav.menu,
        investmentNav.menu,
        shareTransferNav.menu,
        shareholderLedgerNav.menu,
        shareholderSharesNav.menu,
    ],
}

export default sharesNavData
