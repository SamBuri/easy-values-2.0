import httmMethods from '../../utils/HttpMethods'
import generalLedgerNav from './GeneralLedgerNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        // accountBalances:[],
        // accountBalancesLoading: false,
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
         miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },
    },
actions: {
        // getAccountBalances(context) {
        //     if (context.mini) { return }
        //      context.commit("miniLoading", true);
        //     httmMethods.get(`${generalLedgerNav.menu.path}/mini`)
        //         .then(response => {
        //             context.commit("mini", response.data);
        //             context.commit("miniLoading", false);
        //         }).catch(e => {
        //             context.commit("mini", []);
        //             console.log(e);
        //             context.commit("miniLoading", false);
        //         })

        // },

        getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            httmMethods.get(`${generalLedgerNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },


    },
}
