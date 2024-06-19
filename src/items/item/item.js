import httmMethods from '../../utils/HttpMethods'
import itemNav from './ItemNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        item: [],
        itemLoading: false,
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        miniLoading(state, miniLoading) {
            state.miniLoading = miniLoading;
        },

        item(state, item) {
            state.item = item;
        },

        itemLoading(state, itemLoading) {
            state.itemLoading = itemLoading;
        },

       
        
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
            context.commit("miniLoading",true);
            httmMethods.get(`${itemNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                    context.commit("miniLoading",false);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                    context.commit("miniLoading",false);
                })

        },

        async getItem(context, id) {
            context.commit("itemLoading",true);
            await httmMethods.get(`${itemNav.menu.path}/${id}`)
                .then(response => {
                    context.commit("item", response.data);
                    context.commit("itemLoading",false);
                }).catch(e => {
                    context.commit("item", []);
                    console.log(e);
                    context.commit("itemLoading",false);
                })

        },

        
    },
}
