import rootController from "@/root/RootController";
import paymentModel from "./PaymentModel";
import { onMounted } from "vue";
import {defineCreditorStore} from "@/creditor/creditor/CreditorStore.js"
import {defineBankAccountStore} from "@/banking/bankaccount/BankAccountStore.js"
import paymentBillNav from "@/creditor/paymentbill/PaymentBillNav.js"
import paymentBillController from "@/creditor/paymentbill/PaymentBillController.js"
import {definePaymentBillStore} from "@/creditor/paymentbill/PaymentBillStore.js"
export default function paymentController(){

  const controller = rootController(paymentModel);
const creditorStore = defineCreditorStore();
controller.creditorStore = creditorStore;
const bankAccountStore = defineBankAccountStore();
controller.bankAccountStore = bankAccountStore;
const paymentBillStore = definePaymentBillStore();
controller.paymentBillStore = paymentBillStore;
const {setData: setPaymentBillData}=paymentBillController();
controller.setPaymentBillData=setPaymentBillData;
controller.paymentBillNav=paymentBillNav;
onMounted(()=>{
creditorStore.getMini();

bankAccountStore.getMini();

paymentBillStore.getMini();


})
  return controller;

}

