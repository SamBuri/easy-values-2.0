import httmMethods from '../../utils/HttpMethods'
import roleDetailsNav from './RoleDetailsNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
         miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            httmMethods.get(`${roleDetailsNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },
    },
}
