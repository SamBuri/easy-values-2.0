var baseURL = import.meta.env.VITE_ORG_URL;
import api from "../api";
import defaultHttpStrategy from "./DefaultHttpStrategy";
const organisationHttpStrategy = {
    async getHttpStrategy() {
   
    const httpStrategy =  await defaultHttpStrategy.getHttpStrategy();

    return {
      headers: api.createDefaultHeaders(),
      // preBaseUrl: `admin/realms/${tenant.realm}`,
      strategyUrl: baseURL,
      resultHandler: (response) => {
        return response.data;
      },

     
      errorHandler: (error) => httpStrategy.errorHandler(error),


      filterable: true,

      searchData: (httpMethods, payload)=>httpStrategy.searchData(httpMethods, payload),

      searchDataHandler: (response) => httpStrategy.searchDataHandler(response),

    };

  },

};

export default organisationHttpStrategy;