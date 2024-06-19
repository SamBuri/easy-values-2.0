import api from "./api";
// import store from "../store/index";
// import responseModel from '../models/ResponseModel'



const httmMethods = {
    get(endpoint) {

        return api.createAPI()({
            method: "GET",
            url: endpoint });
    },

  getNoHeaders(endpoint) {

        return api.createAPINoHeaders()({
            method: "GET",
            url: endpoint });
    },

    createRequest(method, endpoint, payload) {

        return api.createAPI()({ method: method, url: endpoint, data: payload })
    },



    post(endpoint, payload) {
        return this.createRequest("POST", endpoint, payload);

    },

    postFormData(endpoint, key, payload) {
        let data =  new FormData();
        data.append(key, payload);
        console.log("data", data);
        return this.createRequest("POST", endpoint, data);
    },

    delete(endpoint) {
        return this.createRequest("DELETE", endpoint);
    },
    put(endpoint, payload) {
        return this.createRequest("PUT", endpoint, payload);
    },

    async fetch(endpoint, data, dataLoading, loadOnce, onSuccess, onError){
       dataLoading = true;
       if(loadOnce){
        if(data.length>0) return data;
       }
      let res =await this.get(endpoint)
                        .then((res)=>{
                          data =res.data;
                          onSuccess();

                        })
                        .catch((error)=>{
                          console.log("Error loading data", error);
                          onError();

                        })
                        .finally(()=>dataLoading=false);
       return res;

    }
}
export default httmMethods;
