import httmMethods from '../../utils/HttpMethods'
import constants from '../../utils/constants';
import lookupobjects from '../lookupobject/lookupobjects';
import lookupDataNav from './LookupDataNav'

export default {
    namespaced: true,
    state() {
      return {
        mini: [],
        businessCategories: [],
        businessCategoriesLoading: false,
        maritalStatuses: [],
        maritalStatusesLoading: false,
        occupations: [],
        occupationsLoading: false,
        idTypes: [],
        idTypesLoading: false,
        accountTypes: [],
        accountActions: [],
        accountReports: [],
        businessSections: [],
        businessSectionsLoading: false,
        priceGroups: [],
        businessGroups: [],
        vATBusinessGroups: [],
        vATItemGroups: [],
        unitMeasures: [],
        itemGroups: [],
        inventoryGroups: [],
        customerAccountsGroups: [],
        bankAccountsGroups: [],
        collateralCategories: [],
        collateralCategoriesLoading: false,

      }
    }, mutations: {

        mini(state, mini) {
            state.mini = mini;
        },

        businessCategories(state, businessCategories) {
            state.businessCategories = businessCategories;
        },

        businessCategoriesLoading(state, businessCategoriesLoading) {
            state.businessCategoriesLoading = businessCategoriesLoading;
        },

        maritalStatuses(state, maritalStatuses) {
            state.maritalStatuses = maritalStatuses;
        },

        maritalStatusesLoading(state, maritalStatusesLoading) {
            state.maritalStatusesLoading = maritalStatusesLoading;
        },

        occupations(state, occupations) {
            state.occupations = occupations;
        },

        occupationsLoading(state, occupationsLoading) {
            state.occupationsLoading = occupationsLoading;
        },

        idTypes(state, idTypes) {
            state.idTypes = idTypes;
        },

        idTypesLoading(state, idTypesLoading) {
            state.idTypesLoading = idTypesLoading;
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
        unitMeasures(state, unitMeasures) {
            state.unitMeasures = unitMeasures;
        },

        itemGroups(state, itemGroups) {
            state.itemGroups = itemGroups;
        },

        inventoryGroups(state, inventoryGroups) {
            state.inventoryGroups = inventoryGroups;
        },

        customerAccountsGroups(state, customerAccountsGroups) {
            state.customerAccountsGroups = customerAccountsGroups;
        },

        bankAccountsGroups(state, bankAccountsGroups) {
            state.bankAccountsGroups = bankAccountsGroups;
        },

        collateralCategories(state, collateralCategories) {
            state.collateralCategories = collateralCategories;
        },

        collateralCategoriesLoading(state, collateralCategoriesLoading) {
            state.collateralCategoriesLoading = collateralCategoriesLoading;
        },



    }, actions: {
        getMini(context) {
            if (context.mini) { return }
            httmMethods.get(constants.endPoints.lookupdata + "/mini")
                .then(response => {
                    context.commit("mini", response.data);
                }).catch(e => {
                    context.commit("mini", []);
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
            httmMethods.get("enums/" + constants.endPoints.accountActions)
                .then(response => {
                    context.commit("accountActions", response.data);
                }).catch(e => {
                    context.commit("accountActions", []);
                    console.log(e);
                })

        },

        getAccountReports(context) {
            if (context.accountReport) { return; }
            httmMethods.get("enums/" + constants.endPoints.accountReports)
                .then(response => {
                    context.commit("accountReports", response.data);
                }).catch(e => {
                    context.commit("accountReports", []);
                    console.log(e);
                })

        },

        getBusinessSections(context) {
            if (context.state.businessSections.length>0) { return; }
            context.state.businessSectionsLoading = true;
            httmMethods.get(`${constants.endPoints.lookupdata}/mini/${lookupobjects.BUSINESS_SECTIONS}`)
                .then(response => {
                    context.state.businessSections= response.data;
                    context.state.businessSectionsLoading = false;
                }).catch(e => {
                    context.state.businessSections= [];
                    console.log(e);
                    context.state.businessSectionsLoading = false;
                })

        },

        getPriceGroups(context) {
            if (context.priceGroups) { return; }
            httmMethods.get(`${constants.endPoints.lookupdata}/mini/${lookupobjects.PRICE_GROUP}`)
                .then(response => {
                    context.commit("priceGroups", response.data);
                }).catch(e => {
                    context.commit("priceGroups", []);
                    console.log(e);
                })

        },

        getBusinessGroups(context) {
            if (context.businessGroups) { return; }
            httmMethods.get(`${constants.endPoints.lookupdata}/mini/${lookupobjects.BUSINESS_GROUP}`)
                .then(response => {
                    context.commit("businessGroups", response.data);
                }).catch(e => {
                    context.commit("businessGroups", []);
                    console.log(e);
                })

        },

        getVATItemGroups(context) {
            if (context.vATItemGroups) { return; }
            httmMethods.get(`${constants.endPoints.lookupdata}/mini/${lookupobjects.VAT_ITEM_GROUP}`)
                .then(response => {
                    context.commit("vATItemGroups", response.data);
                }).catch(e => {
                    context.commit("vATItemGroups", []);
                    console.log(e);
                })

        },

        getVATBusinessGroups(context) {
            if (context.vATBusinessGroups) { return; }
            httmMethods.get(`${constants.endPoints.lookupdata}/mini/${lookupobjects.VAT_BUSINESS_GROUP}`)
                .then(response => {
                    context.commit("vATBusinessGroups", response.data);
                }).catch(e => {
                    context.commit("vATBusinessGroups", []);
                    console.log(e);
                })

        },

        getUnitMeasures(context) {
            if (context.unitMeasures) { return; }
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.UNIT_MEASURE}`)
                .then(response => {
                    context.commit("unitMeasures", response.data);
                }).catch(e => {
                    context.commit("unitMeasures", []);
                    console.log(e);
                })

        },

        getItemGroups(context) {
            if (context.itemGroups) { return; }
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.ITEM_GROUP}`)
                .then(response => {
                    context.commit("itemGroups", response.data);
                }).catch(e => {
                    context.commit("itemGroups", []);
                    console.log(e);
                })

        },

        getInventoryGroups(context) {
            if (context.inventoryGroups) { return; }
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.INVENTORY_GROUP}`)
                .then(response => {
                    context.commit("inventoryGroups", response.data);
                }).catch(e => {
                    context.commit("inventoryGroups", []);
                    console.log(e);
                })

        },

        getCustomerAccountsGroups(context) {
            if (context.customerAccountsGroups) { return; }
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.CUSTOMER_ACCOUNTS_CATEGORY}`)
                .then(response => {
                    context.commit("customerAccountsGroups", response.data);
                }).catch(e => {
                    context.commit("customerAccountsGroups", []);
                    console.log(e);
                })

        },


        getBankAccountsGroups(context) {
            if (context.bankAccountsGroups) { return; }
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.BANK_ACCOUNTS_GROUPS}`)
                .then(response => {
                    context.commit("bankAccountsGroups", response.data);
                }).catch(e => {
                    context.commit("bankAccountsGroups", []);
                    console.log(e);
                })

        },

        getBusinessCategories(context) {
            if (context.businessCategories) { return; }
            context.commit("businessCategoriesLoading", true);
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.BUSINESS_CATEGORY}`)
                .then(response => {
                    context.commit("businessCategories", response.data);
                    context.commit("businessCategoriesLoading", false);
                }).catch(e => {
                    context.commit("businessCategories", []);
                    context.commit("businessCategoriesLoading", false);
                    console.log(e);
                })

        },


        getMaritalStatuses(context) {
            if (context.maritalStatuses) { return; }
            context.commit("maritalStatusesLoading", true);
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.MARITAL_STATUS}`)
                .then(response => {
                    context.commit("maritalStatuses", response.data);
                    context.commit("maritalStatusesLoading", false);
                }).catch(e => {
                    context.commit("maritalStatuses", []);
                    context.commit("maritalStatusesLoading", false);
                    console.log(e);
                })

        },

        getOccupations(context) {
            if (context.occupations) { return; }
            context.commit("occupationsLoading", true);
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.OCCUPATION}`)
                .then(response => {
                    context.commit("occupations", response.data);
                    context.commit("occupationsLoading", false);
                }).catch(e => {
                    context.commit("occupations", []);
                    context.commit("occupationsLoading", false);
                    console.log(e);
                })

        },

        getIdTypes(context) {
            if (context.idTypes) { return; }
            context.commit("idTypesLoading", true);
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.ID_TYPE}`)
                .then(response => {
                    context.commit("idTypes", response.data);
                    context.commit("idTypesLoading", false);
                }).catch(e => {
                    context.commit("idTypes", []);
                    context.commit("idTypesLoading", false);
                    console.log(e);
                })

        },

        getCollateralCategories(context) {
            if (context.collateralCategories) { return; }
            context.commit("collateralCategoriesLoading", true);
            httmMethods.get(`${lookupDataNav.menu.path}/mini/${lookupobjects.COLLATERAL_CATEGORIES}`)
                .then(response => {
                    context.commit("collateralCategories", response.data);
                    context.commit("collateralCategoriesLoading", false);
                }).catch(e => {
                    context.commit("collateralCategories", []);
                    context.commit("collateralCategoriesLoading", false);
                    console.log(e);
                })

        },




    },
}
