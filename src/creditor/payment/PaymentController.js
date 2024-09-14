import rootController from "@/root/RootController";
import paymentModel from "./PaymentModel";
import { onMounted } from "vue";
import creditorNav from "@/creditor/creditor/CreditorNav.js";
import { defineCreditorStore } from "@/creditor/creditor/CreditorStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore.js";
import paymentBillNav from "@/creditor/paymentbill/PaymentBillNav.js";
import paymentBillController from "@/creditor/paymentbill/PaymentBillController.js";
import { definePaymentBillStore } from "@/creditor/paymentbill/PaymentBillStore.js";
import bankAccountSelected from "@/root/compasables/BankAccountSelected";
import currencySelected from "@/root/compasables/CurrencySelected";
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
  const currencyStore = defineCurrencyStore();
  controller.currencyStore = currencyStore;
  const paymentBillStore = definePaymentBillStore();
  controller.paymentBillStore = paymentBillStore;
  const { setData: setPaymentBillData } = paymentBillController();
  controller.setPaymentBillData = setPaymentBillData;
  controller.creditorNav = creditorNav;
  controller.paymentBillNav = paymentBillNav;
  onMounted(() => {
    creditorStore.getMini();

    bankAccountStore.getMini();

    currencyStore.getMini();

    paymentBillStore.getMini();
  });
  const model = controller.model.value;
  bankAccountSelected(model);
  currencySelected(model);
  return controller;
}
