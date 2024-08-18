import rootController from "@/root/RootController";
import receiptInvoicesModel from "./ReceiptInvoicesModel";
import { onMounted } from "vue";
import {defineReceiptStore} from "@/sales/receipt/ReceiptStore.js"
import {defineInvoiceStore} from "@/sales/invoice/InvoiceStore.js"
export default function receiptInvoicesController(){

  const controller = rootController(receiptInvoicesModel);
const receiptStore = defineReceiptStore();
controller.receiptStore = receiptStore;
const invoiceStore = defineInvoiceStore();
controller.invoiceStore = invoiceStore;
onMounted(()=>{
receiptStore.getMini();

invoiceStore.getMini();


})
  return controller;

}

