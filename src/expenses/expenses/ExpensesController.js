import rootController from "@/root/RootController";
import expensesModel from "./ExpensesModel";
import { onMounted } from "vue";
import {defineExpensesStore} from "@/expenses/ExpensesStore.js"
import {defineBankAccountStore} from "@/banking/bankaccount/BankAccountStore.js"
import {defineCurrencyStore} from "@/expenses/currency/CurrencyStore.js"
import expenseDetailsNav from "@/expenses/expensedetails/ExpenseDetailsNav.js"
import expenseDetailsController from "@/expenses/expensedetails/ExpenseDetailsController.js"
import {defineExpenseDetailsStore} from "@/expenses/expensedetails/ExpenseDetailsStore.js"
export default function expensesController(){

  const controller = rootController(expensesModel);
const expensesStore = defineExpensesStore();
controller.expensesStore = expensesStore;
const bankAccountStore = defineBankAccountStore();
controller.bankAccountStore = bankAccountStore;
const currencyStore = defineCurrencyStore();
controller.currencyStore = currencyStore;
const expenseDetailsStore = defineExpenseDetailsStore();
controller.expenseDetailsStore = expenseDetailsStore;
const {setData: setExpenseDetailsData}=expenseDetailsController();
controller.setExpenseDetailsData=setExpenseDetailsData;
controller.expenseDetailsNav=expenseDetailsNav;
onMounted(()=>{
expensesStore.getBankAccountTypes();

bankAccountStore.getMini();

currencyStore.getMini();

expenseDetailsStore.getMini();


})
  return controller;

}

