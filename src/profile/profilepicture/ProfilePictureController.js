import rootController from "@/root/RootController";
import profilePictureModel from "./ProfilePictureModel";
import { onMounted } from "vue";
import { defineProfileStore } from "@/profile/ProfileStore";
import { defineProfilePictureStore } from "../profilepicture/ProfilePictureStore";

export default function profilePictureController() {
  const profilePictureStore = defineProfilePictureStore();
  const hooks = {
    afterSave: (res) => {

      if (res.success) {
        profilePictureStore.getProfilePictures(res.entity.profile.id);

      }

    }
  };
  const controller = rootController(profilePictureModel, null, hooks);
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;

  onMounted(() => {
    // profileStore.getMini();

    profileStore?.getImageTypes();

  });

  const model = controller.model.value;

  const setProfile = (profile) => {
    console.log("Profile", profile);
    model.profileId = "";
      model.name ="";
    if (model) {
      model.profileId = profile.id;
      let otherName = profile.otherNames;
      otherName = otherName?` ${otherName} `:''
      model.name = `${profile.firstName} ${otherName} ${profile.lastName}`;
    }
  };

 controller.setProfile = setProfile;

 const setImagePrimaryImage = () => model.imageType = "Primary";
 const setImageSecondaryImage = () => model.imageType = "Secondary";
 controller.setImagePrimaryImage = setImagePrimaryImage;
 controller.setImageSecondaryImage = setImageSecondaryImage;
  return controller;
}
