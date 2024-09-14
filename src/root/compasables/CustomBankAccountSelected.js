import { watch } from "vue";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
export default function customBankAccountSelected(prop, model, callBack) {
  const bankAccountStore = defineBankAccountStore();

  const defaultFunction=(bankAccount)=>{
    if (bankAccount) {
      model.balance = bankAccount.balance;
      model.bankAccountType = bankAccount.bankAccountType;
      model.currency = bankAccount.currency;
      model.currencyId = bankAccount.currencyId;
    } else {
      model.balance = 0;
      model.bankAccountType = "";
      model.currency = "";
      model.currencyId ="";
    }
  }
  watch(prop, async (newValue) => {
    let bankAccount = await bankAccountStore.getMiniBankAccount(newValue);
    if(callBack) callBack(bankAccount);
    else defaultFunction(bankAccount);
  });
}
