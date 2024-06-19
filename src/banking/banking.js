import httmMethods from '../utils/HttpMethods.js'
import bankaccount from './bankaccount/bankaccount.js'
import banktransfer from './banktransfer/banktransfer.js'
import bankledger from './bankledger/bankledger.js'
import banktransaction from './banktransaction/banktransaction.js'
export default {
    namespaced:true,
    state: {
        path: "banking/enums/",
        bankAccountTypes: [],
        bankAccountTypesLoading: false
    },
    mutations: {},
    actions: {
        getBankAccountTypes(context) {
            if (context.bankAccountTypes) { return; }
            context.state.bankAccountTypesLoading = true;
            httmMethods.get(`${context.state.path}/bankaccounttypes`)
                .then(response => {
                    context.state.bankAccountTypes= response.data;
                }).catch(e => {
                    context.state.bankAccountTypes= [];
                    console.log(e);
                }).finally(()=>{
                    context.state.bankAccountTypesLoading = false;
                });

        },
    },
    modules: { bankaccount, banktransfer, bankledger, banktransaction} 

}