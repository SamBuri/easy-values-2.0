import httpMethods from '../../utils/HttpMethods'
import measureRelationNav from './MeasureRelationNav';
export default {
    namespaced: true,
    state() {
      return {
        mini: [],
      }
    },
    mutations: {

        mini(state, mini) {
            state.mini = mini;
        },


    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            httpMethods.get(`${measureRelationNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },
}
