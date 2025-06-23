import rootController from "@/root/RootController";
import userModel from "./UserModel";
import { onMounted, watch } from "vue";
import { defineBranchStore } from "@/organisation/branch/BranchStore.js"
import { defineGroupStore } from "@/security/group/GroupStore.js"
import { defineUserStore } from "./UserStore";
import userNav from './UserNav'
export default function userController() {

  const currentStore = defineUserStore();



  const saveGroups = async (res, model) => {
    //get saved groups from the model

    const savedGroups = currentStore.userGroups;

    const currentGroups = model.groups || [];

    console.log("Current Groups:", currentGroups);


    // Create a Set of all IDs in currentGroups for efficient lookup
    const currentGroupIds = new Set(currentGroups);

    // Items in savedGroups but not in currentGroups (by ID)
    const onlyInSavedGroups = savedGroups.filter(
      group => !currentGroupIds.has(group.id)
    );

    // Items in currentGroups but not in savedGroups (by ID)
    const savedGroupIds = new Set(savedGroups.map(group => group.id));

    const onlyInCurrentGroups = currentGroups.filter(
      groupId => !savedGroupIds.has(groupId)
    );
    console.log("IDs only in currentGroups:", onlyInCurrentGroups);

    console.log("Groups only in savedGroups:", onlyInSavedGroups);
    //only saved. Mean they are not saved but have but have been unselected by the user so should be deleted
    onlyInSavedGroups.forEach(groupToRemove => {
      try {
        currentStore.unAssignGroups(model.id, groupToRemove.id, false);
        console.log(`Successfully unassigned group: ${groupToRemove.id}`);
      } catch (error) {
        console.error(`Failed to unassign group ${groupToRemove.id}:`, error);
      }
    });

    //only current. Mean they are not saved but have been selected by the user so should be added
    onlyInCurrentGroups.forEach(groupToAdd => {
      try {
        currentStore.assignGroups(model.id, groupToAdd);
        console.log(`Successfully assigned group: ${groupToAdd}`);
      } catch (error) {
        console.error(`Failed to assign group ${groupToAdd}:`, error);
      }
    });


    model.groups = await currentStore.getUserGroups(model.id) || [];


  };



  const controller = rootController(userModel, null, { afterUpdate: saveGroups });
  controller.currentStore = currentStore;
  const branchStore = defineBranchStore();
  controller.branchStore = branchStore;
  const groupStore = defineGroupStore();
  controller.groupStore = groupStore;


  controller.currentNav = userNav

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
  onMounted(() => {
    branchStore.getMini();

    groupStore.getMini();
    currentStore.getMini();

  })

  let model = controller.model.value;
  watch(() => model.id, async (id) => {
    model.groups = [];
    if (id) {
      model.groups = await currentStore.getUserGroups(id) || [];
    }
  });

  return controller;

}

