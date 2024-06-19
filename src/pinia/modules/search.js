import httmMethods from '../../utils/HttpMethods';
import { defineCentralStore } from './CentralStore';
export default {
    namespaced: true,
    state: {
        data: [],
        selected: {
            name: '',
            component: '',
            path: '',
            width:500,
            headers: [],
            numbers: []
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

        miniData:[],
        miniSelected: {
            path: "",
            headers: [],
            name: "",
        },

        miniLoading: false,
        selectedMiniItem: null,
        miniDialog: false


    },

    actions: {

        editData(obj) {
            let currentObjets = this.data.filter(item => item.id === obj.id);
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

        getData() {
            const store = defineCentralStore();
            var page = this.currentPage > 0 ? this.currentPage - 1 : 0;
            this.loading = true;
            store.results =  null;
            httmMethods.get(this.selected.path + "?page=" + page).then(response => {
                console.log("Data url", cthis.path + "?page=" + page);
                this.data=response.data.content;
                 console.log("data",response.data)
                 this.totalPages = response.data.totalPages;
                 this.totalElements = response.data.totalElements;
                 this.numberOfElements = response.data.numberOfElements;
                 this.loading = false;
                 store.results = { success: true, message: "Successful" , show: false};
            }).catch(e => {
                this.data = [];
                this.errors.push(e);
                this.totalPages = 0;
                this.totalElements = 0;
                this.numberOfElements = 0
                this.loading = false;
                console.log("Error in search data", e);
                store.results = { success: false, message: e.message, show: true};
            })

        },


        getSearchData(context, payload) {

            let options =  payload.options;
            let path = payload.path;

            context.state.loading = true;


            console.log("Search Options: ", options)

            context.commit("results", null,  {root:true});

            httmMethods.post(`${path}/search`,options).then(response => {

                context.commit("data", response.data.content);
                 console.log("data",response.data)
                context.state.totalPages = response.data.totalPages;
                context.state.totalElements = response.data.totalElements;
                context.state.numberOfElements = response.data.numberOfElements;
                context.state.loading = false;
                context.commit("results", { success: true, message: "Successful" , show: false},  {root:true});
            }).catch(e => {
                context.state.data = [];
                context.state.totalPages = 0;
                context.state.totalElements = 0;
                context.state.numberOfElements = 0
                context.state.loading = false;
                console.log("Error in Search Data", e);
                context.commit("results", { success: false, message: e.message , show: true}, {root:true});
            })

        },


        getMiniData(context) {

            context.state.miniLoading = true;
            context.commit("results", null,  {root:true});
            context.commit("miniData", []);
            httmMethods.get(`${context.state.miniSelected.path}/mini`).then(response => {
                context.commit("miniData", response.data);
                context.state.miniLoading = false;
                context.commit("results", { success: true, message: "Successful" , show: false},  {root:true});
            }).catch(e => {
                context.commit("miniData", []);
                context.state.miniLoading = false;
                console.log(e);
                context.commit("results", { success: false, message: e.message , show: true}, {root:true});
            })

        },

        delete(context, id) {

            httmMethods.delete(context.state.selected.path + "/" + id).then(response => {
                console.log("Data url", context.state.selected.to + "/" + id);
                let res = response.data;
              let data = context.state.data.filter(item => item.id !== id);
                context.commit("data", data);
                context.state.totalElements -= 1;
                context.state.numberOfElements -= 1;
                context.commit("results", { success: res.success, message: res.message , show: true}, {root:true});
            }).catch(e => {

                console.log(e);
                context.commit("results", { success: false, message: e.message , show: true}, {root:true});
            })

        },


        republish(context, id) {

            let path= `${context.state.selected.path }/republish/${id}`;

            httmMethods.get(path).then(response => {
                console.log("Data url", path);
                let res = response.data;
                // alert("Success: " + res.success + " \n " + res.message)
                // let data = context.state.data.filter(item => item.id !== id);
                // context.commit("data", data);
                // context.state.totalElements -= 1;
                // context.state.numberOfElements -= 1;
                context.commit("results", { success: res.success, message: res.message , show: true}, {root:true});
            }).catch(e => {

                console.log(e);
                context.commit("results", { success: false, message: e.message , show: true}, {root:true});
            })

        },



    },
    getters: {
        dialog: (state) => state.dialog,
    }
}
