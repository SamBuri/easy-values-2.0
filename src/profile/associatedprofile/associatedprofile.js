import httmMethods from '../../utils/HttpMethods'
import associatedProfileNav from './AssociatedProfileNav';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,

    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${associatedProfileNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },
    }
}
