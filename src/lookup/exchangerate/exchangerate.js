import httpMethods from "../../utils/HttpMethods";
import exchangeRateNav from "./ExchangeRateNav";

export default {
  namespaced: true,
  state() {
    return {
      mini: [],
      miniLoading: false,
      exchangeRate: null,
      exchangeRateLoading: false
};
  },
  mutations: {
    mini(state, mini) {
      state.mini = mini;
    },
    miniLoading(state, loading) {
      state.miniLoading = loading;
    },
    exchangeRate(state, exchangeRate) {
      state.exchangeRate = exchangeRate;
    },
    exchangeRateLoading(state, loading) {
      state.exchangeRateLoading = loading;
    }
},
  actions: {
    getMini(context) {
      if (context.state.mini.length > 0) return;
      context.commit("miniLoading", true);
      httpMethods
        .get(exchangeRateNav.menu.path + "/mini")
        .then((response) => {
          context.commit("mini", response.data);
        })
        .catch((e) => {
          context.commit("mini", []);
          console.log(e);
        })
        .finally(() => {
          context.commit("miniLoading", false);
        });
    },

    getExchangeRate(context, id) {
      if (!id) return;
      context.commit("exchangeRateLoading", true);
      httpMethods
        .get(`${exchangeRateNav.menu.path}/${id}`)
        .then((response) => {
          context.commit("exchangeRate", response.data);
        })
        .catch((e) => {
          console.log(e);
          context.commit("exchangeRate", null);
        })
        .finally(() => {
          context.commit("exchangeRateLoading", false);
        });
    }
}
};
