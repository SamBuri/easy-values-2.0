import httmMethods from '../../utils/HttpMethods'
import expenseDetailsNav from './ExpenseDetailNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        newExpenseDetails: [],
        newExpenseDetailsLoading: false,

    },

    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${expenseDetailsNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },

        getNewExpenseDetails(context) {
            context.state.newExpenseDetailsLoading = true;
            httmMethods.post(`${expenseDetailsNav.menu.path}/list`, storeFuncs.getCreatedTodayCriteria())
                .then(response => {
                    context.state.newExpenseDetails = response.data;
                    context.state.newExpenseDetailsLoading = false;

                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.newExpenseDetails = [];
                    context.state.newExpenseDetailsLoading = false;
                })

        },

    }
}
