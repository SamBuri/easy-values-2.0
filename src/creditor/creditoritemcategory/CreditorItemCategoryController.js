import rootController from "@/root/RootController";
import creditorItemCategoryModel from "./CreditorItemCategoryModel";
import { onMounted } from "vue";
import { defineCreditorGroupStore } from "@/creditor/creditorgroup/CreditorGroupStore.js";
import { defineItemCategoryStore } from "@/lookup/itemcategory/ItemCategoryStore.js";
import { defineAccountStore } from "@/accounting/account/AccountStore.js";
export default function creditorItemCategoryController() {
  const controller = rootController(creditorItemCategoryModel);
  const creditorGroupStore = defineCreditorGroupStore();
  controller.creditorGroupStore = creditorGroupStore;
  const itemCategoryStore = defineItemCategoryStore();
  controller.itemCategoryStore = itemCategoryStore;
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  onMounted(() => {
    creditorGroupStore.getMini();

    itemCategoryStore.getExpensableItemCategories();

    accountStore.getExpenseAccounts();
  });
  return controller;
}
