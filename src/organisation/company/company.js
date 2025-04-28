import httpMethods from '../../utils/HttpMethods'
import companyNav from './CompanyNav';
export default {
    namespaced: true,
    state() {
      return {
        mini: [],
        miniLoading: false,
        company: null,
        companyLoading: false,
      }
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
            httpMethods.get(`${companyNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },


        getCompany(context, id) {
            if (context.state.company) { return }
            context.state.companyLoading = true;
            httpMethods.get(`${companyNav.menu.path}/${id}`)
                .then(response => {
                    context.state.company = response.data;
                    context.state.companyLoading = false;
                }).catch(e => {
                    context.state.company = null;
                    console.log(e);
                    context.state.companyLoading = false;
                })

        },
    },
}
