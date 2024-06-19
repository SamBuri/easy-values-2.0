import httmMethods from '../../utils/HttpMethods'
import bankLedgerNav from './BankLedgerNav';
export default {
namespaced: true,
state: {
       bankLedgerNav: bankLedgerNav,
        mini:[],
        bankLedgers: [],
        bankLedgersLoading: false,
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        bankLedgers(state, bankLedgers) {
            state.bankLedgers = bankLedgers;
        },

        bankLedgersLoading(state, bankLedgersLoading) {
            state.bankLedgersLoading = bankLedgersLoading;
        },
        
        
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(`${bankLedgerNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

        getBankledgers(context, bankAccountId) {

            context.commit("bankLedgers", [])
            context.commit("bankLedgersLoading", true)
            try {
                httmMethods.get(`${bankLedgerNav.menu.path}/bankaccountid/${bankAccountId}`)
                    .then(response => {
                        context.commit("bankLedgers", response.data)
                        context.commit("bankLedgersLoading", false)
                    }).catch(e => {
                        context.commit("bankLedgers", [])
                        context.commit("bankLedgersLoading", false)
                        console.log(e);
                    })
            } catch (error) {
                console.log("Error Loading Bank Ledgers: " + error)
            }
            finally {
                context.commit("bankLedgersLoading", false)
            }
        },
    },
}
