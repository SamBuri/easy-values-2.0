import httmMethods from '../../utils/HttpMethods'
import constants from '../../utils/constants';

export default {
    namespaced: true,
    state: {
        mini:[],
        miniCountiesByDistrict: []
        
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniCountiesByDistrict(state, miniCountiesByDistrict){
            state.miniCountiesByDistrict = miniCountiesByDistrict;

        }
        
        
    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(constants.endPoints.counties + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },

        getMiniCountiesByDistrict(context, districtID) {
            httmMethods.get(constants.endPoints.counties+ "/mini/"+districtID)
                .then(response => {
                    context.commit("miniCountiesByDistrict", response.data);
                    console.log("Data: "+response.data)
                }).catch(e => {
                    context.commit("miniCountiesByDistrict", []);
                    console.log(e);
                })

        },
    },
    getters: {

    }
}