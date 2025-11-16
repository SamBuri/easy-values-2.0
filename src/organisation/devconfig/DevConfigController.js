import rootController from "@/root/RootController";
import devConfigModel from "./DevConfigModel";
import { onMounted } from "vue";
import {defineOrganisationStore} from "@/organisation/OrganisationStore.js"
export default function devConfigController(){

  const controller = rootController(devConfigModel);
const organisationStore = defineOrganisationStore();
controller.organisationStore = organisationStore;
onMounted(()=>{
organisationStore.getDbTypes();


})
  return controller;

}

