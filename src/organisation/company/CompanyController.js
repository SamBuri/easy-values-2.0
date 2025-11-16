import rootController from "@/root/RootController";
import companyModel from "./CompanyModel";
import { onMounted } from "vue";
import { defineDevConfigStore } from "../devconfig/DevConfigStore";
import { defineOrganisationStore } from "@/organisation/OrganisationStore.js"
export default function companyController() {

  const controller = rootController(companyModel);
  const organisationStore = defineOrganisationStore();
  controller.organisationStore = organisationStore;
  const devConfigStore = defineDevConfigStore();
  controller.devConfigStore = devConfigStore;
  onMounted(() => {
    organisationStore.getBusinessTypes();

    organisationStore.getDbTypes();
    devConfigStore.getMini();


  })
  return controller;

}

