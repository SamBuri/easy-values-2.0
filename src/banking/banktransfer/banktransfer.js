import httmMethods from '../../utils/HttpMethods'
import bankTransferNav from './BankTransferNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        newBankTransfers: [],
        newBankTransfersLoading: false,

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
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${bankTransferNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getNewBankTransfers(context) {
            context.state.newBankTransfersLoading = true;
            httmMethods.post(`${bankTransferNav.menu.path}/list`, storeFuncs.getCreatedTodayCriteria())
                .then(response => {
                    context.state.newBankTransfers = response.data;
                    context.state.newBankTransfersLoading = false;
                   
                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.newBankTransfers = [];
                    context.state.newBankTransfersLoading = false;
                })

        },

    },
}
