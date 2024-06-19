import httmMethods from '../utils/HttpMethods'
import period from './period/period'
import loanproduct from './loanproduct/loanproduct'
import loanproductcharges from './loanproductcharges/loanproductcharges'
import loanapplication from './loanapplication/loanapplication'
import loanapproval from './loanapproval/loanapproval'
import loan from './loan/loan'
import loanbill from './loanbill/loanbill'
import loanbilldetail from './loanbilldetail/loanbilldetail'
import loantransaction from './LoanTransaction/loantransaction'
import loanTransition from './loantransition/loantransition'
export default {
    namespaced: true,
    state: {
        path: "loan/enums/",
        interestMethods: [],
        interestMethodsLoading: false,
        determiningMethods: [],
        determiningMethodsLoading: false,
        loanStatuses: [],
        loanStatusesLoading: false
    },
    mutations: {
        interestMethods(state, interestMethods) {
            state.interestMethods = interestMethods;
        },

        interestMethodsLoading(state, interestMethodsLoading) {
            state.interestMethodsLoading = interestMethodsLoading;
        },
        determiningMethods(state, determiningMethods) {
            state.determiningMethods = determiningMethods;
        },

        determiningMethodsLoading(state, determiningMethodsLoading) {
            state.determiningMethodsLoading = determiningMethodsLoading;
        },

        loanStatuses(state, loanStatuses) {
            state.loanStatuses = loanStatuses;
        },

        loanStatusesLoading(state, loanStatusesLoading) {
            state.loanStatusesLoading = loanStatusesLoading;
        }
    },
    actions: {
        getInterestMethods(context) {
            if (context.state.interestMethods.length > 0) { return; }
            context.commit("interestMethodsLoading", true);
            httmMethods.get(`${context.state.path}/interestmethods`)
                .then(response => {
                    context.commit("interestMethods", response.data);
                    context.commit("interestMethodsLoading", false);
                }).catch(e => {
                    context.commit("interestMethods", []);
                    context.commit("interestMethodsLoading", false);
                    console.log(e);
                })

        },

        getLoanStatuses(context) {
            if (context.state.loanStatuses.length > 0) { return; }
            context.commit("loanStatusesLoading", true);

            httmMethods.get(`${context.state.path}/loanstatuses`)
                .then(response => {
                    context.commit("loanStatuses", response.data);
                    context.commit("loanStatusesLoading", false);
                }).catch(e => {
                    context.commit("loanStatuses", []);
                    context.commit("loanStatusesLoading", false);
                    console.log(e);
                })

        },

        getDeterminingMethods(context) {
            if (context.state.determiningMethods.length > 0) { return; }
            context.commit("determiningMethodsLoading", true);
            console.log("Path", `${context.state.path}/determiningmethods`);

            httmMethods.get(`${context.state.path}/determiningmethods`)
                .then(response => {
                    context.commit("determiningMethods", response.data);
                    context.commit("determiningMethodsLoading", false);
                }).catch(e => {
                    context.commit("determiningMethods", []);
                    context.commit("determiningMethodsLoading", false);
                    console.log(e);
                })

        },
    },
    modules:
    {
        period, loanproduct, loanproductcharges, loanapplication,
        loanapproval, loan, loanbill, loantransaction, loanTransition,
        loanbilldetail,
    }

}