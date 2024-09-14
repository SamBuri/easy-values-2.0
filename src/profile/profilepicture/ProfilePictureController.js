import rootController from "@/root/RootController";
import profilePictureModel from "./ProfilePictureModel";
import { onMounted } from "vue";
import funcs from "../../utils/funcs";
import { defineProfileStore } from "@/profile/profile/ProfileStore.js";
export default function profilePictureController() {
  const controller = rootController(profilePictureModel);
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  onMounted(() => {
    // profileStore.getMini();

    profileStore.getImageTypes();
  });

  const model = controller.model.value;
  const setProfile = (profile) => {
    console.log("Profile", profile);
    model.profileId = "";
      model.name ="";
    if (model !== null) {
      model.profileId = profile.id;
      let otherName = profile.otherNames;
      otherName = otherName?` ${otherName} `:''
      model.name = `${profile.firstName}${otherName} ${profile.lastName}`;
    }
  };
  controller.setProfile = setProfile;
  return controller;
}
