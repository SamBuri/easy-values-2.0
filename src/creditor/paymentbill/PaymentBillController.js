import rootController from "@/root/RootController";
import paymentBillModel from "./PaymentBillModel";
import { onMounted } from "vue";
import {definePaymentStore} from "@/creditor/payment/PaymentStore.js"
import {defineBillStore} from "@/creditor/bill/BillStore.js"
export default function paymentBillController(){

  const controller = rootController(paymentBillModel);
const paymentStore = definePaymentStore();
controller.paymentStore = paymentStore;
const billStore = defineBillStore();
controller.billStore = billStore;
onMounted(()=>{
paymentStore.getMini();

billStore.getMini();


})
  return controller;

}

