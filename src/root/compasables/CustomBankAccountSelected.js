import { watch } from "vue";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
export default function customBankAccountSelected(prop, callBack) {
  const bankAccountStore = defineBankAccountStore();

  watch(prop, async (newValue) => {
    let bankAccount = await bankAccountStore.getMiniBankAccount(newValue);
    callBack(bankAccount);
  });
}
