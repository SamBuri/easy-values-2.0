import rootController from "@/root/RootController";
import bankTransactionModel from "./BankTransactionModel";
import { onMounted, watch } from "vue";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import bankAccountSelected from "@/root/compasables/BankAccountSelected";
export default function bankTransactionController() {

  const controller = rootController(bankTransactionModel);
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  const currencyStore = defineCurrencyStore();
  controller.currencyStore = currencyStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;

  onMounted(() => {
    bankAccountStore.getMini();

    currencyStore.getMini();

    lookupStore.getAccountActions();
  });

  bankAccountSelected(controller.model.value)
  // watch(
  //   () => model.value.bankAccountId,
  //   async (newValue) => {

  //     let bankAccount = await bankAccountStore.getMiniBankAccount(newValue);

  //     if (bankAccount) {
  //       model.value.balance = bankAccount.balance;
  //       model.value.bankAccountType = bankAccount.bankAccountType;
  //       model.value.currency = bankAccount.currency;
  //     } else {
  //       model.value.balance = 0;
  //       model.value.bankAccountType = "";
  //       model.value.currency = "";
  //     }
  //   }
  // );
  return controller;
}
