import rootController from "@/root/RootController";
import creditorModel from "./CreditorModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js";
import { defineProfileStore } from "@/profile/profile/ProfileStore.js";
import accountNav from "@/accounting/account/AccountNav.js";
import { defineAccountStore } from "@/accounting/account/AccountStore.js";
import profileSelected from "@/root/compasables/ProfileSelected";
export default function creditorController() {
  const controller = rootController(creditorModel);
  const profileIdOk = (data) => {
    if (data) {
      controller.model.value.profileId = data.id;
    }
  };
  controller.profileIdOk = profileIdOk;
  const accountIdOk = (data) => {
    if (data) {
      controller.model.value.accountId = data.id;
      controller.model.value.accountName = data.accountName;
    }
  };
  controller.accountIdOk = accountIdOk;
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  controller.profileNav = profileNav;
  controller.accountNav = accountNav;
  onMounted(() => {
    profileStore.getMini();

    accountStore.getLiabilityAccounts();
  });
  const model = controller.model.value;
  profileSelected(model);
  return controller;
}
