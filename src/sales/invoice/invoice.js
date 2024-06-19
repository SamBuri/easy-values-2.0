import httmMethods from '../../utils/HttpMethods'
import invoiceNav from './InvoiceNav';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        due: [],
        deueLoading: false,

    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        due(state, due) {
            state.due = due;
        },

        dueLoading(state, dueLoading) {
            state.dueLoading = dueLoading;
        }


    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${invoiceNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getDue(context, customerId) {
            console.log("Getting Due Invoices")
            context.commit("dueLoading", true);
            httmMethods.get(`${invoiceNav.menu.path}/due/${customerId}`)
                .then(response => {
                    console.log("Path", `${invoiceNav.menu.path}/due/${customerId}`)
                    context.commit("due", response.data);
                    console.log("Response", response);
                    context.commit("dueLoading", false);
                }).catch(e => {
                    context.commit("due", []);
                    context.commit("dueLoading", false);
                    console.log(e);
                })

        },
    },
}
