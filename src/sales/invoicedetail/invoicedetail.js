import httmMethods from '../../utils/HttpMethods'
import invoiceDetailsNav from './InvoiceDetailNav';
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
            httmMethods.get(`${invoiceDetailsNav.menu.path}/mini`)
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
                    console.log(e);
                })

        },
    },
}
