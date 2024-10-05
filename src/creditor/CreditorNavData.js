import creditorNav from './creditor/CreditorNav.js'
import billNav from './bill/BillNav.js'
import billItemNav from './billitem/BillItemNav.js'
import creditorLedgerNav from './creditorledger/CreditorLedgerNav.js'
import creditorAccountGroupNav from './creditoraccountgroup/CreditorAccountGroupNav.js'
import paymentNav from './payment/PaymentNav.js'
import paymentBillNav from './paymentbill/PaymentBillNav.js'


const creditorNavData = {
    routes: [
        ...creditorNav.routes,
        ...billNav.routes,
        ...billItemNav.routes,
        ...creditorLedgerNav.routes,
        ...creditorAccountGroupNav.routes,
        ...paymentNav.routes,
        ...paymentBillNav.routes,
    ],
    nav: {
        id: "creditor",
        title: "Creditor",
        icon: "mdi-view-dashbord",
        children: [
          creditorAccountGroupNav.menu,
            creditorNav.menu,
            billNav.menu,
            billItemNav.menu,
            paymentNav.menu,
            paymentBillNav.menu,
            creditorLedgerNav.menu,


        ],
    },


}

export default creditorNavData
