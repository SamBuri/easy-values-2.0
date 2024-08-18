import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";

export const defineRootStore = defineStore("root", {
  state: () => ({
    data: {},
    centralMessage: "",
    loading: false,
    passedInsurance: null,
    dataLoading: false,
    path: "",
    obj: null,
    objLoading: false,
    results: null,
    loading: false,
    deleteLoading: false,
    mode: 0,
  }),

  actions: {
    setResults(data) {
      if (data !== null)
        this.results = {
          success: data.success,
          message: data.message,
          show: data.show,
          entity: data.entity,
        };
      else this.results = null;
    },
    async post(request) {
      this.results = null;
      console.log("Request", request);
      this.loading = true;

      setTimeout(() => {}, 2000);

      let saveResults = await httpMethods
        .post(request.path, request.body)
        .then((response) => {
          var data = response.data;
          console.log("Response ", data);
          this.results = {
            success: data.success,
            message: data.message,
            show: true,
            entity: data.entity,
          };
          return this.results;
        })
        .catch((error) => {
          console.log("There was an error!", error);

          this.results = {
            success: false,
            message: "Unknown Error occurred. Please try again later",
            show: true,
            entity: null,
          };
          return this.results;
        })
        .finally(() => {
          this.loading = false;
        });

      return saveResults;
    },

    async put(request) {
      this.results = null;
      this.loading = true;
      setTimeout(() => {}, 2000);
      console.log("Request", request);
      let updateResults = await httpMethods
        .put(request.path, request.body)
        .then((response) => {
          var data = response.data;

          console.log("Response", response.data);

          // if (context.getters["search/dialog"] && data.success) {
          //   context.commit("search/editData", request.body);
          //   context.commit("search/dialog", false);
          // }

          this.results = {
            success: data.success,
            message: data.message,
            show: true,
            entity: data.entity,
          };
          return this.results;
        })
        .catch((error) => {
          console.error("There was an error!", error);
          this.results = {
            success: false,
            message: error,
            show: true,
            entity: null,
          };
          return this.results;
        })
        .finally(() => (this.loading = false));
      return updateResults;
    },

    async delete(path) {
      this.deleteLoading = true;
      let deleteResults = await httpMethods
        .delete(path)
        .then((response) => {
          var data = response.data;

          console.log("Response", response.data);
          this.results = {
            success: data.success,
            message: data.message,
            show: true,
          };
          return this.results;
        })
        .catch((error) => {
          this.results = {
            success: false,
            message: "Error Deleting data",
            show: true,
          };
          console.error("There was an error!", error);
          return this.results;
        })
        .finally(() => (this.deleteLoading = false));
      return deleteResults;
    },

    async get(url) {
      this.objLoading = true;
      this.obj = null;
      let data = await httpMethods
        .get(url)
        .then((response) => {
          this.obj = response.data;
          console.log(this.obj);
          if (!this.obj) {
            this.results = {
              success: false,
              message: "No data Found",
              show: true,
            };
          }
          return this.obj;
        })
        .catch((e) => {
          console.log("An error occured " + e);
          this.results = {
            success: false,
            message: "An error occured",
            show: true,
          };
          return null;
        })
        .finally(() => {
          this.objLoading = false;
        });
      return data;
    },

    getData(path) {
      this.results = null;

      this.dataLoading = true;
      httpMethods
        .get(path)
        .then((response) => {
          this.data = response.data;
          console.log("Response", response);
          this.dataLoading = false;
          this.results = { success: true, message: "Successful", show: false };
        })
        .catch((error) => {
          console.log(error);
          this.data = [];
          this.dataLoading = false;
          this.results = { success: false, message: error, show: true };
        });
    },
    async fetch(endpoint,  pre, success, end) {
     if(pre) pre();

      let res = await httpMethods
        .get(endpoint)
        .then((res) => {

          success(res)
          return res.data;
        })
        .catch((error) => {
          console.log("Error loading data", error);
          this.results = {
            success: false,
            message: "Error loading data",
            show: true,
          };

          return [];
        })
        .finally(() =>end());
      return res;
    },

    async doPost(endpoint, payload,  pre, success, end) {
      if(pre) pre();

       let res = await httpMethods
         .post(endpoint, payload)
         .then((res) => {

           success(res)
           return res.data;
         })
         .catch((error) => {
           console.log("Error Posting data", error);
           this.results = {
             success: false,
             message: "Error Posting data",
             show: true,
           };

           return [];
         })
         .finally(() =>end());
       return res;
     },



    republish(path, id) {
      let fullPath = `${path}/republish/${id}`;

      httpMethods
        .get(fullPath)
        .then((response) => {
          console.log("Data url", fullPath);
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
