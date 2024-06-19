import httmMethods from '../../utils/HttpMethods'
import loanApplicationNav from './LoanApplicationNav';
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
        pending: [],
        pendingLoading: false,
        approved: [],
        approvedLoading: false,
  }

    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
         miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        pending(state, pending) {
            state.pending = pending;
        },
        pendingLoading(state, pendingLoading) {
            state.pendingLoading = pendingLoading;
        },

        approved(state, approved) {
            state.approved = approved;
        },
        approvedLoading(state, approvedLoading) {
            state.approvedLoading = approvedLoading;
        },
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            httmMethods.get(`${loanApplicationNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },


        getPending(context) {

            context.commit("pendingLoading", true);
            httmMethods.get(`${loanApplicationNav.menu.path}/pending`)
                .then(response => {
                    context.commit("pending", response.data);
                    context.commit("pendingLoading", false);
                }).catch(e => {
                    context.commit("pending", []);
                    console.log(e);
                    context.commit("pendingLoading", false);
                })

        },

        getApproved(context) {
             context.commit("pendingLoading", true);
            httmMethods.get(`${loanApplicationNav.menu.path}/approved`)
                .then(response => {
                    context.commit("approved", response.data);
                    context.commit("approvedLoading", false);
                }).catch(e => {
                    context.commit("approved", []);
                    console.log(e);
                    context.commit("approvedLoading", false);
                })

        },

    },
}
