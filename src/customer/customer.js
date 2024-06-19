import accountsGroup from './accountsgroup/accountsgroup'
import customer from "./customer/customer";
import customersponsor from './customersponsor/customersponsor'
import customerledger from "./customerledger/customerledger";
import engagement from './engagement/engagement'
import httmMethods from "../utils/HttpMethods";
export default {
    namespaced: true,
    state: {
        path: "customer/enums/",
        engagementModes: [],
        engagementModesLoading: false,
       engagementReasons: [],
        engagementReasonsLoading: false,
    },
    mutations: {
        
    },
    actions: {
        getEngagementModes(context) {
            if (context.state.engagementModes.length > 0) { return; }
            context.state.engagementModesLoadin= true;
            httmMethods.get(`${context.state.path}engagementmodes`)
                .then(response => {
                    context.state.engagementModes =response.data;
                    context.state.engagementModesLoadin= false;
                }).catch(e => {
                    context.state.engagementModes= [];
                    context.state.engagementModesLoadin= false;
                    console.log(e);
                })

        },

        getEngagementReasons(context) {
            if (context.state.engagementReasons.length > 0) { return; }
            context.state.engagementReasonsLoading = true;

            httmMethods.get(`${context.state.path}engagementreasons`)
                .then(response => {
                    context.state.engagementReasons= response.data;
                    context.state.engagementReasonsLoading=false;
                }).catch(e => {
                    context.state.engagementReasons= [];
                    context.state.engagementReasonsLoading= false;
                    console.log(e);
                })

        },
    },
    modules: {customer, customersponsor, customerledger, engagement, accountsGroup }

}