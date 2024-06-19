import httmMethods from '../../utils/HttpMethods'
import constants from '../../utils/constants';export default {
namespaced: true,state: {
        mini:[],
        
    },mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
        
        
    },actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(constants.endPoints.villages + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },}
