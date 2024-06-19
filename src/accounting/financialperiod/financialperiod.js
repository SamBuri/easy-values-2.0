import httmMethods from '../../utils/HttpMethods'
import financialPeriodNav from './FinancialPeriodNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        activeFinancialPeriod: null,
        
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
            httmMethods.get(`${financialPeriodNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getActiveFinancialPeriod(context) {
            if (context.mini) { return }
            
            httmMethods.get(`${financialPeriodNav.menu.path}/mini/active`)
                .then(response => {
                    let activeFinancialPeriod = response.data;
                    context.state.activeFinancialPeriod = activeFinancialPeriod;
                    console.log("Financial Period: ", activeFinancialPeriod)
                }).catch(e => {
                    context.state.activeFinancialPeriod = null;
                    console.log("Error fetching current financial period", e);
                    
                })

        },
    },
}
