import rootController from "@/root/RootController";
import accountCategoryModel from "./AccountCategoryModel";
import { onMounted, watch } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineAccountCategoryStore } from "@/accounting/accountcategory/AccountCategoryStore.js";
import { defineAccountingStore } from "../AccountingStore";
export default function accountCategoryController() {
  const controller = rootController(accountCategoryModel);
  const accountingStore = defineAccountingStore();
  controller.accountingStore = accountingStore;
  const lookupStore = defineLookupStore()
  controller.lookupStore = lookupStore;
  const accountCategoryStore = defineAccountCategoryStore();
  controller.accountCategoryStore = accountCategoryStore;
  onMounted(() => {
    accountingStore.getAccountTypes();

    // accountCategoryStore.getMini();
  });
  const model = controller.model;

  watch(()=>model.value.accountType, (value)=>{
    accountCategoryStore.getAccountCategoriesByAccountType(value)
  });

  return controller;
}
