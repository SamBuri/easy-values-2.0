import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";
export const defineComponentStore = defineStore("component", {
  state: () => ({

    periodicReportData: [],
    periodicReportDataLoading: false,
  }),
  actions: {

    getPeriodicReport(payload) {
      this.periodicReportData = [];
      const rootStore = defineRootStore();

      let res = rootStore
        .doPost(payload.path, payload.body, () => {
          this.periodicReportDataLoading = true;
          console.log("Payload: ", payload);

          this.periodicReportData = [];
        },
      (res)=>{
        console.log("Report Data", res);
        this.periodicReportData = res.data;

      },

      ()=>{
        this.periodicReportDataLoading = false;
      })
      return res;
    },
  },
});
