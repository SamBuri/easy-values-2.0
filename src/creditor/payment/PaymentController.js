import rootController from "@/root/RootController";
import paymentModel from "./PaymentModel";
import { onMounted, watch, computed } from "vue";
import creditorNav from "@/creditor/creditor/CreditorNav.js";
import { defineCreditorStore } from "@/creditor/creditor/CreditorStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import paymentBillNav from "@/creditor/paymentbill/PaymentBillNav.js";
// import paymentBillController from "@/creditor/paymentbill/PaymentBillController.js";
// import { definePaymentBillStore } from "@/creditor/paymentbill/PaymentBillStore.js";
import { defineBillStore } from "../bill/BillStore";
import billNav from "../bill/BillNav";
import bankAccountSelected from "@/root/compasables/BankAccountSelected";
import currencySelected from "@/root/compasables/CurrencySelected";
import funcs from "@/utils/funcs";
export default function paymentController() {
  const controller = rootController(paymentModel);
  const creditorIdOk = (data) => {
    if (data) {
      controller.model.value.creditorId = data.id;
      controller.model.value.name = data.name;
    }
  };
  controller.creditorIdOk = creditorIdOk;
  const creditorStore = defineCreditorStore();
  controller.creditorStore = creditorStore;
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  // const paymentBillStore = definePaymentBillStore();
  // controller.paymentBillStore = paymentBillStore;
  // const { setData: setPaymentBillData } = paymentBillController();
  // controller.setPaymentBillData = setPaymentBillData;
  controller.paymentBillNav = paymentBillNav;
  controller.creditorNav = creditorNav;
  controller.billNav = billNav;

  onMounted(() => {
    creditorStore.getMini();

    bankAccountStore.getMini();

    // paymentBillStore.getMini();
  });

  const billStore = defineBillStore();
  const model = controller.model.value;
  watch(
    () => model.creditorId,
    async (newValue) => {
      let bills = await billStore.getDue(newValue);
      model.paymentBills = bills;
      let sum = funcs.sum(bills, 'amountDue');
      model.amountDue = sum;

    }
  );

  const setAmount = ()=>{
    let baseAmount = model.baseAmount||0;
    let exchangeRate =  model.exchangeRate||0;

   let amount = Number(baseAmount* exchangeRate);
   model.amount= amount;
   model.amountWords = funcs.toWords(amount)
  }

  bankAccountSelected(model)
  currencySelected(model);
  watch([()=>model.baseAmount,()=>model.exchangeRate], ([neBa, newEr])=>  setAmount());

  // const totalAmountPaid = computed(()=>(model.amount||0)+(model.discount||0)+(model.withholdingTax||0));

  watch([()=>model.amount, ()=>model.discount, ()=>model.withholdingTax], ([newAmount,newDisc, newWht])=>{
   let totalAmountPaid = (newAmount||0)+(newDisc||0)+(newWht||0);
     model.amountPaid = totalAmountPaid;
  });

  const calculateReceiptInvoiceAmount=() =>{

    //if (controller.rootState.buttonText === constants.buttonTexts.save) {

      let amoutPaid = model.amountPaid;
      for (let receiptInvoice of model.paymentBills) {
        let invoiceAmount = receiptInvoice.invoiceAmount;
        let toPayAmount = 0;

        if (invoiceAmount >= amoutPaid) {
          toPayAmount = amoutPaid;
          amoutPaid = 0;
        } else {
          toPayAmount = invoiceAmount;
          amoutPaid -= invoiceAmount;
        }

        receiptInvoice.toPayAmount = toPayAmount;

     // }
    }
  };


  return controller;
}
