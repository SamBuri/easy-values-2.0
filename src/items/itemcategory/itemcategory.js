import httmMethods from '../../utils/HttpMethods'
import itemCategoryNav from './ItemCategoryNav';
export default {
namespaced: true,
state: {
        mini:[],
        
    },
mutations: {

        mini(state, mini) {
            state.mini = mini;
        },
        
        
    },
actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(`${itemCategoryNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },
}
