import rootController from "@/root/RootController";
import receiptInvoiceModel from "./ReceiptInvoiceModel";
import { onMounted } from "vue";
import {defineReceiptStore} from "@/sales/receipt/ReceiptStore.js"
import {defineInvoiceStore} from "@/sales/invoice/InvoiceStore.js"
export default function receiptInvoiceController(){

  const controller = rootController(receiptInvoiceModel);
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

