import rootController from "@/root/RootController";
import expenseModel from "./ExpenseModel";
import { onMounted } from "vue";
import {defineBankingStore} from "@/banking/BankingStore.js"
import {defineBankAccountStore} from "@/banking/bankaccount/BankAccountStore.js"
import {defineCurrencyStore} from "@/lookup/currency/CurrencyStore.js"
import expenseDetailNav from "@/expenses/expensedetail/ExpenseDetailNav.js"
import currencySelected from "@/root/compasables/CurrencySelected";
import bankAccountSelected from "@/root/compasables/BankAccountSelected";

import defineListAmountCalOnAmount from "@/root/compasables/ListAmountCalcOnAmountFunc";

export default function expenseController(){

  const controller = rootController(expenseModel);
const bankingStore = defineBankingStore();
controller.bankingStore = bankingStore;
const bankAccountStore = defineBankAccountStore();
controller.bankAccountStore = bankAccountStore;
const currencyStore = defineCurrencyStore();
controller.currencyStore = currencyStore;
controller.expenseDetailNav=expenseDetailNav;
onMounted(()=>{
bankingStore.getBankAccountTypes();

bankAccountStore.getMini();

})


const model =  controller.model.value;

const expenseDetailsChanged = (items)=>defineListAmountCalOnAmount(model, items);
controller.expenseDetailsChanged =  expenseDetailsChanged
currencySelected(model);
bankAccountSelected(model);
  return controller;

}

