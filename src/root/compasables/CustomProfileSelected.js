import { watch } from "vue";
import { defineProfileStore } from "@/profile/profile/ProfileStore";
export default function customProfileSelected(prop, model, callBack){
  const profileStore = defineProfileStore();


  const defaultFunction=(profile)=>{
    model.profile =null;
    model.name= '';
    model.primaryPhoneNo='';
    model.otherPhoneNos=''
    model.address=''

    if (profile) {
      model.profile = profile
      model.primaryPhoneNo = profile.primaryPhoneNo;

      model.name=profile.display
      model.otherPhoneNos=profile.otherPhoneNos
      model.address= profile.addressDetails;

    }

  }
  watch(prop, async (newValue) => {
      let profile = await profileStore.getProfile(newValue);
      if(callBack) callBack(profile);
      else defaultFunction(profile)
      model.profile = profile;

    }
  );

  return model;

}
