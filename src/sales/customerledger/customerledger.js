import httmMethods from '../../utils/HttpMethods'
import customerLedgerNav from './CustomerLedgerNav';
export default {
    namespaced: true,
    state() {
      return{
        mini: [],
        customerLedgers: [],
        customerLedgersLoading: false,
      }
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        customerLedgers(state, customerLedgers) {
            state.customerLedgers = customerLedgers;
        },

        customerLedgersLoading(state, customerLedgersLoading) {
            state.customerLedgersLoading = customerLedgersLoading;
        },


    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(`${customerLedgerNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

        getCustomerLedgers(context, customerId) {

            context.commit("customerLedgers", [])
            context.commit("customerLedgersLoading", true)
            try {
                httmMethods.get(`${customerLedgerNav.menu.path}/customerid/${customerId}`)
                    .then(response => {
                        context.commit("customerLedgers", response.data)
                        context.commit("customerLedgersLoading", false)
                    }).catch(e => {
                        context.commit("customerLedgers", [])
                        context.commit("customerLedgersLoading", false)
                        console.log(e);
                    })
            } catch (error) {
                console.log("Error Loading Customer Ledger: " + error)
            }
            finally {
                context.commit("customerLedgersLoading", false)
            }
        },


    },
}
