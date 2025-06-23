import rootController from "@/root/RootController";
import resetPasswordModel from "./ResetPasswordModel";
import { onMounted } from "vue";
import userNav from "@/security/user/UserNav.js"
import {defineUserStore} from "@/security/user/UserStore.js"

export default function resetPasswordController(){
  const userStore = defineUserStore();

  const save = async(model)=>{
   return userStore.resetPassword(model.userId, {type: model.type, value: model.value, temporary: model.temporary})

  }


  const controller = rootController(resetPasswordModel, null, {
    save
  });
const userIdOk = (data) => {
  
      controller.model.value.name = '';
      controller.model.value.username ='';
      controller.model.value.email = ''
    if (data) {
     
      controller.model.value.userId= data.id;
      controller.model.value.name = `${data.firstName} ${data.lastName}`;
      controller.model.value.username = data.username;
      controller.model.value.email = data.email;

    }
  };
controller.userIdOk = userIdOk;

controller.userStore = userStore;
controller.userNav=userNav;
onMounted(()=>{
userStore.getMini();


})
  return controller;

}

