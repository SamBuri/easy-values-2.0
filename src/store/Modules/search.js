import httmMethods from '../../utils/HttpMethods';
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
    mutations: {

        headers(state, headers) {
            state.headers = headers;
        },
        data(state, data) {
            state.data = data;
        },

      
        editData(state, obj) {
            let currentObjets = state.data.filter(item => item.id === obj.id);
            if (currentObjets) {
                let i = state.data.indexOf(currentObjets[0]);
                state.data.splice(i, 1, obj);
            }

        },

        addData(state, obj) {
            state.data.splice(0, 0, obj);
            state.totalElements += 1;
            state.numberOfElements += 1;
        },


        selected(state, selected) {
            state.selected = selected;
        },


        currentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        selectedData(state, selectedData) {
            state.selectedData = selectedData
        },

        dialog(state, dialog) {
            state.dialog = dialog
        },

        minHeaders(state, minHeaders) {
            state.minHeaders = minHeaders;
        },
        miniData(state, miniData) {
            state.miniData = miniData;
        },

        miniSelected(state, miniSelected) {
            state.miniSelected = miniSelected;
        },
        miniLoading(state, miniLoading){
            state.miniLoading = miniLoading;
        },
        selectedMiniItem(state, selectedMiniItem){
            state.selectedMiniItem = selectedMiniItem;
        },

        miniDialog(state, miniDialog){
            state.miniDialog = miniDialog;
        },

        searchOptions(state, searchOptions){
            state.searchOptions = searchOptions;
        }

    },
    actions: {

        getData(context) {
            var page = context.state.currentPage > 0 ? context.state.currentPage - 1 : 0;
            context.state.loading = true;
            context.commit("results", null,  {root:true});
            httmMethods.get(context.state.selected.path + "?page=" + page).then(response => {
                console.log("Data url", context.state.selected.path + "?page=" + page);
                context.commit("data", response.data.content);
                 console.log("data",response.data)
                context.state.totalPages = response.data.totalPages;
                context.state.totalElements = response.data.totalElements;
                context.state.numberOfElements = response.data.numberOfElements;
                context.state.loading = false;
                context.commit("results", { success: true, message: "Successful" , show: false},  {root:true});
            }).catch(e => {
                context.state.data = [];
                context.state.errors.push(e);
                context.state.totalPages = 0;
                context.state.totalElements = 0;
                context.state.numberOfElements = 0
                context.state.loading = false;
                console.log("Error in search data", e);
                context.commit("results", { success: false, message: e.message, show: true}, {root:true});
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