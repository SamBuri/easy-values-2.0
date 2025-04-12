import rootController from "@/root/RootController";
import profileModel from "./ProfileModel";
import { ref,onMounted, watch, computed } from "vue";
import funcs from '../../utils/funcs'
import { defineProfileStore } from "@/profile/ProfileStore.js"
import { defineLookupStore } from "@/lookup/LookupStore.js"
import { defineLookupDataStore } from "@/lookup/lookupdata/LookupDataStore.js"
import { defineCountryStore } from "@/profile/country/CountryStore.js"
import profilePictureController from "@/profile/profilepicture/ProfilePictureController.js";
import { defineProfilePictureStore } from "../profilepicture/ProfilePictureStore";
export default function profileController() {

  const hooks = {
    afterSave: (res) => {
     
      if (res.success) {
        addPictureOnSave(res.entity);
        
      }
     
    }
  };

  const controller = rootController(profileModel, null, hooks);
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


  })

   const model = controller.model.value;
  
    const profilePictureStore = defineProfilePictureStore();
  
    const pictureController = profilePictureController();
    controller.pictureController = pictureController;
    controller.profilePictureStore = profilePictureStore;

     watch(
        () => model.id,
        (newValue) => {
          profilePictureStore.profilePictures = [];
          if (controller.isUpdate.value) {
            profilePictureStore.getProfilePictures(newValue);
          }
        }
      );

        const showPictures = computed(
          () => controller.isUpdate.value && profilePictures.value.length > 0
        );

        controller.showPictures = showPictures;
        const profilePictures = computed(() => profilePictureStore.profilePictures);
        controller.profilePictures = profilePictures;
        
        const addPictureDialog = ref(false);
          const showAddPictureDialog = () => addPictureDialog.value = true;
          const addPicture = () => {
            pictureController.setProfile(model);
            if(profilePictures.value.length>0){
              pictureController.setImageSecondaryImage();
            }
            else{
              pictureController.setImagePrimaryImage();
            }
            showAddPictureDialog();
          };
        
          const addPictureOnSave = (entity) => {
            pictureController.setProfile(entity);
            pictureController.setImagePrimaryImage();
            showAddPictureDialog();
          };
        
          const closeAddPictureDialog = () => {
            addPictureDialog.value = false;
          };
        
          controller.addPictureDialog = addPictureDialog;
          controller.addPicture = addPicture;
          controller.closeAddPictureDialog = closeAddPictureDialog;
        

  return controller;

}

