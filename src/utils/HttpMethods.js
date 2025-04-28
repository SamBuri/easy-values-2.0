import api from "./api";
// import store from "../store/index";
// import responseModel from '../models/ResponseModel'



const httpMethods = {
    get(endpoint, httpStrategy) {
       

        return api.createAPI(httpStrategy)({
            method: "GET",
            url: endpoint });
    },

  getNoHeaders(endpoint) {

        return api.createAPINoHeaders()({
            method: "GET",
            url: endpoint });
    },

    createRequest(method, endpoint, payload, httpStrategy) {

        return api.createAPI(httpStrategy)({ method: method, url: endpoint, data: payload })
    },



    post(endpoint, payload, httpStrategy) {
        return this.createRequest("POST", endpoint, payload, httpStrategy);

    },

    postFormData(endpoint, key, payload, httpStrategy) {
        let data =  new FormData();
        data.append(key, payload);
        console.log("data", data);
        return this.createRequest("POST", endpoint, data, httpStrategy);
    },

    delete(endpoint, httpStrategy) {
        return this.createRequest("DELETE", endpoint, httpStrategy);
    },
    put(endpoint, payload, httpStrategy) {
        return this.createRequest("PUT", endpoint, payload, httpStrategy);
    },

    async fetch(endpoint, data, dataLoading, loadOnce, onSuccess, onError, httpStrategy){
       dataLoading = true;
       if(loadOnce){
        if(data.length>0) return data;
       }
      let res =await this.get(endpoint, httpStrategy)
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
export default httpMethods;
