import httmMethods from '../../utils/HttpMethods'
import loanProductChargesNav from './LoanProductChargesNav';
export default {
namespaced: true,
state() {
  return{
        mini:[],
        miniLoading: false,
  }

    },
       getMini(context) {
            if (context.mini) { return }
             context.state.miniLoading= true;
            httmMethods.get(`${loanProductChargesNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini= response.data;
                    context.state.miniLoading= false;
                }).catch(e => {
                    context.state.mini= [];
                   console.log(e);
                    context.state.miniLoading= false;
                })

        },}
