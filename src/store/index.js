import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import httmMethods from "../utils/HttpMethods";
import search from "./Modules/search";
import crudtable from "./Modules/crudtable";
import address from "../address/address";
import accounting from "../accounting/accounting.js";
import lookup from "../lookup/lookup.js";
import customer from "../customer/customer.js";
import organisation from "../organisation/organisation";
import posting from "../posting/posting.js";
// import items from '../items/items.js'
import sales from "../sales/sales";
import banking from "../banking/banking.js";
import loan from "../loan/loan";
import security from "../security/security";
import components from "../components/components";
import profile from "../profile/profile";
import expenses from "../expenses/expenses";
import shares from "../shares/shares";
import creditor from "../creditor/creditor.js";
import interview from "../interview/interview";

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: ["security"],
    }),
  ],
  state() {
    return {
      data: [],
      dataLoading: false,
      path: "",
      obj: null,
      objLoading: false,
      results: null,
      loading: false,
      mode: 0,
    };
  },
  mutations: {
    path(state, path) {
      state.path = path;
    },

    data(state, data) {
      state.data = data;
    },

    obj(state, obj) {
      state.obj = obj;
    },

    objLoading(state, objLoading) {
      state.objLoading = objLoading;
    },

    results(state, results) {
      state.results = results;
    },

    loading(state, loading) {
      state.loading = loading;
    },

    mode(state, mode) {
      state.mode = mode;
    },
  },
  actions: {
    post(context, request) {
      context.commit("results", null);
      console.log("Request", request);
      context.commit("loading", true);
      console.log("Loading", context.state.loading);
      setTimeout(() => {}, 2000);

      httmMethods
        .post(request.path, request.body)
        .then((response) => {
          var data = response.data;

          console.log("Response", response);
          if (context.getters["search/dialog"] && data.success) {
            context.commit("search/addData", data.entity);
            context.commit("search/dialog", false);
          }

          context.commit("results", {
            success: data.success,
            message: data.message,
            show: true,
            entity: data.entity,
          });
          context.commit("loading", false);
          console.log("Loading", context.state.loading);
        })
        .catch((error) => {
          console.log("There was an error!", error);
          context.commit("loading", false);
          console.log("Loading", context.state.loading);
          context.commit("results", {
            success: false,
            message: error,
            show: true,
            entity: null,
          });
        });
    },

    put(context, request) {
      context.commit("results", null);
      context.commit("loading", true);
      setTimeout(() => {}, 2000);
      console.log("Request", request);
      httmMethods
        .put(request.path, request.body)
        .then((response) => {
          var data = response.data;

          console.log("Response", response.data);

          if (context.getters["search/dialog"] && data.success) {
            context.commit("search/editData", request.body);
            context.commit("search/dialog", false);
          }
          context.commit("loading", false);
          console.log("Loading", context.state.loading);
          context.commit("results", {
            success: data.success,
            message: data.message,
            show: true,
            entity: data.entity,
          });
        })
        .catch((error) => {
          context.commit("loading", false);
          console.error("There was an error!", error);
          context.commit("results", {
            success: false,
            message: error,
            show: true,
            entity: null,
          });
        });
    },

    delete(context, path) {
      httmMethods
        .delete(path)
        .then((response) => {
          var data = response.data;

          console.log("Response", response.data);
          context.commit("results", {
            success: data.success,
            message: data.message,
            show: true,
          });
        })
        .catch((error) => {
          context.commit("results", {
            success: false,
            message: error,
            show: true,
          });
          console.error("There was an error!", error);
        });
    },

    async get(context, path) {
      context.commit("results", null);
      context.commit("objLoading", true);
      await httmMethods
        .get(path)
        .then((response) => {
          context.commit("obj", response.data);
          console.log("Response", response);
          context.commit("objLoading", false);
          context.commit("results", {
            success: true,
            message: "Successful",
            show: false,
          });
        })
        .catch((error) => {
          console.log(error);
          context.commit("obj", null);
          context.commit("objLoading", false);
          context.commit("results", {
            success: false,
            message: error,
            show: true,
          });
        });
    },

    getData(context, path) {
      context.commit("results", null);

      context.dataLoading = true;
      httmMethods
        .get(path)
        .then((response) => {
          context.commit("data", response.data);
          console.log("Response", response);
          context.dataLoading = false;
          context.commit("results", {
            success: true,
            message: "Successful",
            show: false,
          });
        })
        .catch((error) => {
          console.log(error);
          context.commit("data", []);
          context.dataLoading = false;
          context.commit("results", {
            success: false,
            message: error,
            show: true,
          });
        });
    },
  },

  modules: {
    search,
    crudtable,
    address,
    accounting,
    lookup,
    customer,
    organisation,
    posting,
    // items,
    sales,
    banking,
    loan,
    security,
    components,
    profile,
    expenses,
    shares,
    creditor,
    interview,
  },
});

export default store;
