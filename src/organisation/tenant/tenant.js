import httmMethods from '../../utils/HttpMethods'
import tenantNav from './TenantNav';
export default {
namespaced: true,
state() {
  return {
        mini:[],
        miniLoading: false,
        tenant: null,
        firstTenant: null,
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
            httmMethods.get(`${tenantNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getTenant(context, host) {
            if (context.state.tenant) { return }
            httmMethods.get(`${tenantNav.menu.path}/mini/host/${host}`)
                .then(response => {
                    context.state.tenant = response.data

                }).catch(e => {
                   context.state.tenant=null;
                    console.log(e);

                })

        },

        async getFirstTenant(context, host) {
            if (context.state.tenant) { return }
            httmMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`)
                .then(response => {
                    let res = response.data;
                    context.state.firstTenant = res
                   if(res==null) console.log("No tenant found for the host: ",host);

                }).catch(e => {
                   context.state.firstTenant=null;
                    console.log(e);

                })

        },

    },
}
