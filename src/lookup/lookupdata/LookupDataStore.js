import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import lookupobjects from '../lookupobject/lookupobjects';
import lookupDataNav from "./LookupDataNav";
import { defineRootStore } from "@/root/RootStore";
export const defineLookupDataStore = defineStore("lookupdata", {
  state: () => ({
    path: lookupDataNav.menu.path,
    mini: [],
    miniLoading: false,
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
    priceGroupsLoading: false,
    businessGroups: [],
    vATBusinessGroups: [],
    vATItemGroups: [],
    unitMeasures: [],
    unitMeasureUsages: [],
    unitMeasureUsagesLoading: false,
    itemGroups: [],
    inventoryGroups: [],
    customerAccountsGroups: [],
    bankAccountsGroups: [],
    collateralCategories: [],
    collateralCategoriesLoading: false,
  }),

  actions: {


     getMini() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini`,
       ()=>{
        this.miniLoading =true
        this.mini = [];

      },

       (res)=>this.mini = res.data,

       ()=>this.miniLoading = false)
       return data;

     },



     getBusinessCategories() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.BUSINESS_CATEGORY}`,
       ()=>{
        this.businessCategoriesLoading =true
        this.businessCategories = [];
      },

       (res)=>this.businessCategories = res.data,

       ()=>this.businessCategoriesLoading = false)
       return data;

     },

     getMaritalStatuses() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.MARITAL_STATUS}`,
       ()=>{
        this.maritalStatusesLoading=true
        this.maritalStatuses = [];
      },

       (res)=>this.maritalStatuses = res.data,

       ()=>this.maritalStatusesLoading = false)
       return data;

     },

     getOccupations() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.OCCUPATION}`,
       ()=>{
        this.occupationsLoading=true
        this.occupations = [];
      },

       (res)=>this.occupations = res.data,

       ()=>this.occupationsLoading = false)
       return data;

     },

     getIdTypes() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.ID_TYPE}`,
       ()=>{
        this.idTypesLoading=true
        this.idTypes = [];
      },

       (res)=>this.idTypes = res.data,

       ()=>this.idTypesLoading = false)
       return data;

     },

     getBusinessSections() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.BUSINESS_SECTIONS}`,
       ()=>{
        this.businessSectionsLoading=true
        this.businessSections = [];
      },

       (res)=>this.businessSections = res.data,

       ()=>this.businessSectionsLoading = false)
       return data;

     },

     getPriceGroups() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.PRICE_GROUP}`,
       ()=>{
        this.priceGroupsLoading=true
        this.priceGroups = [];
      },

       (res)=>this.priceGroups = res.data,

       ()=>this.priceGroupsLoading = false)
       return data;

     },

     getCollateralCategories() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/${lookupobjects.COLLATERAL_CATEGORIES}`,
       ()=>{
        this.collateralCategoriesLoading=true
        this.collateralCategories = [];
      },

       (res)=>this.collateralCategories = res.data,

       ()=>this.collateralCategoriesLoading = false)
       return data;

     },



  },
});
