import rootController from "@/root/RootController";
import customerGroupModel from "./CustomerGroupModel";
import { onMounted } from "vue";
import { defineAccountStore } from "@/accounting/account/AccountStore.js"
export default function customerGroupController() {

  const controller = rootController(customerGroupModel);
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  onMounted(() => {
    accountStore.getMini();
    accountStore.getAssetAccounts();
    accountStore.getExpenseAccounts();
    accountStore.getLiabilityAccounts();


  })
  return controller;

}

