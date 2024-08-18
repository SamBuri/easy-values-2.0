import rootController from "@/root/RootController";
import bankAccountModel from "./BankAccountModel";
import { onMounted } from "vue";
import {defineBankingStore} from "@/banking/BankingStore.js"
import {defineCurrencyStore} from "@/lookup/currency/CurrencyStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function bankAccountController(){

  const controller = rootController(bankAccountModel);
const bankingStore = defineBankingStore();
controller.bankingStore = bankingStore;
const currencyStore = defineCurrencyStore();
controller.currencyStore = currencyStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
bankingStore.getBankAccountTypes();

currencyStore.getMini();

accountStore.getAssetAccounts();
accountStore.getExpenseAccounts();


})
  return controller;

}

