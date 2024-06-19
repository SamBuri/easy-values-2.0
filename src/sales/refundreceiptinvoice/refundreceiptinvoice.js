import httmMethods from '../../utils/HttpMethods'
import refundReceiptInvoiceNav from './RefundReceiptInvoiceNav';
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
        receiptInvoicesByReceiptId: []
  }
    },
mutations: {


    },
actions: {
        getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            httmMethods.get(`${refundReceiptInvoiceNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini=[];
                    context.state.miniLoading = false;
                    console.log(e);

                })

        },
    },
}
