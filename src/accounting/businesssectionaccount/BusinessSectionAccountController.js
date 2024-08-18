import rootController from "@/root/RootController";
import businessSectionAccountModel from "./BusinessSectionAccountModel";
import { onMounted } from "vue";
import {defineLookupDataStore} from "@/lookup/lookupdata/LookupDataStore.js"
import {defineItemCategoryStore} from "@/lookup/itemcategory/ItemCategoryStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function businessSectionAccountController(){

  const controller = rootController(businessSectionAccountModel);
const lookupDataStore = defineLookupDataStore();
controller.lookupDataStore = lookupDataStore;
const itemCategoryStore = defineItemCategoryStore();
controller.itemCategoryStore = itemCategoryStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
lookupDataStore.getBusinessSections();

itemCategoryStore.getMini();

accountStore.getIncomeAccounts();
accountStore.getExpenseAccounts();


})
  return controller;

}

