import rootController from "@/root/RootController";
import groupModel from "./GroupModel";
import { onMounted, watch, ref, computed } from "vue";
import roleNav from "@/security/role/RoleNav.js"
import roleController from "@/security/role/RoleController.js"
import { defineRoleStore } from "@/security/role/RoleStore.js"
import { defineGroupStore } from "./GroupStore";
import groupNav from "./GroupNav";
export default function groupController() {

  const roleStore = defineRoleStore();
  const groupStore = defineGroupStore()
  const selected = ref([])

  const updateHook = async (res, model) => {
    try {
      const selectedRoles = selected.value;
      const currentRoles = model.roles || []; // Array of role names (strings)
      const rolesToAdd = selectedRoles.filter(r => !currentRoles.includes(r.name));
      const rolesToRemove = roleStore.mini.filter(role =>
        currentRoles.includes(role.name) &&
        !selectedRoles.some(r => r.name === role.name)
      );

      if (rolesToAdd.length === 0 && rolesToRemove.length === 0) {
        console.log("No role changes detected.");
        return;
      }

      if (rolesToAdd.length > 0)
        groupStore.assingnPermissions(model.id, selectedRoles); //save all selected roles
      if (rolesToRemove.length > 0) {
        groupStore.unAssingnPermissions(model.id, rolesToRemove, rolesToAdd.length == 0); // remove roles that are not selected anymore

      }



    } catch (error) {
      console.error("Failed to update roles:", error);
      throw error; // Re-throw for error handling in the UI
    }
  };



  const controller = rootController(groupModel, null, { afterUpdate: updateHook });
  controller.roleStore = roleStore;
  const { setData: setRoleData } = roleController();
  controller.setRoleData = setRoleData;
  controller.roleNav = roleNav;

  controller.currentStore = groupStore;
  controller.mini = groupStore.mini;
  controller.miniHeaders = groupNav.menu.miniHeaders
  controller.currentNav = groupNav


  const model = controller.model.value;


  controller.selected = selected;

  watch(() => model.roles, (newValue) => selected.value = roleStore.mini.filter(r => newValue.includes(r.name)));



  // const updatePermissions = async () => {
  //   try {
  //     const selectedRoles = selected.value;
  //     const currentRoles = model.roles || []; // Array of role names (strings)
  //     const rolesToAdd = selectedRoles.filter(r => !currentRoles.includes(r.name));
  //     const rolesToRemove = roleStore.mini.filter(role =>
  //       currentRoles.includes(role.name) &&
  //       !selectedRoles.some(r => r.name === role.name)
  //     );

  //     if (rolesToAdd.length === 0 && rolesToRemove.length === 0) {
  //       console.log("No role changes detected.");
  //       return;
  //     }

  //     if (rolesToAdd.length > 0)
  //       groupStore.assingnPermissions(model.id, selectedRoles); //save all selected roles
  //     if (rolesToRemove.length > 0) {
  //       groupStore.unAssingnPermissions(model.id, rolesToRemove, rolesToAdd.length == 0); // remove roles that are not selected anymore

  //     }



  //   } catch (error) {
  //     console.error("Failed to update roles:", error);
  //     throw error; // Re-throw for error handling in the UI
  //   }
  // };

  // controller.updatePermissions = updatePermissions;
  onMounted(() => {
    roleStore.getMini();
    groupStore.getMini()
  })




  return controller;

}

