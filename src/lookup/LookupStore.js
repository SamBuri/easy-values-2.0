import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineLookupStore = defineStore("lookupdata", {
 state: () => ({
    path: "enums/",
    documentTypes: [],
    documentTypesLoading: false,
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
    itemCategoryGroupsLoading: false,
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
  }),



  actions: {


     async getDocumentTypes() {

      const rootStore = defineRootStore();
       let data =await rootStore.fetch("enums/documenttypes",
       ()=>{
        this.documentTypesLoading =true
        this.documentTypes = [];

      },

       (res)=>this.documentTypes = res.data,

       ()=>this.documentTypesLoading = false)
       return data;

     },

     async getItemCategoryGroups() {

      const rootStore = defineRootStore();
       let data =await rootStore.fetch("enums/itemcategorygroups",
       ()=>{
        this.itemCategoryGroupsLoading =true
        this.itemCategoryGroups = [];

      },

       (res)=>this.itemCategoryGroups = res.data,

       ()=>this.itemCategoryGroupsLoading = false, false)
       console.log("ItemCategoryGroups", data)
       return data;

     },


  },
});
