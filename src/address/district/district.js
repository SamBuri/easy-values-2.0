import httmMethods from '../../utils/HttpMethods';
import constants from '../../utils/constants';

export default {
    namespaced: true,
    state: {
        districts: [],
        mini: [],
        miniDistrictsByCountry: []
    },
    mutations: {
        setdistricts(state, payload) {
            state.countris = payload;
        },
        mini(state, mini) {
            state.mini = mini;
        },
        addCountry(state, payload) {
            state.districts.push(payload);
        },
        adddistricts(state, payload) {
            state.districts.push(...payload);
        },

        miniDistrictsByCountry(state, payload) {
            state.miniDistrictsByCountry = payload;
        }
    },
    actions: {
        getMini(context) {
            if (context.minidistricts) { return }
            httmMethods.get(constants.endPoints.districts + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

        getMiniDistrictsByCountry(context, countryID) {
            httmMethods.get(constants.endPoints.districts + "/mini/"+countryID)
                .then(response => {
                    context.commit("miniDistrictsByCountry", response.data);
                    console.log("Data: "+response.data)
                }).catch(e => {
                    context.commit("miniDistrictsByCountry", []);
                    console.log(e);
                })

        },

    },
    getters: {

    }
}