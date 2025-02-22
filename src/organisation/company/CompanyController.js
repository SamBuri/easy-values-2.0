import rootController from "@/root/RootController";
import companyModel from "./CompanyModel";
import { onMounted } from "vue";
import funcs from '../../utils/funcs'
import {defineOrganisationStore} from "@/organisation/OrganisationStore.js"
export default function companyController(){

  const controller = rootController(companyModel);
const organisationStore = defineOrganisationStore();
controller.organisationStore = organisationStore;
onMounted(()=>{
organisationStore.getBusinessTypes();

organisationStore.getDbTypes();


})
  return controller;

}

