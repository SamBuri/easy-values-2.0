import rootController from "@/root/RootController";
import shareholderModel from "./ShareholderModel";
import { onMounted, watch } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js"
import { defineProfileStore } from "@/profile/profile/ProfileStore.js"
import { defineAccountStore } from "@/accounting/account/AccountStore.js"
import profileSelected from "@/root/compasables/ProfileSelected";
export default function shareholderController() {

  const controller = rootController(shareholderModel);
  const idIdOk = (data) => {
    if (data) {

      controller.model.value.profileId = data.id;

    }
  };
  controller.profileId = idIdOk;
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  const accountStore = defineAccountStore();
  controller.accountStore = accountStore;
  controller.profileNav = profileNav;
  onMounted(() => {
    profileStore.getMini();

    accountStore.getEquityAccounts();


  })

  const model = controller.model.value;

  watch(()=>model.idId, (newValue)=>{
    model.id= newValue
    model.profileId = newValue;
  })

  profileSelected(model)
  return controller;

}

