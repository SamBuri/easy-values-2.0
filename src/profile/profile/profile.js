import httmMethods from '../../utils/HttpMethods'
import profileNav from './ProfileNav';
export default {
namespaced: true,
state: {
        path: profileNav.menu.path,
        mini:[],
        miniLoading: false,
        entity: null,
        
      
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
         miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        entity(state, entity) {
            state.entity = entity;
        },
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            httmMethods.get(`${profileNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },
        // setEntity(context, entity){
        //     context.state.entity = entity;
        // }


    },
   

    modules: {},
}
