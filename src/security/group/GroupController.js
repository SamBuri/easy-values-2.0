import rootController from "@/root/RootController";
import groupModel from "./GroupModel";
import { onMounted, watch, ref, computed } from "vue";
import roleNav from "@/security/role/RoleNav.js"
import roleController from "@/security/role/RoleController.js"
import { defineRoleStore } from "@/security/role/RoleStore.js"
import { defineGroupStore } from "./GroupStore";
import groupNav from "./GroupNav";
export default function groupController() {

  const controller = rootController(groupModel);
  const roleStore = defineRoleStore();
  controller.roleStore = roleStore;
  const { setData: setRoleData } = roleController();
  controller.setRoleData = setRoleData;
  controller.roleNav = roleNav;
  const groupStore = defineGroupStore()
  controller.currentStore = groupStore;
  controller.mini = groupStore.mini;
  controller.miniHeaders = groupNav.menu.miniHeaders
  controller.currentNav = groupNav
  onMounted(() => {
    roleStore.getMini();
    groupStore.getMini()
  })
  
  
 
  
  return controller;

}

