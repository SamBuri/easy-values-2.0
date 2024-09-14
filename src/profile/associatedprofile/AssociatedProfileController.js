import rootController from "@/root/RootController";
import associatedProfileModel from "./AssociatedProfileModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js"
import {defineProfileStore} from "@/profile/profile/ProfileStore.js"
export default function associatedProfileController(){

  const controller = rootController(associatedProfileModel);
const profileOk = (data) => {
    if (data) {
     
      controller.model.value.profile = data.id;

    }
  };
controller.profileOk = profileOk;
const associatedProfileOk = (data) => {
    if (data) {
     
      controller.model.value.associatedProfile = data.id;

    }
  };
controller.associatedProfileOk = associatedProfileOk;
const profileStore = defineProfileStore();
controller.profileStore = profileStore;
controller.profileNav=profileNav;
onMounted(()=>{
profileStore.getMini();


})
  return controller;

}

