import httmMethods from '../../utils/HttpMethods'
import constants from '../../utils/constants';export default {
namespaced: true,state: {
        mini:[],
        miniParishesBySubCounty: [],
        
    },mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniParishesBySubCounty(state, miniParishesBySubCounty){
            state.miniParishesBySubCounty = miniParishesBySubCounty;
        },
        
        
    },actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(constants.endPoints.parishes + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })},

        
                getMiniParishesBySubCounty(context, subcountyId) {
            httmMethods.get(constants.endPoints.parishes+ "/mini/"+subcountyId)
                .then(response => {
                    context.commit("miniParishesBySubCounty", response.data);
                    console.log("Data: "+response.data)
                }).catch(e => {
                    context.commit("miniParishesBySubCounty", []);
                    console.log(e);
                })

        },
    },}
