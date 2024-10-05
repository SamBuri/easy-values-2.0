import rootController from "@/root/RootController";
import shareholderModel from "./ShareholderModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js"
import {defineProfileStore} from "@/profile/profile/ProfileStore.js"
import {defineAccountStore} from "@/accounting/account/AccountStore.js"
export default function shareholderController(){

  const controller = rootController(shareholderModel);
const idIdOk = (data) => {
    if (data) {

      controller.model.value.idId= data.id;

    }
  };
controller.idIdOk = idIdOk;
const profileStore = defineProfileStore();
controller.profileStore = profileStore;
const accountStore = defineAccountStore();
controller.accountStore = accountStore;
controller.profileNav=profileNav;
onMounted(()=>{
profileStore.getMini();

accountStore.getEquityAccounts();


})
  return controller;

}

