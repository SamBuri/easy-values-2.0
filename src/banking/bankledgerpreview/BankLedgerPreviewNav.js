import BankLedgerPreview from './BankLedgerPreview.vue'
const bankLedgerPreviewNav = {
        route: {
                path: '/bankledgerpreview',
                name: 'bankledgerpreview',
                component: BankLedgerPreview,
                meta: { auth: true },
        }, menu: {


                route: "bankledgerpreview",
                 mode: 0,
                id: "bank.bankledgerpreview",
                title: "Bank Ledger",
                component: BankLedgerPreview,

        }
}
export default bankLedgerPreviewNav;
