import httpMethods from "../../utils/HttpMethods";
import countryNav from "./CountryNav";

export default {
  namespaced: true,
  state() {
    return {
      mini: [],
      miniLoading: false,
      country: null,
      countryLoading: false
};
  },
  mutations: {
    mini(state, mini) {
      state.mini = mini;
    },
    miniLoading(state, loading) {
      state.miniLoading = loading;
    },
    country(state, country) {
      state.country = country;
    },
    countryLoading(state, loading) {
      state.countryLoading = loading;
    }
},
  actions: {
    getMini(context) {
      if (context.state.mini.length > 0) return;
      context.commit("miniLoading", true);
      httpMethods
        .get(countryNav.menu.path + "/mini")
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

    getCountry(context, id) {
      if (!id) return;
      context.commit("countryLoading", true);
      httpMethods
        .get(`${countryNav.menu.path}/${id}`)
        .then((response) => {
          context.commit("country", response.data);
        })
        .catch((e) => {
          console.log(e);
          context.commit("country", null);
        })
        .finally(() => {
          context.commit("countryLoading", false);
        });
    }
}
};
