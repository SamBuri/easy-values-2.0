import httmMethods from '../../utils/HttpMethods'
import bankAccountNav from './BankAccountNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading:false,
        bankAccountsByType: [],
        bankAccountsByTypeLoading:false,
        fromBankAccountsByType: [],
        fromBankAccountsByTypeLoading:false,
        
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        bankAccountsByType(state, bankAccountsByType) {
            state.bankAccountsByType = bankAccountsByType;
        },

        bankAccountsByTypeLoading(state, bankAccountsByTypeLoading) {
            state.bankAccountsByTypeLoading = bankAccountsByTypeLoading;
        },

        fromBankAccountsByType(state, fromBankAccountsByType) {
            state.fromBankAccountsByType = fromBankAccountsByType;
        },

        fromBankAccountsByTypeLoading(state, fromBankAccountsByTypeLoading) {
            state.fromBankAccountsByTypeLoading = fromBankAccountsByTypeLoading;
        },
        
        
    },
actions: {
   

        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${bankAccountNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getBankAccountsByType(context, bankAccountType) {

            context.commit("bankAccountsByTypeLoading", true);
            httmMethods.get(`${bankAccountNav.menu.path}/bankaccounttype/${bankAccountType}`)
                .then(response => {
                    context.commit("bankAccountsByType", response.data);
                    context.commit("bankAccountsByTypeLoading", false);
                }).catch(e => {
                    context.commit("bankAccountsByType", []);
                    console.log(e);
                    context.commit("bankAccountsByTypeLoading", false);
                   
                })

        },

        getFromBankAccountsByType(context, bankAccountType) {

            context.commit("fromBankAccountsByTypeLoading", true);
            httmMethods.get(`${bankAccountNav.menu.path}/bankaccounttype/${bankAccountType}`)
                .then(response => {
                    context.commit("fromBankAccountsByType", response.data);
                    context.commit("fromBankAccountsByTypeLoading", false);
                }).catch(e => {
                    context.commit("fromBankAccountsByType", []);
                    console.log(e);
                    context.commit("fromBankAccountsByTypeLoading", false);
                   
                })

        },

        

        
    },
}
