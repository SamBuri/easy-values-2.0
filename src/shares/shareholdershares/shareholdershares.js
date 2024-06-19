import httmMethods from '../../utils/HttpMethods'
import shareholderSharesNav from './ShareholderSharesNav';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        shareholderShares: [],
        shareholderSharesLoading: false,
        shareholderShare: null,
        shareholderShareLoading: false,

    },
    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${shareholderSharesNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },

        getShareholderShares(context, shareholderId) {
            context.state.shareholderSharesLoading = true;
            httmMethods.get(`${shareholderSharesNav.menu.path}/shareholderId/${shareholderId}`)
                .then(response => {
                    context.state.shareholderShares = response.data;
                    context.state.shareholderSharesLoading = false;
                }).catch(e => {
                    context.state.shareholderShares = [];
                    console.log(e);
                    context.state.shareholderSharesLoading = false;
                })

        },

        getShareholderShare(context, payload) {
            context.state.shareholderShareLoading = true;
            httmMethods.get(`${shareholderSharesNav.menu.path}/${payload.shareholderId}/${payload.shareTypeId}`)
                .then(response => {
                    context.state.shareholderShare = response.data;
                    context.state.shareholderShareLoading = false;
                }).catch(e => {
                    context.state.shareholderShare = null;
                    console.log(e);
                    context.state.shareholderShareLoading = false;
                })

        },
    }
}
