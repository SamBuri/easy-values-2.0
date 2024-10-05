import rootController from "@/root/RootController";
import creditorModel from "./CreditorModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js"
import {defineProfileStore} from "@/profile/profile/ProfileStore.js"
import {defineCreditorAccountGroupStore} from "@/creditor/creditoraccountgroup/CreditorAccountGroupStore.js"
export default function creditorController(){

  const controller = rootController(creditorModel);
const idIdOk = (data) => {
    if (data) {

      controller.model.value.id= data.id;
      controller.model.value.name= data.display;
      controller.model.value.phone= data.primaryPhoneNo;

    }
  };
controller.idIdOk = idIdOk;
const profileStore = defineProfileStore();
controller.profileStore = profileStore;
const creditorAccountGroupStore = defineCreditorAccountGroupStore();
controller.creditorAccountGroupStore = creditorAccountGroupStore;
controller.profileNav=profileNav;
onMounted(()=>{
profileStore.getMini();

creditorAccountGroupStore.getMini();


})
  return controller;

}

