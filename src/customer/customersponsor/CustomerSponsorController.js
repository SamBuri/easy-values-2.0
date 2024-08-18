import rootController from "@/root/RootController";
import customerSponsorModel from "./CustomerSponsorModel";
import { onMounted } from "vue";
import {defineCustomerStore} from "@/customer/customer/CustomerStore.js"
export default function customerSponsorController(){

  const controller = rootController(customerSponsorModel);
const customerStore = defineCustomerStore();
controller.customerStore = customerStore;
onMounted(()=>{
customerStore.getMini();


})
  return controller;

}

