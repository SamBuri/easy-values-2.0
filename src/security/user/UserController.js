import rootController from "@/root/RootController";
import userModel from "./UserModel";
import { onMounted } from "vue";
import {defineBranchStore} from "@/organisation/branch/BranchStore.js"
import {defineGroupStore} from "@/security/group/GroupStore.js"
export default function userController(){

  const controller = rootController(userModel);
const branchStore = defineBranchStore();
controller.branchStore = branchStore;
const groupStore = defineGroupStore();
controller.groupStore = groupStore;

const requiredActions = [
  
  {
    "id": "UPDATE_PASSWORD",
    "name": "Update Password"
  },
  {
    "id": "UPDATE_PROFILE",
    "name": "Update Profile"
  },
  {
    "id": "VERIFY_EMAIL",
    "name": "Verify Email"
  },
]

controller.requiredActions = requiredActions;
onMounted(()=>{
branchStore.getMini();

groupStore.getMini();

})
  return controller;

}

