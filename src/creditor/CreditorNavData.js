import creditorNav from './creditor/CreditorNav.js'
import billNav from './bill/BillNav.js'
import billItemNav from './billitem/BillItemNav.js'
import creditorLedgerNav from './creditorledger/CreditorLedgerNav.js'
import creditorAccountGroupNav from './creditoraccountgroup/CreditorAccountGroupNav.js'


const creditorNavData = {
    routes: [
        ...creditorNav.routes,
        ...billNav.routes,
        ...billItemNav.routes,
        ...creditorLedgerNav.routes,
        ...creditorAccountGroupNav.routes,
    ],
    nav: {
        id: "creditor",
        title: "Creditor",
        icon: "mdi-view-dashbord",
        children: [
            creditorNav.menu,
            billNav.menu,
            billItemNav.menu,
            creditorLedgerNav.menu,
            creditorAccountGroupNav.menu,


        ],
    },


}

export default creditorNavData
