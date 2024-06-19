import httmMethods from '../../utils/HttpMethods'
import measureGroupNav from './MeasureGroupNav';
export default {
namespaced: true,
state() {
  return {
        mini:[],
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
            httmMethods.get(`${measureGroupNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },
}
