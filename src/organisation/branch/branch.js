import { httpMethods } from "saburi-vue-utils";import branchNav from './BranchNav';
export default {
namespaced: true,
state() {
  return {
        mini:[],
        miniLoading: false,
        branchByCompanyId:[],
        branchByCompanyIdLoading: false,
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
            httpMethods.get(`${branchNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getBranchByCompanyId(context, companyId) {
            if (context.mini) { return }
             context.state.branchByCompanyIdLoading= true
            httpMethods.get(`${branchNav.menu.path}/companyId/${companyId}`)
                .then(response => {
                    context.state.branchByCompanyId=response.data;
                    context.state.branchByCompanyIdLoading = false;
                }).catch(e => {
                    context.state.branchByCompanyId = [];
                    console.log(e);
                    context.state.branchByCompanyIdLoading = false;
                })

        },
    },
}
