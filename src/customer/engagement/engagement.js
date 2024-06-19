import httmMethods from '../../utils/HttpMethods'
import engagementNav from './EngagementNav';
import storeFuncs from '../../utils/storeFuncs';
import engagementCriteria from './EngagementCriteria'
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
        newEngagements:[],
        newEngagementsLoading: false,
        customerEngagements: [],
        customerEngagementsLoading: false,
        dueEngagements: [],
        dueEngagementsLoading: false,
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
            httmMethods.get(`${engagementNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        getNewEngagements(context) {
            context.state.newEngagementsLoading = true;
            httmMethods.post(`${engagementNav.menu.path}/list`, storeFuncs.getCreatedTodayCriteria())
                .then(response => {
                    context.state.newEngagements = response.data;
                    context.state.newEngagementsLoading = false;

                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.newEngagements = [];
                    context.state.newEngagementsLoading = false;
                })

        },

        getCustomerEngagements(context, ledgerRequest) {
            context.state.customerEngagementsLoading = true;
            console.log("Request: ", ledgerRequest);
            httmMethods.post(`${engagementNav.menu.path}/list`,
            engagementCriteria.getPeriodicCustomerEngagementCriteria(ledgerRequest))
                .then(response => {
                    context.state.customerEngagements = response.data;
                    context.state.customerEngagementsLoading = false;
                    console.log("Engagement Data", response.data)

                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.customerEngagements = [];
                    context.state.customerEngagementsLoading = false;
                })

        },


        getDueEngagements(context) {
            context.state.dueEngagementsLoading = true;
            httmMethods.post(`${engagementNav.menu.path}/list`, engagementCriteria.getDueCriteria())
                .then(response => {
                    context.state.dueEngagements = response.data;
                    context.state.dueEngagementsLoading = false;

                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.dueEngagements = [];
                    context.state.dueEngagementsLoading = false;
                })

        },


    },
}

