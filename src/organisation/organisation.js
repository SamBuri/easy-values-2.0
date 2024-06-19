import httmMethods from '../utils/HttpMethods'
import company from './company/company.js';
import branch from './branch/branch.js'
import tenant from './tenant/tenant.js'
export default {
    namespaced: true,
    state: {
        path: "organisation/enums/",
        businessTypes: [],
        dbTypes: [],
        dbTypesLoading: false,
        tenantTypes: [],
        tenantTypesLoading: false,


    }, mutations: {

        businessTypes(state, businessTypes) {
            state.businessTypes = businessTypes;
        },


    }, actions: {
        getBusinessTypes(context) {
            if (context.businessTypes) { return }
            httmMethods.get(`${context.state.path}businesstypes`)
                .then(response => {
                    context.commit("businessTypes", response.data);
                }).catch(e => {
                    context.commit("businessTypes", []);
                    console.log(e);
                })

        },

        getDbTypes(context) {
            if (context.dbTypes) { return; }
            context.state.dbTypesLoading = true;
            httmMethods.get(`${context.state.path}dbtypes`)
                .then(response => {
                    context.state.dbTypes = response.data;
                    context.state.dbTypesLoading = false;
                }).catch(e => {
                    context.state.dbTypes = [];
                    context.state.dbTypesLoading = false;
                    console.log(e);
                })

        },

        getTenantTypes(context) {
            if (context.tenantTypes) { return; }
            context.state.tenantTypesLoading = true;
            httmMethods.get(`${context.state.path}tenanttypes`)
                .then(response => {
                    context.state.tenantTypes = response.data;
                    context.state.tenantTypesLoading = false;
                }).catch(e => {
                    context.state.tenantTypes = [];
                    context.state.tenantTypesLoading = false;
                    console.log(e);
                })

        },

    },

    modules: { company, branch, tenant, }
}
