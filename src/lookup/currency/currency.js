import httmMethods from '../../utils/HttpMethods'
import currencyNav from './CurrencyNav';
export default {
    namespaced: true,
    state() {
      return {
        mini: [],
        defaultCurrency: {},
        currency: null,
        currencyLoading: false
      }
    }, mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        defaultCurrency(state, defaultCurrency) {
            state.defaultCurrency = defaultCurrency;
        },


    }, actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(currencyNav.menu.path + "/mini")
                .then(response => {
                    let data = response.data
                    context.commit("mini", data);

                    let filteredCurrencies = data.filter((c) => c.isDefault === true);
                    let defaultCurrency = filteredCurrencies.length > 0 ? filteredCurrencies[0] : {};
                    context.commit("defaultCurrency", defaultCurrency);
                }).catch(e => {
                    context.commit("mini", []);
                    context.commit("defaultCurrency", {});
                    console.log(e);
                })

        },


        getCurrency(context, id) {
            context.state.currencyLoading= true;
            httmMethods.get(`${currencyNav.menu.path}/${id}`)
                .then(response => {
                    let data = response.data
                    context.state.currency= data;

                }).catch(e => {
                    console.log(e);
                    context.state.currency= null;

                })
                .finally(()=>{
                    context.state.currencyLoading= false;
                })

        },
    },
}
