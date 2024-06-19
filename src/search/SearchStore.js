import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineSearchStore = defineStore("search", {
  state: () => ({
    data: [],
    selected: {
      name: "",
      component: "",
      path: "",
      width: 500,
      headers: [],
      numbers: [],
    },

    searchOptions: null,

    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0,

    loading: true,
    currentPage: 1,
    errors: [],
    selectedData: [],
    dialog: false,

    miniData: [],
    miniSelected: {
      path: "",
      headers: [],
      name: "",
    },

    miniLoading: false,
    selectedMiniItem: null,
    miniDialog: false,
  }),

  actions: {
    editData(obj) {
      let currentObjets = this.data.filter((item) => item.id === obj.id);
      if (currentObjets) {
        let i = this.data.indexOf(currentObjets[0]);
        this.data.splice(i, 1, obj);
      }
    },

    addData(obj) {
      this.data.splice(0, 0, obj);
      this.totalElements += 1;
      this.numberOfElements += 1;
    },

    setResults(data) {
      const rootStore = defineRootStore();
      rootStore.setResults(data);
    },

    getData() {
      var page = this.currentPage > 0 ? this.currentPage - 1 : 0;
      this.loading = true;
      this.setResults("results", null);
      httpMethods
        .get(this.selected.path + "?page=" + page)
        .then((response) => {
          console.log("Data url", this.selected.path + "?page=" + page);
          this.data = response.data.content;
          console.log("data", response.data);
          this.totalPages = response.data.totalPages;
          this.totalElements = response.data.totalElements;
          this.numberOfElements = response.data.numberOfElements;
          this.loading = false;
          this.setResults({
            success: true,
            message: "Successful",
            show: false,
          });
        })
        .catch((e) => {
          this.data = [];
          this.errors.push(e);
          this.totalPages = 0;
          this.totalElements = 0;
          this.numberOfElements = 0;

          console.log("Error in search data", e);
          this.setResults("results", {
            success: false,
            message: e.message,
            show: true,
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },

    getSearchData(payload) {
      let path = payload.path;

      let options = payload.options;

      this.loading = true;
      console.log("Search Options: ", options);

      this.setResults(null);

      httpMethods
        .post(`${path}/search`, options)
        .then((response) => {
          this.data = response.data.content;
          console.log("data", response.data);
          this.totalPages = response.data.totalPages;
          this.totalElements = response.data.totalElements;
          this.numberOfElements = response.data.numberOfElements;
          this.loading = false;
          this.setResults({
            success: true,
            message: "Successful",
            show: false,
          });
        })
        .catch((e) => {
          this.data = [];
          this.totalPages = 0;
          this.totalElements = 0;
          this.numberOfElements = 0;

          console.log("Error in Search Data", e);
          this.setResults({ success: false, message: e.message, show: true });
        })
        .finally(() => {
          this.loading = false;
        });
    },

    // getMiniData(context) {

    //     this.miniLoading = true;
    //     context.commit("results", null,  {root:true});
    //     context.commit("miniData", []);
    //     httpMethods.get(`${this.miniSelected.path}/mini`).then(response => {
    //         context.commit("miniData", response.data);
    //         this.miniLoading = false;
    //         context.commit("results", { success: true, message: "Successful" , show: false},  {root:true});
    //     }).catch(e => {
    //         context.commit("miniData", []);
    //         this.miniLoading = false;
    //         console.log(e);
    //         context.commit("results", { success: false, message: e.message , show: true}, {root:true});
    //     })

    // },

    delete(id) {
      httpMethods
        .delete(this.selected.path + "/" + id)
        .then((response) => {
          console.log("Data url", this.selected.to + "/" + id);
          let res = response.data;
          let data = this.data.filter((item) => item.id !== id);
          this.data = data;
          this.totalElements -= 1;
          this.numberOfElements -= 1;
          this.setResults({
            success: res.success,
            message: res.message,
            show: true,
          });
        })
        .catch((e) => {
          console.log(e);
          this.setResults({ success: false, message: e.message, show: true });
        });
    },

    republish(id) {
      let path = `${this.selected.path}/republish/${id}`;

      httpMethods
        .get(path)
        .then((response) => {
          console.log("Data url", path);
          let res = response.data;

          this.setResults({
            success: res.success,
            message: res.message,
            show: true,
          });
        })
        .catch((e) => {
          console.log(e);
          this.setResults({ success: false, message: e.message, show: true });
        });
    },
  },
});
