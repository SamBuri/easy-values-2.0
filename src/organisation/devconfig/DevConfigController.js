import rootController from "@/root/RootController";
import devConfigModel from "./DevConfigModel";
import { onMounted } from "vue";
import { defineOrganisationStore } from "@/organisation/OrganisationStore.js";
import { useClientGroupStore } from "saburi-vue-utils";

export default function devConfigController(){
  const controller = rootController(devConfigModel);
  const organisationStore = defineOrganisationStore();
  controller.organisationStore = organisationStore;
  const clientGroupStore = useClientGroupStore();
  controller.clientGroupStore = clientGroupStore;

  onMounted(()=>{
    organisationStore.getDbTypes();
    clientGroupStore.getMini();
  })
  return controller;
}

