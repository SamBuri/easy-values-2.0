import httmMethods from '../../utils/HttpMethods'
import userNav from './UserNav';
import router from '@/router'
import constants from '../../utils/constants';
import createPersistedState from 'vuex-persistedstate'


export default {
    namespaced: true,
    plugins: [createPersistedState({
        storage: window.sessionStorage,
      })],
      state() {
        return {
        mini: [],
        miniLoading: false,
        currentUser: null,
        loggedIn: false,
        keycloak: null,
        tenant: null,
        currentBranch: null,
        currentBranchDialog: false,
        api: "",
        }
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        currentUser(state, currentUser) {
            state.currentUser = currentUser;
        },

        loggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
        },

        keycloak(state, keycloak) {
            state.keycloak = keycloak;
        },

        tenant(state, tenant) {
            state.tenant = tenant;
        },

        currentBranch(state, currentBranch) {
            state.currentBranch = currentBranch;
        },

        currentBranchDialog(state, currentBranchDialog) {
            state.currentBranchDialog = currentBranchDialog;
        },

        api(state, api) {
            state.api = api;
        },

    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${userNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        login(context, login) {
            try {
                console.log("Passed Token at login", localStorage.getItem(constants.LOCAL_STORAGE_KEYS.VUE_TOKEN))
                context.commit("miniLoading", true);
                context.commit("results", null, {root:true});
                httmMethods.post(`${userNav.menu.path}/login`, login)
                    .then(response => {

                        let data = response.data;
                        if (data.success) {
                            context.commit("currentUser", data.entity)
                            localStorage.setItem(constants.LOCAL_STORAGE_KEYS.USERNAME, data.entity.username);
                            context.commit("loggedIn", true);
                            router.push('/')
                            context.commit("results", {success: data.success, message: data.message, show: false},{ root: true })

                        }
                        context.commit("results", {success: data.success, message: data.message, show: true},{ root: true })

                        context.commit("miniLoading", false);

                    }).catch(e => {
                        context.commit("mini", []);
                        console.log("Error", e);
                        context.commit("miniLoading", false);
                        context.commit("results", {success: false, message: "Error connecting to the Login Service",  show: true},{ root: true })


                    })
            } catch (e) {
                context.commit("message", "Un known error");
                context.commit("results", {success: false, message: "Un expected Error", show: true},{ root: true });
                console.log(e);
            }

        },

        logout(context) {
            try {
                context.commit("currentUser", null)
                localStorage.setItem(constants.LOCAL_STORAGE_KEYS.USERNAME, '');
                context.commit("loggedIn", false);
                let keycloak = context.state.keycloak;
                keycloak.logout();

            } catch (e) {
                console.log(e);
                context.commit("message", "Un known error");
            }
        },
    },
}
