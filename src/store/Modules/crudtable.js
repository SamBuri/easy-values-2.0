export default {
    namespaced: true,
    state: {
        data: {},
        results: 0,
        selected: {
            name: '',
            component: '',
            path: '',
            headers: [],
        },

        errors: [],
        selectedData: [],
        dialog: false,


    },
    mutations: {

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

        selectedData(state, selectedData) {
            state.selectedData = selectedData
        },

        dialog(state, dialog) {
            state.dialog = dialog
        },

        results(state, results) {
            state.results = results
        },


    },
    actions: {
        

    },
    
}