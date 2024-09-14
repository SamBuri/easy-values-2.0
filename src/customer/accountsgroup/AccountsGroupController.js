import rootController from "@/root/RootController";
import accountsGroupModel from "./AccountsGroupModel";
import { onMounted } from "vue";
import {defineLookupDataStore} from "@/lookup/lookupdata/LookupDataStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function accountsGroupController(){

  const controller = rootController(accountsGroupModel);
const lookupDataStore = defineLookupDataStore();
controller.lookupDataStore = lookupDataStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
lookupDataStore.getBusinessSections();

accountStore.getAssetAccounts();
accountStore.getExpenseAccounts();


})
  return controller;

}

