import httmMethods from '../../utils/HttpMethods'
import businessSectionAccountNav from './BusinessSectionAccountNav';
export default {
namespaced: true,
state: {
        mini:[],
        miniLoading: false,
        
    },
       getMini(context) {
            if (context.mini) { return }
             context.state.miniLoading= true;
            httmMethods.get(`${businessSectionAccountNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini= response.data;
                    context.state.miniLoading= false;
                }).catch(e => {
                    context.state.mini= [];
                   console.log(e);
                    context.state.miniLoading= false;
                })

        },}
