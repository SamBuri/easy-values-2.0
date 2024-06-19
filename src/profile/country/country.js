import httmMethods from '../../utils/HttpMethods';
import constants from '../../utils/constants';

export default {
    namespaced: true,
    state: {
        countries: [],
        mini: []
    },
    mutations: {
        setCountries(state, payload) {
            state.countries = payload;
        },
        mini(state, mini) {
            state.mini = mini;
        },
        addCountry(state, payload) {
            state.countries.push(payload);
        },
        addCountries(state, payload) {
            state.countries.push(...payload);
        }
    },
    actions: {
        getMini(context) {
            if (context.miniCountries) { return }
            httmMethods.get(constants.endPoints.countries + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

    },
    getters: {

    }
}