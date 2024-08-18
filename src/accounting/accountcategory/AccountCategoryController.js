import rootController from "@/root/RootController";
import accountCategoryModel from "./AccountCategoryModel";
import { onMounted, watch } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineAccountCategoryStore } from "@/accounting/accountcategory/AccountCategoryStore.js";
export default function accountCategoryController() {
  const controller = rootController(accountCategoryModel);
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const accountCategoryStore = defineAccountCategoryStore();
  controller.accountCategoryStore = accountCategoryStore;
  onMounted(() => {
    lookupStore.getAccountTypes();

    // accountCategoryStore.getMini();
  });
  const model = controller.model;

  watch(()=>model.value.accountType, (value)=>{
    accountCategoryStore.getAccountCategoriesByAccountType(value)
  });

  return controller;
}
