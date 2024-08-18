import httmMethods from "../utils/HttpMethods";
export default {
    namespaced: true,
state: {
    dialog: false,
    obj: null,
    source: "",
    data: [],
    periodicReportData: [],
    periodicReportDataLoading: false,
    saveDialog: false,

  },
  mutations: {
    dialog(state, dialog) {
      state.dialog = dialog;
    },
    obj(state, obj) {
      state.obj = obj;
    },

    data(state, data){
      state.data = data;
    },

    source(state, source){
      state.source =source;
    },

    saveDialog(state, saveDialog){
      state.saveDialog =saveDialog;
    },

    periodicReportData(state, periodicReportData){
      state.periodicReportData =periodicReportData;
    }

  },
  actions: {
    getPeriodicReport(context, payload) {
      context.state.periodicReportDataLoading = true;
      console.log("Payload: ", payload)
      context.commit("results", null,  {root:true});
      context.state.periodicReportData = [];
      httmMethods.post(payload.path, payload.body).then(response => {
          console.log("Data", response);
          context.state.periodicReportData = response.data;
          context.state.periodicReportDataLoading = false;
      }).catch(e => {

           context.state.periodicReportDataLoading = false;
          console.log(e);
          context.commit("results", { success: false, message: e , show: true}, {root:true});
      })

  },

  }
}
