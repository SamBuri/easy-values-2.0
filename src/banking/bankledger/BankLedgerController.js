import rootController from "@/root/RootController";
import bankLedgerModel from "./BankLedgerModel";
import { onMounted } from "vue";
import {defineLookupStore} from "@/lookup/LookupStore.js"
export default function bankLedgerController(){

  const controller = rootController(bankLedgerModel);
const lookupStore = defineLookupStore();
controller.lookupStore = lookupStore;
onMounted(()=>{
lookupStore.getDocumentTypes();


})
  return controller;

}

