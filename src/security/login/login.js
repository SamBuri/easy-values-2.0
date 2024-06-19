import httmMethods from '../../utils/HttpMethods'
import loginNav from './LoginNav';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        loggedIn: false,

    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },


        loggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
        },

    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${loginNav.menu.path}/mini`)
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
