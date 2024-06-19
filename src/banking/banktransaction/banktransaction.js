import httmMethods from '../../utils/HttpMethods'
import bankTransactionNav from './BankTransactionNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        newDebits: [],
        newDebitsLoading: false,
        newCredits: [],
        newCreditsLoading: false,


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
            httmMethods.get(`${bankTransactionNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getNewDebits(context) {

            var accountActionEqual = {

                key: 'accountAction',
                operation: 'EQUAL',
                value: "Debit",
                value2: "",

            }

            let criteria = storeFuncs.getCreatedTodayCriteria();
            criteria.push(accountActionEqual);
            context.state.newDebitsLoading = true;
            httmMethods.post(`${bankTransactionNav.menu.path}/list`, criteria)
                .then(response => {
                    context.state.newDebits = response.data;
                    context.state.newDebitsLoading = false;
                }).catch(e => {
                    context.state.newDebits = [];
                    console.log("Error getting List data ", e);
                    context.state.newDebitsLoading = false;
                })

        },

        getNewCredits(context) {

            var accountActionEqual = {

                key: 'accountAction',
                operation: 'EQUAL',
                value: "Credit",
                value2: "",

            }

            let criteria = storeFuncs.getCreatedTodayCriteria();
            criteria.push(accountActionEqual);
            context.state.newCreditsLoading = true;
            httmMethods.post(`${bankTransactionNav.menu.path}/list`, criteria)
                .then(response => {
                    context.state.newCredits = response.data;
                    context.state.newCreditsLoading = false;
                }).catch(e => {
                    context.state.newCredits = [];
                    console.log("Error getting List data ", e);
                    context.state.newCreditsLoading = false;
                })

        },
    },
}
