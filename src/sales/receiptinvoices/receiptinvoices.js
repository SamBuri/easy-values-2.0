import httmMethods from '../../utils/HttpMethods'
import receiptInvoicesNav from './ReceiptInvoicesNav';
export default {
namespaced: true,
state() {
  return{
        mini:[],
  }
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },


    },
actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(`${receiptInvoicesNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },
}
