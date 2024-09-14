import rootController from "@/root/RootController";
import creditorAccountGroupModel from "./CreditorAccountGroupModel";
import { onMounted } from "vue";
import {defineLookupDataStore} from "@/lookup/lookupdata/LookupDataStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function creditorAccountGroupController(){

  const controller = rootController(creditorAccountGroupModel);
const lookupDataStore = defineLookupDataStore();
controller.lookupDataStore = lookupDataStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
lookupDataStore.getBusinessSections();

accountStore.getLiabilityAccounts();
accountStore.getAssetAccounts();


})
  return controller;

}

