import rootController from "@/root/RootController";
import bankTransferModel from "./BankTransferModel";
import { onMounted, watch } from "vue";
import { defineBankingStore } from "@/banking/BankingStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import customBankAccountSelected from "@/root/compasables/CustomBankAccountSelected";
import customCurrencySelected from "@/root/compasables/CustomCurrencySelected";
import funcs from "@/utils/funcs";
export default function bankTransferController() {
  const controller = rootController(bankTransferModel);
  const bankingStore = defineBankingStore();
  controller.bankingStore = bankingStore;
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  const currencyStore = defineCurrencyStore();
  controller.currencyStore = currencyStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  onMounted(() => {
    bankingStore.getBankAccountTypes();

    bankAccountStore.getMini();
  });

  const model = controller.model.value;
  customBankAccountSelected(
    () => model.fromAccountId,
    model,
    (bankAccount) => {
      if (bankAccount) {
        model.fromCurrency = bankAccount.currency;
        model.fromCurrencyId = bankAccount.currencyId;
        model.currencyId = bankAccount.currencyId;
        model.fromAccountType = bankAccount.bankAccountType;
        model.fromBalance = bankAccount.balance;
      } else {
        model.fromCurrency = "";
        model.toCurrencyId = "";
        model.fromAccountType = "";
        model.fromBalance = "";
        model.currencyId = "";
      }
    }
  );

  customBankAccountSelected(
    () => model.toAccountId,
    model,
    (bankAccount) => {
      if (bankAccount) {
        model.toCurrency = bankAccount.currency;
        model.toCurrencyId = bankAccount.currencyId;
        model.toAccountType = bankAccount.bankAccountType;
        model.toBalance = bankAccount.balance;
      } else {
        model.toCurrency = "";
        model.toCurrencyId = "";
        model.toAccountType = "";
        model.toBalance = "";
      }
    }
  );

  customCurrencySelected(() => model.fromCurrencyId, model);
  watch(
    () => model.amountTendered,
    (newValue) => funcs.calculateAmount(model)
  );
  return controller;
}
