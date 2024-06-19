import httmMethods from '../../utils/HttpMethods'
import loanNav from './LoanNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
    namespaced: true,
    state() {
      return{
        mini: [],
        miniLoading: false,
        loanSummary: [],
        loanSummaryLoading: false,
        toFollowUpLoans: [],
        activeLoans: [],
        dormantLoans: [],
        recoveryLoans: [],
        defaultedLoans: [],
        completedLoans: [],

        toFollowUpLoansLoading: false,
        activeLoansLoading: false,
        dormantLoansLoading: false,
        recoveryLoansLoading: false,
        defaultedLoansLoading: false,
        completedLoansLoading: false,
        newLoans: [],
        newLoansLoadings: false,
        loanStatusSummary: [],
        loanStatusSummaryLoading: false


      }
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        loanSummary(state, loanSummary) {
            state.loanSummary = loanSummary;
        },
        loanSummaryLoading(state, loanSummaryLoading) {
            state.loanSummaryLoading = loanSummaryLoading;
        },

        toFollowUpLoans(state, toFollowUpLoans) {
            state.toFollowUpLoans = toFollowUpLoans;
        },
        toFollowUpLoansLoading(state, toFollowUpLoansLoading) {
            state.toFollowUpLoansLoading = toFollowUpLoansLoading;
        },
    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${loanNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },


        getLoanSummary(context) {
            if (context.loanSummary) { return }
            context.commit("loanSummaryLoading", true);
            httmMethods.get(`${loanNav.menu.path}/loansummary`)
                .then(response => {
                    context.commit("loanSummary", response.data);
                    context.commit("loanSummaryLoading", false);
                }).catch(e => {
                    context.commit("loanSummary", []);
                    console.log(e);
                    context.commit("loanSummaryLoading", false);
                })

        },

        getToFollowUpLoans(context) {
            // if (context.state.toFollowUpLoans.length > 0) return;
            context.commit("toFollowUpLoansLoading", true);
            httmMethods.get(`${loanNav.menu.path}/tofollowuploans`)
                .then(response => {
                    context.commit("toFollowUpLoans", response.data);
                    context.commit("toFollowUpLoansLoading", false);
                }).catch(e => {
                    context.commit("toFollowUpLoans", []);
                    console.log(e);
                    context.commit("toFollowUpLoansLoading", false);
                })

        },

        getActiveLoans(context) {
            // if (context.state.activeLoans.length > 0) { return; }
            context.state.activeLoansLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatus/Active`)
                .then(response => {
                    context.state.activeLoans = response.data;
                    context.state.activeLoansLoading = false;
                }).catch(e => {
                    context.state.activeLoans = [];
                    console.log(e);
                    context.state.activeLoansLoading = false;
                })

        },

        getDormantLoans(context) {
            // if (context.state.dormantLoans.length > 0) { return; }
            context.state.dormantLoansLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatus/Dormant`)
                .then(response => {
                    context.state.dormantLoans = response.data;
                    context.state.dormantLoansLoading = false;
                }).catch(e => {
                    context.state.dormantLoans = [];
                    console.log(e);
                    context.state.dormantLoansLoading = false;
                })

        },

        getRecoveryLoans(context) {
            if (context.state.recoveryLoans.length > 0) { return; }
            context.state.recoveryLoansLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatus/Recovery`)
                .then(response => {
                    context.state.recoveryLoans = response.data;
                    context.state.recoveryLoansLoading = false;
                }).catch(e => {
                    context.state.recoveryLoans = [];
                    console.log(e);
                    context.state.recoveryLoansLoading = false;
                })

        },

        getDefaultedLoans(context) {
            // if (context.state.defaultedLoans.length > 0) { return; }
            context.state.defaultedLoansLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatus/Defaulted`)
                .then(response => {
                    context.state.defaultedLoans = response.data;
                    context.state.defaultedLoansLoading = false;
                }).catch(e => {
                    context.state.defaultedLoans = [];
                    console.log(e);
                    context.state.defaultedLoansLoading = false;
                })

        },

        getCompletedLoans(context) {
            // if (context.state.completedLoans.length > 0) { return; }
            context.state.completedLoansLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatus/Completed`)
                .then(response => {
                    context.state.completedLoans = response.data;
                    context.state.completedLoansLoading = false;
                }).catch(e => {
                    context.state.completedLoans = [];
                    console.log(e);
                    context.state.completedLoansLoading = false;
                })

        },

        getNewLoans(context) {
            context.state.newLoansLoading = true;
            httmMethods.post(`${loanNav.menu.path}/list`, storeFuncs.getCreatedTodayCriteria())
                .then(response => {
                    context.state.newLoans = response.data;
                    context.state.newLoansLoading = false;
                }).catch(e => {
                    context.state.newLoans = [];
                    console.log("Error getting List data ",e);
                    context.state.newLoansLoading = false;
                })

        },

        getLoanStatusSummary(context) {

            context.state.loanStatusSummaryLoading = true;
            httmMethods.get(`${loanNav.menu.path}/loanstatussummary`)
                .then(response => {
                    console.log("Loan Status Summary", response.data)
                    context.state.loanStatusSummary = response.data;
                    context.state.loanStatusSummaryLoading = false;
                }).catch(e => {
                    context.state.loanStatusSummary = [];
                    console.log(e);
                    context.state.loanStatusSummaryLoading = false;
                })

        },



    },
}
