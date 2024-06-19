import httmMethods from '../../utils/HttpMethods'
import constants from '../../utils/constants'; export default {
    namespaced: true, state: {
        mini: [],
        miniSubCountiesByCounty:[]

    }, mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniSubCountiesByCounty(state, miniSubCountiesByCounty) {
            state.miniSubCountiesByCounty = miniSubCountiesByCounty;
        },


    }, actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(constants.endPoints.subcounties + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

        getMiniSubCountiesByCounty(context, countyID) {
            if (context.miniSubCountiesByCounty) { return }
            httmMethods.get(constants.endPoints.subcounties + "/mini/"+countyID)
                .then(response => {
                    context.commit("miniSubCountiesByCounty", response.data);
                }).catch(e => {
                    context.commit("miniSubCountiesByCounty", []);
                    console.log(e);
                })

        },
    },
}
