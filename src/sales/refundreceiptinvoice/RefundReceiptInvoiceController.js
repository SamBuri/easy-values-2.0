import rootController from "@/root/RootController";
import refundReceiptInvoiceModel from "./RefundReceiptInvoiceModel";
import { onMounted } from "vue";
import {defineRefundStore} from "@/sales/refund/RefundStore.js"
import {defineReceiptInvoicesStore} from "@/sales/receiptinvoices/ReceiptInvoicesStore.js"
export default function refundReceiptInvoiceController(){

  const controller = rootController(refundReceiptInvoiceModel);
const refundStore = defineRefundStore();
controller.refundStore = refundStore;
const receiptInvoicesStore = defineReceiptInvoicesStore();
controller.receiptInvoicesStore = receiptInvoicesStore;
onMounted(()=>{
refundStore.getMini();

receiptInvoicesStore.getMini();


})
  return controller;

}

