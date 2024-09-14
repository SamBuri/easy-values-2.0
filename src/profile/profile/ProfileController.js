import rootController from "@/root/RootController";
import profilePictureController from "@/profile/profilepicture/ProfilePictureController.js";
import profileModel from "./ProfileModel";
import { computed, onMounted, watch, ref } from "vue";
import funcs from "../../utils/funcs";
import { defineProfileStore } from "@/profile/ProfileStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineLookupDataStore } from "@/lookup/lookupdata/LookupDataStore.js";
import { defineCountryStore } from "@/profile/country/CountryStore.js";
import { defineProfilePictureStore } from "../profilepicture/ProfilePictureStore";
export default function profileController() {
  const controller = rootController(profileModel);
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const lookupDataStore = defineLookupDataStore();
  controller.lookupDataStore = lookupDataStore;
  const countryStore = defineCountryStore();
  controller.countryStore = countryStore;
  onMounted(() => {
    profileStore.getProfileTypes();

    lookupStore.getGender();

    lookupDataStore.getMaritalStatuses();

    countryStore.getMini();

    lookupDataStore.getIdTypes();

    lookupDataStore.getOccupations();

    lookupStore.getWorkTypes();

    lookupDataStore.getBusinessCategories();
  });

  const model = controller.model.value;

  const profilePictureStore = defineProfilePictureStore();

  const pictureController = profilePictureController();
  watch(
    () => model.id,
    (newValue) => {
      profilePictureStore.profilePictures = [];
      if (controller.isUpdate.value) {
        profilePictureStore.getProfilePictures(newValue);
      }
    }
  );

  const profilePictures = computed(() => profilePictureStore.profilePictures);
  const showPictures = computed(
    () => controller.isUpdate.value && profilePictures.value.length > 0
  );
  const isOrganisation = computed(() => model.profileType === "Organisation");
  controller.profilePictures = profilePictures;
  controller.showPictures = showPictures;
  controller.isOrganisation = isOrganisation;
  controller.profilePictureStore = profilePictureStore;

  const addPictureDialog = ref(false);
  const addPicture = () => {
    pictureController.setProfile(model);
    addPictureDialog.value = true;
  };

  const closeAddPictureDialog = () => {
    addPictureDialog.value = false;
  };

  controller.addPictureDialog = addPictureDialog;
  controller.addPicture = addPicture;
  controller.closeAddPictureDialog = closeAddPictureDialog;

  const afterSave = (res) => {
    console.log("Res", res);
    if (res.success) {
      addPicture();
    }

    alert("Yes");
  };

  const save = () => {
    alert("Yesss");
    controller.save();
  };

  controller.save = save;
  controller.afterSave = afterSave;
  return controller;
}
