import rootController from "@/root/RootController";
import creditorGroupModel from "./CreditorGroupModel";
import { onMounted } from "vue";
import { defineAccountStore } from "@/accounting/account/AccountStore.js";
export default function creditorGroupController() {
  const controller = rootController(creditorGroupModel);
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  onMounted(() => {
    accountStore.getLiabilityAccounts();
    accountStore.getContraLiabilityAccounts();
    accountStore.getIncomeAccounts();
  });
  return controller;
}
