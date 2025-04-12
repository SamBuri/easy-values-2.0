import httmMethods from '../../utils/HttpMethods'
import customerNav from './CustomerNav';
export default {
    namespaced: true,
    state() {
      return{
        mini: [],
        sponsors: [],
        miniLoading: [],
        sponsersLoading: [],
        obj: null,
        objLoading: false,
      }
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        sponsors(state, sponsors) {
            state.sponsors = sponsors
        },

        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading
        },

        sponsersLoading(state, sponsersLoading) {
            state.sponsersLoading = sponsersLoading
        },

        obj(state, obj) {
            state.obj = obj;
        },

        objLoading(state, objLoading) {
            state.objLoading = objLoading;
        },


    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading", true);
            httmMethods.get(`${customerNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getSponsors(context) {
            if (context.sponsors) { return }
            context.commit("sponsersLoading", true);
            httmMethods.get(`${customerNav.menu.path}/sponsors`)
                .then(response => {
                    context.commit("sponsors", response.data);
                    context.commit("sponsersLoading", false);
                }).catch(e => {
                    context.commit("sponsors", []);
                    console.log(e);
                    context.commit("sponsersLoading", false);
                })


        },

        async get(context, id) {
            context.commit("results", null,{ root: true });
            context.commit("objLoading", true);
            await httmMethods.get(`${customerNav.menu.path}/${id}`).then((response) => {

              context.commit("obj", response.data);
              console.log("Response", response);
              context.commit("objLoading", false);
              context.commit("results", { success: true, message: "Successful" , show: false},{ root: true });
            }).catch((error) => {
              console.log(error);
              context.commit("obj", null);
              context.commit("objLoading", false);
              context.commit("results", { success: false, message: error, show: true},{ root: true });
            });
          },
    },


}
