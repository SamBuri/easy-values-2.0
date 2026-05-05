import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import funcs from "@/utils/funcs";

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
    deleteLoading: false,
    mode: 0,
  }),

  actions: {
    getDefaultFromList(list, returnAny=true) {
      return funcs.getDefaultFromList(list,returnAny);
    }
    ,
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

    showSuccess(message) {

        this.results = {
          success: true,
          message: message,
          show: true
        }
    },

    showError(message) {

      this.results = {
        success: false,
        message: message,
        show: true
      }
    },

     strategyResults(response, httpStrategy, show=true){
      console.log("Response ", response);
      let resultHandler = httpStrategy?.resultHandler
          this.results = resultHandler?resultHandler(response): response.data;
          this.results.show= show;
          return this.results;
     },

     strategyError(error, httpStrategy){
      console.error("Eror occured!", error);
      let errorHandler = httpStrategy?.errorHandler
      this.results =  errorHandler?errorHandler(error):{
        success: false,
        message: "Unknown Error occurred. Please try again later",
        show: true,
        entity: null,
      };
      return this.results;
     },

    async importData(request, show = true) {
      this.results = null;
      console.log("Import Request", request);
      this.loading = true;

      let importResults = await httpMethods
        .post(request.path, request.body, request.httpStrategy)
        .then((response) => {
          let data = response.data;

          // Unwrap if backend returns ResponseObj<ImportResponse>
          if (data && typeof data === 'object' && data.entity) {
            this.results = data.entity;
          } else if (data && typeof data === 'object') {
            this.results = data;
          } else {
             // Fallback if backend returns string, empty, or unexpected format
             this.results = {
                successful: 0,
                failed: 1,
                errors: [{ rowNumber: '-', externalReference: '-', errorMessage: data || "Invalid response format from server" }]
             };
          }

          this.results.show = show;
          return this.results;
        })
        .catch((error) => {
          console.error("Import Error", error);
          this.results = {
            successful: 0,
            failed: 1,
            errors: [{ rowNumber: 0, externalReference: '-', errorMessage: error.message || "Unknown error occurred" }],
            show: show
          };
          return this.results;
        })
        .finally(() => {
          this.loading = false;
        });

      return importResults;
    },

    async post(request, show=true) {
      this.results = null;
      console.log("Request", request);
      this.loading = true;

      setTimeout(() => {}, 2000);

      let saveResults = await httpMethods
        .post(request.path, request.body, request.httpStrategy)
        .then((response) => {

          return this.strategyResults(response, request.httpStrategy, show);
        })
        .catch((error) => {
          return this.strategyError(error, request.httpStrategy);


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
        .put(request.path, request.body, request.httpStrategy)
        .then((response) => {

          console.log("Response", response.data);

          return this.strategyResults(response, request.httpStrategy);

        })
        .catch((error) => {
          return this.strategyError(error, request.httpStrategy);
        })
        .finally(() => (this.loading = false));
      return updateResults;
    },


    async delete(request, show = true) {
      this.results = null;
      console.log("Request", request);
      this.loading = true;

      setTimeout(() => {}, 2000);

      let saveResults = await httpMethods
        .delete(request.path, request.body, request.httpStrategy)
        .then((response) => {

          return this.strategyResults(response, request.httpStrategy, show);
        })
        .catch((error) => {
          return this.strategyError(error, request.httpStrategy);


        })
        .finally(() => {
          this.loading = false;
        });

      return saveResults;
    },

    // async delete(path, httpStrategy, show = true) {
    //   this.deleteLoading = true;
    //   let deleteResults = await httpMethods
    //     .delete(path, httpStrategy)
    //     .then((response) => {
    //       var data = response.data;

    //       console.log("Response", response.data);
    //       return this.strategyResults(data, httpStrategy, show);

    //     })
    //     .catch((error) => {

    //       return this.strategyError(error, request.httpStrategy);
    //     })
    //     .finally(() => (this.deleteLoading = false));
    //   return deleteResults;
    // },

    async get(url, httpStrategy) {
      if(!url)return null;
      this.objLoading = true;
      this.obj = null;
      let data = await httpMethods
        .get(url,httpStrategy)
        .then((response) => {
          let entity =  response.data?.entity;
          this.obj = entity||response.data;
          console.log("Returned Data", this.obj);
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

    getData(path, httpStrategy) {
      this.results = null;

      this.dataLoading = true;
      httpMethods
        .get(path, httpStrategy)
        .then((response) => {
          let entity =response?.data?.entity;
          this.data = entity||response.data;
          console.log("Response", response);
          this.results = { success: true, message: "Successful", show: false };
        })
        .catch((error) => {
          console.log(error);
          this.data = [];

          this.results = { success: false, message: error, show: true };
        })
        .finally(()=> this.dataLoading = false);
    },
    async fetch(endpoint,  pre, success, end, httpStrategy) {
     if(pre) pre();

      let res = await httpMethods
        .get(endpoint, httpStrategy)
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

    async doPost(endpoint, payload,  pre, success, end, httpStrategy) {
      if(pre) pre();

       let res = await httpMethods
         .post(endpoint, payload, httpStrategy)
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



    republish(path, id,  httpStrategy) {
      let fullPath = `${path}/republish/${id}`;

      httpMethods
        .get(fullPath, httpStrategy)
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
