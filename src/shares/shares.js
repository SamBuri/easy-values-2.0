import { httpMethods } from "saburi-vue-utils";// import constants from '../utils/constants'
import sharetype from './sharetype/sharetype'
import shareholder from './shareholder/shareholder'
import investment from './investment/investment'
import sharetransfer from './sharetransfer/sharetransfer'
import shareholdershares from './shareholdershares/shareholdershares'
export default {
    namespaced: true, state: {
        path: "shares/enums/",
        shareActions: [],
        shareActionsLoading: false,
        
    }, mutations: {

    }, actions: {

        getShareActions(context) {
            if (context.shareActions) { return }
            context.state.shareActionsLoading = true;
            httpMethods.get(`${context.state.path}/shareactions`)
                .then(response => {
                    context.state.shareActions = response.data;
                    context.state.shareActionsLoading = false;
                }).catch(e => {
                    context.state.shareActions = [];
                    console.log(e);
                    context.state.shareActionsLoading = false;
                })

        },

    },
    modules: { sharetype, shareholder, investment,sharetransfer, shareholdershares }
}
