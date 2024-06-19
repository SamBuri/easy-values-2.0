import httmMethods from '../utils/HttpMethods'
import invoice from './invoice/invoice.js'
import invoicedetail from './invoicedetail/invoicedetail.js'
import receipt from './receipt/receipt.js'
import refund from './refund/refund.js'
import writeoff from './writeoff/writeoff.js'
export default {
    namespaced:true,
    state() {
      return{
        path: "sales/enums/",
        refundTypes: [],
        refundTypesLoading: false,

        writeOffTypes: [],
        writeOffTypesLoading: false,
      }
    },
    mutations: {

    },
    actions: {
        getRefundTypes(context) {
            if (context.state.refundTypes.length > 0) { return; }
            context.state.refundTypesLoading = false;
            httmMethods.get(`${context.state.path}/refundtypes`)
                .then(response => {
                    context.state.refundTypes = response.data;
                    context.state.refundTypesLoading = false;

                }).catch(e => {
                    context.state.refundTypes = [];
                    context.state.refundTypesLoading = false;
                    console.log(e);
                })

        },

        getWriteOffTypes(context) {
            if (context.state.writeOffTypes.length > 0) { return; }
            context.state.writeOffTypesLoading = false;
            httmMethods.get(`${context.state.path}/writeofftypes`)
                .then(response => {
                    context.state.writeOffTypes = response.data;
                    context.state.writeOffTypesLoading = false;

                }).catch(e => {
                    context.state.writeOffTypes = [];
                    context.state.writeOffTypesLoading = false;
                    console.log(e);
                })

        },
    },
    modules: {invoice, invoicedetail, receipt, refund, writeoff}

}
