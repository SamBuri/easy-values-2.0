import httmMethods from '../../utils/HttpMethods'
import loanBillDetailsNav from './LoanBillDetailNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
    namespaced: true,
    state() {
      return{
        mini: [],
        miniLoading: false,
         newLoanBillDetails: [],
         newLoanBillDetailsLoading: false,
      }
    },
    actions: {
    getMini(context) {
        if (context.state.mini) { return }
        context.state.miniLoading = true;
        httmMethods.get(`${loanBillDetailsNav.menu.path}/mini`)
            .then(response => {
                context.state.mini = response.data;
                context.state.miniLoading = false;
            }).catch(e => {
                context.state.mini = [];
                console.log(e);
                context.state.miniLoading = false;
            })

    },

    getNewLoanBillDetails(context) {
        context.state.newLoanBillDetailsLoading = true;
        httmMethods.post(`${loanBillDetailsNav.menu.path}/list`, storeFuncs.getCreatedTodayCriteria())
            .then(response => {
                context.state.newLoanBillDetails = response.data;
                context.state.newLoanBillDetailsLoading = false;

            }).catch(e => {
                console.log("Error: ", e);
                context.state.newLoanBillDetails = [];
                context.state.newLoanBillDetailsLoading = false;
            })


    },
}
}
