import rootController from "@/root/RootController";
import creditorModel from "./CreditorModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js";
import { defineProfileStore } from "@/profile/profile/ProfileStore.js";
import { defineCreditorGroupStore } from "@/creditor/creditorgroup/CreditorGroupStore.js";
import profileSelected from "@/root/compasables/ProfileSelected";
export default function creditorController() {
  const controller = rootController(creditorModel);
  const profileIdOk = (data) => {
    if (data) {
      controller.model.value.profileId = data.id;
    }
  };
  controller.profileIdOk = profileIdOk;
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  const creditorGroupStore = defineCreditorGroupStore();
  controller.creditorGroupStore = creditorGroupStore;
  controller.profileNav = profileNav;
  onMounted(() => {
    profileStore.getMini();

    creditorGroupStore.getMini();
  });

  const model = controller.model.value;
  profileSelected(model);
  return controller;
}
