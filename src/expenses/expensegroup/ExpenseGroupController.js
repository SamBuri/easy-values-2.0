import rootController from "@/root/RootController";
import expenseGroupModel from "./ExpenseGroupModel";
import { onMounted } from "vue";
import {defineItemCategoryStore} from "@/lookup/itemcategory/ItemCategoryStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function expenseGroupController(){

  const controller = rootController(expenseGroupModel);
const itemCategoryStore = defineItemCategoryStore();
controller.itemCategoryStore = itemCategoryStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
itemCategoryStore.getExpensableItemCategories();

accountStore.getExpenseAccounts();


})
  return controller;

}

