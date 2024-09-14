import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineLoanStore = defineStore("loanstore", {
  state: () => ({
    path: "loan/enums/",
        interestMethods: [],
        interestMethodsLoading: false,
        determiningMethods: [],
        determiningMethodsLoading: false,
        loanStatuses: [],
        loanStatusesLoading: false
  }),

  actions: {
    async getInterestMethods() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/interestmethods`,
        () => {
          this.interestMethodsLoading = true;
          this.interestMethods = [];
        },

        (res) => (this.interestMethods = res.data),

        () => (this.interestMethodsLoading = false)
      );
      return data;
    },

    async getLoanStatuses() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/loanstatuses`,
        () => {
          this.loanStatusesLoading = true;
          this.loanStatuses = [];
        },

        (res) => (this.loanStatuses = res.data),

        () => (this.loanStatusesLoading = false)
      );
      return data;
    },

    async getDeterminingMethods() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/determiningmethods`,
        () => {
          this.determiningMethodsLoading = true;
          this.determiningMethods = [];
        },

        (res) => (this.determiningMethods = res.data),

        () => (this.determiningMethodsLoading = false)
      );
      return data;
    },



  },
});
