import httmMethods from '../../utils/HttpMethods'
import accountCategoryNav from './AccountCategoryNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        accountCategoriesByAccountType: [],
        accountCategoriesByAccountTypeLoading: false,
        
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
            httmMethods.get(`${accountCategoryNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getAccountCategoriesByAccountType(context, accountType) {
           context.state.accountCategoriesByAccountTypeLoading= false;
            httmMethods.get(`${accountCategoryNav.menu.path}/mini/accounttype/${accountType}`)
                .then(response => {
                    context.state.accountCategoriesByAccountType= response.data;
                    context.state.accountCategoriesByAccountTypeLoading= false;
                }).catch(e => {
                    context.state.accountCategoriesByAccountType= [];
                    context.state.accountCategoriesByAccountTypeLoading= false;
                    console.log(e);
                   
                })

        },
    },
}
