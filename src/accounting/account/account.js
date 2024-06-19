import httmMethods from '../../utils/HttpMethods'
import accountNav from './AccountNav';
export default {
    namespaced: true,
    state: {

        mini: [],
        miniLoading: false,
        accountsByAccountType: [],
        accountsByAccountTypeLoading: false,
        contraAccountsByAccountType: [],
        contraAccountsByAccountTypeLoading: false,
        assetAccountType: "Asset",
        assetAccounts: [],
        assetAccountTypesLoading: false,

        equityAccountType: "Equity",
        equityAccounts: [],
        equityAccountsLoading: false,


        liabilityAccountType: "Liability",
        liabilityAccounts: [],
        liabilityAccountsLoading: false,

        incomeAccountType: "Income",
        incomeAccounts: [],
        incomeAccountsLoading: false,

        expenseAccountType: "Expense",
        expenseAccounts: [],
        expenseAccountsLoading: false,

    },

    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${accountNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },

        getAccountsByAccountType(context, accountType) {

            context.state.accountsByAccountTypeLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${accountType}`)
                .then(response => {
                    context.state.accountsByAccountType = response.data;
                    context.state.accountsByAccountTypeLoading = false;
                }).catch(e => {
                    context.state.accountsByAccountType = [];
                    console.log(e);
                    context.state.accountsByAccountTypeLoading = false;
                })

        },

        getContraAccountsByAccountType(context, accountType) {

            context.state.contraAccountsByAccountTypeLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/contra/${accountType}`)
                .then(response => {
                    context.state.contraAccountsByAccountType = response.data;
                    context.state.contraAccountsByAccountTypeLoading = false;
                }).catch(e => {
                    context.state.contraAccountsByAccountType = [];
                    console.log(e);
                    context.state.contraAccountsByAccountTypeLoading = false;
                })

        },


        getAssetAccounts(context) {
            if (context.state.assetAccounts.length > 0) return
            context.state.assetAccountsLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${context.state.assetAccountType}`)
                .then(response => {
                    context.state.assetAccounts = response.data;
                    context.state.assetAccountsLoading = false;
                }).catch(e => {
                    context.state.assetAccounts = [];
                    console.log(e);
                    context.state.assetAccountsLoading = false;
                })
        },

        getEquityAccounts(context) {
            if (context.state.equityAccounts.length > 0) return
            context.state.equityAccountsLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${context.state.equityAccountType}`)
                .then(response => {
                    context.state.equityAccounts = response.data;
                    context.state.equityAccountsLoading = false;
                }).catch(e => {
                    context.state.equityAccounts = [];
                    console.log(e);
                    context.state.equityAccountsLoading = false;
                })
        },

        getLiabilityAccounts(context) {
            if (context.state.liabilityAccounts.length > 0) return
            context.state.liabilityAccountsLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${context.state.liabilityAccountType}`)
                .then(response => {
                    context.state.liabilityAccounts = response.data;
                    context.state.liabilityAccountsLoading = false;
                }).catch(e => {
                    context.state.liabilityAccounts = [];
                    console.log(e);
                    context.state.liabilityAccountsLoading = false;
                })
        },

        getIncomeAccounts(context) {
            if (context.state.incomeAccounts.length > 0) return
            context.state.incomeAccountsLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${context.state.incomeAccountType}`)
                .then(response => {
                    context.state.incomeAccounts = response.data;
                    context.state.incomeAccountsLoading = false;
                }).catch(e => {
                    context.state.incomeAccounts = [];
                    console.log(e);
                    context.state.incomeAccountsLoading = false;
                })
        },

        getExpenseAccounts(context) {
            if (context.state.expenseAccounts.length > 0) return
            context.state.expenseAccountsLoading = true;
            httmMethods.get(`${accountNav.menu.path}/accounttype/${context.state.expenseAccountType}`)
                .then(response => {
                    context.state.expenseAccounts = response.data;
                    context.state.expenseAccountsLoading = false;
                }).catch(e => {
                    context.state.expenseAccounts = [];
                    console.log(e);
                    context.state.expenseAccountsLoading = false;
                })
        },
    },
}

