import httmMethods from '../utils/HttpMethods'
import constants from '../utils/constants'
import lookupdata from './lookupdata/lookupdata';
import lookupobject from './lookupobject/lookupobject';
import measuregroup from './measuregroup/measuregroup.js'
import itemcategory from './itemcategory/itemcategory.js'
import item from './item/item.js'
import currency from './currency/currency.js'

export default {
    namespaced: true, state: {
        path: "enums/",
        documentTypes: [],
        entryModes: [],
        journalTypes: [],
        accountTypes: [],
        accountActions: [],
        accountReports: [],
        customerTypes: [],
        priceGroups: [],
        businessGroups: [],
        vATBusinessGroups: [],
        vATItemGroups: [],
        accountGroups: [],
        unitMeasureUsages: [],
        itemCategoryGroups: [],
        invoiceTypes: [],
        bankAccountTypes: [],
        genders: [],
        gendersLoading: false,
        workTypes: [],
        workTypesLoading: false,
        requestStatuses: [],
        requestStatusesLoading: false,
        openStatuses: [],
        openStatusesLoading: false,


    }, mutations: {

        documentTypes(state, documentTypes) {
            state.documentTypes = documentTypes;
        },
        entryModes(state, entryModes) {
            state.entryModes = entryModes;
        },
        journalTypes(state, journalTypes) {
            state.journalTypes = journalTypes;
        },

        accountTypes(state, accountTypes) {
            state.accountTypes = accountTypes;
        },
        accountActions(state, accountActions) {
            state.accountActions = accountActions;
        },
        accountReports(state, accountReports) {
            state.accountReports = accountReports;
        },
        customerTypes(state, customerTypes) {
            state.customerTypes = customerTypes;
        },
        priceGroups(state, priceGroups) {
            state.priceGroups = priceGroups;
        },

        businessGroups(state, businessGroups) {
            state.businessGroups = businessGroups;
        },

        vATBusinessGroups(state, vATBusinessGroups) {
            state.vATBusinessGroups = vATBusinessGroups;
        },

        vATItemGroups(state, vATItemGroups) {
            state.vATItemGroups = vATItemGroups;
        },

        accountGroups(state, accountGroups) {
            state.accountGroups = accountGroups;
        },

        unitMeasureUsages(state, unitMeasureUsages) {
            state.unitMeasureUsages = unitMeasureUsages;
        },
        itemCategoryGroups(state, itemCategoryGroups) {
            state.itemCategoryGroups = itemCategoryGroups;
        },

        invoiceTypes(state, invoiceTypes) {
            state.invoiceTypes = invoiceTypes;
        },


        genders(state, genders) {
            state.genders = genders;
        },

        gendersLoading(state, gendersLoading) {
            state.gendersLoading = gendersLoading;
        },

        workTypes(state, workTypes) {
            state.workTypes = workTypes;
        },

        workTypesLoading(state, workTypesLoading) {
            state.workTypesLoading = workTypesLoading;
        },

        requestStatuses(state, requestStatuses) {
            state.requestStatuses = requestStatuses;
        },

        requestStatusesLoading(state, requestStatusesLoading) {
            state.requestStatusesLoading = requestStatusesLoading;
        },

        openStatuses(state, openStatuses) {
            state.openStatuses = openStatuses;
        },

        openStatusesLoading(state, openStatusesLoading) {
            state.openStatusesLoading = openStatusesLoading;
        },





    }, actions: {

        getDocumentTypes(context) {
            if (context.documentTypes) { return }
            httmMethods.get("enums/documenttypes")
                .then(response => {
                    context.commit("documentTypes", response.data);
                }).catch(e => {
                    context.commit("documentTypes", []);
                    console.log(e);
                })

        },

        getEntryModes(context) {
            if (context.entryModes) { return }
            httmMethods.get("enums/entrymodes")
                .then(response => {
                    context.commit("entryModes", response.data);
                }).catch(e => {
                    context.commit("entryModes", []);
                    console.log(e);
                })

        },

        getJournalTypes(context) {
            if (context.journalTypes) { return }
            httmMethods.get("enums/journaltypes")
                .then(response => {
                    context.commit("journalTypes", response.data);
                }).catch(e => {
                    context.commit("journalTypes", []);
                    console.log(e);
                })

        },

        getAccountTypes(context) {
            if (context.accountTypes) { return }
            httmMethods.get("enums/" + constants.endPoints.accountTypes)
                .then(response => {
                    context.commit("accountTypes", response.data);
                }).catch(e => {
                    context.commit("accountTypes", []);
                    console.log(e);
                })

        },

        getAccountActions(context) {
            if (context.accountActions) { return; }
            httmMethods.get("enums/accountactions")
                .then(response => {
                    context.commit("accountActions", response.data);
                }).catch(e => {
                    context.commit("accountActions", []);
                    console.log(e);
                })

        },

        getAccountReports(context) {
            if (context.accountReport) { return; }
            httmMethods.get("enums/accountreports")
                .then(response => {
                    context.commit("accountReports", response.data);
                }).catch(e => {
                    context.commit("accountReports", []);
                    console.log(e);
                })

        },

        getAccountGroups(context) {
            if (context.accountGroups) { return; }
            httmMethods.get("enums/accountgroups")
                .then(response => {
                    context.commit("accountGroups", response.data);
                }).catch(e => {
                    context.commit("accountGroups", []);
                    console.log(e);
                })

        },

        getUnitMeasureUsages(context) {
            if (context.accountGroups) { return; }
            httmMethods.get("enums/unitmeasureusages")
                .then(response => {
                    context.commit("unitMeasureUsages", response.data);
                }).catch(e => {
                    context.commit("unitMeasureUsages", []);
                    console.log(e);
                })

        },

        getItemCategoryGroups(context) {
            if (context.itemCategoryGroups) { return; }
            httmMethods.get("enums/itemcategorygroups")
                .then(response => {
                    context.commit("itemCategoryGroups", response.data);
                }).catch(e => {
                    context.commit("itemCategoryGroups", []);
                    console.log(e);
                })

        },

        getInvoiceTypes(context) {
            if (context.invoiceTypes) { return; }
            httmMethods.get("enums/invoicetypes")
                .then(response => {
                    context.commit("invoiceTypes", response.data);
                }).catch(e => {
                    context.commit("invoiceTypes", []);
                    console.log(e);
                })

        },

      

        getGenders(context) {
            if (context.genders) { return; }
            context.commit("gendersLoading", true);
            httmMethods.get(`${context.state.path}gender`)
                .then(response => {
                    context.commit("genders", response.data);
                    context.commit("gendersLoading", false);
                }).catch(e => {
                    context.commit("genders", []);
                    context.commit("gendersLoading", false);
                    console.log(e);
                })

        },

        getWorkTypes(context) {
            if (context.requestStatuses) { return; }
            context.commit("workTypesLoading", true);
            httmMethods.get(`${context.state.path}worktypes`)
                .then(response => {
                    context.commit("workTypes", response.data);
                    context.commit("workTypesLoading", false);
                }).catch(e => {
                    context.commit("workTypes", []);
                    context.commit("workTypesLoading", false);
                    console.log(e);
                })

        },

        getRequestStatuses(context) {
            if (context.requestStatuses) { return; }
            context.commit("requestStatusesLoading", true);
            httmMethods.get(`${context.state.path}requeststatuses`)
                .then(response => {
                    context.commit("requestStatuses", response.data);
                    context.commit("requestStatusesLoading", false);
                }).catch(e => {
                    context.commit("requestStatuses", []);
                    context.commit("requestStatusesLoading", false);
                    console.log(e);
                })

        },

        getOpenStatuses(context) {
            if (context.openStatuses) { return; }
            context.commit("openStatusesLoading", true);
            httmMethods.get(`${context.state.path}openstatuses`)
                .then(response => {
                    context.commit("openStatuses", response.data);
                    context.commit("openStatusesLoading", false);
                }).catch(e => {
                    context.commit("openStatuses", []);
                    context.commit("openStatusesLoading", false);
                    console.log(e);
                })

        },





    },
    modules: { lookupobject, lookupdata, measuregroup, item, itemcategory, currency }
}
