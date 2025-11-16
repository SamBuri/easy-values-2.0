var baseURL = import.meta.env.VITE_API_URL;
import api from "../api";
const defaultHttpStrategy = {
    async getHttpStrategy() {
   
    return {
      headers: api.createDefaultHeaders(),
      strategyUrl: baseURL,
      resultHandler: (response) => {
        return response.data;
      },

      errorHandler: (error) => {
         console.error("Error occurred!", error);
        return{
        success: false,
        message: "Unknown Error occurred. Please try again later",
        show: true,
        entity: null,
      };



      },

      filterable: true,

      searchData: (httpMethods, payload) => {
        return httpMethods
        .post(payload.path, payload.options, payload.httpStrategy);
      },

      searchDataHandler: (response) => response?.data || null,

    };

  },

};

export default defaultHttpStrategy;