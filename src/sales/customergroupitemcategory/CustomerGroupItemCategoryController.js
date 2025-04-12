import rootController from "@/root/RootController";
import customerGroupItemCategoryModel from "./CustomerGroupItemCategoryModel";
import { onMounted } from "vue";
import {defineCustomerGroupStore} from "@/sales/customergroup/CustomerGroupStore.js"
import {defineItemCategoryStore} from "@/lookup/itemcategory/ItemCategoryStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function customerGroupItemCategoryController(){

  const controller = rootController(customerGroupItemCategoryModel);
const customerGroupStore = defineCustomerGroupStore();
controller.customerGroupStore = customerGroupStore;
const itemCategoryStore = defineItemCategoryStore();
controller.itemCategoryStore = itemCategoryStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
onMounted(()=>{
customerGroupStore.getMini();

itemCategoryStore.getMini();

accountStore.getIncomeAccounts();
accountStore.getExpenseAccounts();


})
  return controller;

}

