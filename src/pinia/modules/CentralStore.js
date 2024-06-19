import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";

export const defineCentralStore =defineStore ("central", {
    state: () => ({
        data: {},
        centralMessage: '',
        loading: false,
        passedInsurance: null,
        dataLoading: false,
        path: "",
        obj: null,
        objLoading: false,
        results: null,
        loading: false,
        mode: 0,
    }),

    actions: {
        setResults(data){
            if(data!==null)
                this.results = { success: data.success, message: data.message, show: data.show, entity: data.entity };
            else this.results = null;
        },
        async post(request) {

            this.results = null;
            console.log("Request", request);
            this.loading = true;
          
            setTimeout(() => {
            }, 2000)
            let body=request.body;
            let toSendBody = request.doNotStringfy?body:JSON.stringify(body);
            httpMethods.post(request.path, toSendBody)
                .then((response) => {
                    var data = response.data;

                    console.log("Response ", data)
                    if(data.returnCode===0)
                       this.results = { success: true, message: data.returnMessage, show: true, entity: data.returnObject };
                    else  this.results = { success: false, message: data.returnMessage, show: true, entity: data.returnObject };
                   
                })
                .catch((error) => {
                   console.log("There was an error!", error);
                    this.loading = false;
                    this.results = { success: false, message: "Unknown Error occurred. Please try again later", show: true, entity: null };
                }).finally(()=>{
                    this.loading = false;

                });


        },



        put(request) {
            this.results = null;
            this.loading = true;
            setTimeout(() => {
            }, 2000)
            console.log("Request", request);
            httpMethods.put(request.path, request.body)
                .then((response) => {
                    var data = response.data;

                    console.log('Response', response.data)

                    if (context.getters["search/dialog"] && data.success) {
                        context.commit("search/editData", request.body);
                        context.commit("search/dialog", false);
                    }
                    this.loading = false;
                    this.results = { success: data.success, message: data.message, show: true, entity: data.entity };
                })
                .catch((error) => {
                    this.loading = false;
                    console.error("There was an error!", error);
                    this.results = { success: false, message: error, show: true, entity: null, };
                });

        },

        delete(path) {

            httpMethods.delete(path)
                .then((response) => {
                    var data = response.data;

                    console.log('Response', response.data)
                    this.results = { success: data.success, message: data.message, show: true };
                })
                .catch((error) => {
                    this.results = { success: false, message: error, show: true, };
                    console.error("There was an error!", error);

                });



        },

        async getStandard(context, path) {
            this.results = null;
            this.objLoading = true;
            await httpMethods.get(path).then((response) => {

                this.obj = response.data;
                console.log("Response", response);
                this.objLoading = false;
                this.results = { success: true, message: "Successful", show: false };
            }).catch((error) => {
                console.log(error);
                this.obj = null;
                this.objLoading = false;
                this.results = { success: false, message: error, show: true };
            });
        },

        getData( path) {
            this.results = null;

            this.dataLoading = true;
            httMethods.get(path).then((response) => {

                this.data=response.data;
                console.log("Response", response);
                this.dataLoading = false;
                this.results = { success: true, message: "Successful", show: false };
            }).catch((error) => {
                console.log(error);
                this.data= [];
                this.dataLoading = false;
                this.results= { success: false, message: error, show: true };
            });
        },

        get(url) {
            this.loading = true;
            httpMethods.get(url).then(response => {
                this.data = response.data;
                console.log(response);

            }).catch(e => {

                this.centralMessage = 'Error making a request';
                console.log(e.message);

            }).finally(() => {
                this.loading = false;
            });
        }

    }



})