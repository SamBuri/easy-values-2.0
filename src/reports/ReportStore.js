import { defineStore } from "pinia";
import { defineRootStore } from "@/root/RootStore";
export const defineReportStore = defineStore("component", {
  state: () => ({

    periodicReportData: [],
    periodicReportDataLoading: false,
  }),
  actions: {

    getPeriodicReport(payload) {
      const rootStore = defineRootStore();
      console.log("Payload", payload)

      let res = rootStore
        .doPost(payload.path, payload.body, () => {
          this.periodicReportDataLoading = true;
          console.log("Payload: ", payload);

          this.periodicReportData = [];
        },
      (response)=>{
        console.log("Report Data", response);
        this.periodicReportData = response.data;

      },

      ()=>{
        this.periodicReportDataLoading = false;
      })
      return res;
    },
  },
});
