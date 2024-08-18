import rootController from "@/root/RootController";
import invoiceDetailModel from "./InvoiceDetailModel";
import { onMounted } from "vue";
import {defineInvoiceStore} from "@/sales/invoice/InvoiceStore.js"
import {defineItemStore} from "@/lookup/item/ItemStore.js"
export default function invoiceDetailController(){

  const controller = rootController(invoiceDetailModel);
const invoiceStore = defineInvoiceStore();
controller.invoiceStore = invoiceStore;
const itemStore = defineItemStore();
controller.itemStore = itemStore;
onMounted(()=>{
invoiceStore.getMini();

itemStore.getMini();


})
  return controller;

}

