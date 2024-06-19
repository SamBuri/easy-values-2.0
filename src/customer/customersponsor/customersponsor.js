import httmMethods from '../../utils/HttpMethods'
import customerSponsorNav from './CustomerSponsorNav';
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
        sponsors: [],
        sponsorsLoading: false
  }
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
         miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        sponsors(state, sponsors) {
            state.sponsors = sponsors;
        },

        sponsorsLoading(state, sponsorsLoading) {
            state.sponsorsLoading = sponsorsLoading;
        },
    },
actions: {
    async  getMini(context) {
            if (context.mini) { return }
             context.commit("miniLoading", true);
            await httmMethods.get(`${customerSponsorNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading", false);
                })

        },

        async getSponsors(context, customerId) {
             context.commit("sponsorsLoading", true);
             console.log("Getting sponsors:", context.state.sponsorsLoading)
             context.commit("sponsors", []);
            await httmMethods.get(`${customerSponsorNav.menu.path}/customer/${customerId}`)
                .then(response => {
                    context.commit("sponsors", response.data);
                    context.commit("sponsorsLoading", false);
                    console.log("Getting sponsors:", context.state.sponsorsLoading)
                }).catch(e => {
                    context.commit("sponsors", []);
                    console.log(e);
                    context.commit("sponsorsLoading", false);
                    console.log("Getting sponsors:", context.state.sponsorsLoading)
                })

        },

    },
}
