import httmMethods from '../../utils/HttpMethods'
import receiptNav from './ReceiptNav';
import storeFuncs from '../../utils/storeFuncs';
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
        dashboardList: [],
        dashboardListLoading: false,
        newReceipts: [],
        newReceiptLoading: false,
        todaySummary: [],
        todaySummaryLoading: false,
        dailyReceipts: [],
        dailyReceiptsLoading: false,
        obj: null,
        objLoading: false,
  }
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        todaySummary(state, todaySummary) {
            state.todaySummary = todaySummary;
        },

        dashboardListLoading(state, dashboardListLoading) {
            state.dashboardListLoading = dashboardListLoading;
        },

        dashboardList(state, dashboardList) {
            state.dashboardList = dashboardList;
        },

        todaySummaryLoading(state, todaySummaryLoading) {
            state.todaySummaryLoading = todaySummaryLoading;
        },


        dailyReceiptsLoading(state, dailyReceiptsLoading) {
            state.dailyReceiptsLoading = dailyReceiptsLoading;
        },

        dailyReceipts(state, dailyReceipts) {
            state.dailyReceipts = dailyReceipts;
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
            httmMethods.get(`${receiptNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading", false);
                }).catch(e => {
                    context.commit("mini", []);
                    context.commit("miniLoading", false);
                    console.log(e);
                })

        },




        getNewReceipts(context) {
            context.state.newReceiptLoading = true;
            let criteria = storeFuncs.getCreatedTodayCriteria();
            let cancelled = {

                key: 'cancelled',
                operation: 'EQUAL',
                value: "false",
                value2: "",
            };
            criteria.push(cancelled);
            httmMethods.post(`${receiptNav.menu.path}/list`, criteria)
                .then(response => {
                    context.state.newReceipts = response.data;
                    context.state.newReceiptLoading = false;

                }).catch(e => {
                    console.log("Error: ", e);
                    context.state.newReceipts = [];
                    context.state.newReceiptLoading = false;
                })


        },

        getTodaySummary(context) {
            context.commit("todaySummaryLoading", true);
            httmMethods.get(`${receiptNav.menu.path}/summary/today`)
                .then(response => {
                    context.commit("todaySummary", response.data);
                    console.log(response);
                    context.commit("todaySummaryLoading", false);
                }).catch(e => {
                    context.commit("dashboardList", []);
                    context.commit("todaySummaryLoading", false);
                    console.log(e);
                })

        },


        getDailyReceipts(context) {
            context.commit("dailyReceiptsLoading", true);
            var currentDate = new Date();
        var todayDate = currentDate.toISOString().slice(0, 10)




        var equalToToday= {
            key: 'receiptDate',
            operation: 'EQUAL',
            value: todayDate,
            value2: "",

        }
            httmMethods.post(`${receiptNav.menu.path}/list`, [equalToToday])
                .then(response => {
                    context.commit("dailyReceipts", response.data);
                    console.log(response);
                    context.commit("dailyReceiptsLoading", false);
                }).catch(e => {
                    context.commit("dailyReceipts", []);
                    context.commit("dailyReceiptsLoading", false);
                    console.log(e);
                })

        },

        async get(context, id) {
            context.commit("results", null,{ root: true });
            context.commit("objLoading", true);
            await httmMethods.get(`${receiptNav.menu.path}/${id}`).then((response) => {

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
