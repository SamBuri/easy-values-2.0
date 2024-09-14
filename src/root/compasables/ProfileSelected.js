import { watch } from "vue";
import { defineProfileStore } from "@/profile/profile/ProfileStore";
export default function profileSelected(model, callBack){
  const profileStore = defineProfileStore();

  const defaultFunction=(profile)=>{
    model.profile =null;
    model.name= '';
    model.fullName =''
    model.primaryPhoneNo='';
    model.otherPhoneNos=''
    model.address=''
    model.phoneNo = ""
    model.phone = ""

    if (profile) {
      model.profile = profile
      model.primaryPhoneNo = profile.primaryPhoneNo;
      model.phoneNo = profile.primaryPhoneNo
      model.phone = profile.phone
      model.name=profile.display
      model.fullName=profile.display
      model.otherPhoneNos=profile.otherPhoneNos
      model.address= profile.addressDetails;

    }

  }
  watch(
    () => model.profileId,
    async (newValue) => {
      let profile = await profileStore.getProfile(newValue);
      if(callBack) callBack(profile);
      else defaultFunction(profile)
      model.profile = profile;

    }
  );

  return model;

}
