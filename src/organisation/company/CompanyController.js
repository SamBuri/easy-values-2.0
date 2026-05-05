import rootController from "@/root/RootController";
import companyModel from "./CompanyModel";
import { onMounted } from "vue";
import { defineDevConfigStore } from "../devconfig/DevConfigStore";
import { defineOrganisationStore } from "@/organisation/OrganisationStore.js"
import branchNav from "../branch/BranchNav";

export default function companyController() {

  const controller = rootController(companyModel);
  const organisationStore = defineOrganisationStore();
  controller.organisationStore = organisationStore;
  const devConfigStore = defineDevConfigStore();
  controller.devConfigStore = devConfigStore;
  controller.branchNav = branchNav;
  onMounted(() => {
    organisationStore.getBusinessTypes();

    organisationStore.getDbTypes();
    devConfigStore.getMini();


  })

  controller.resetOnboarding = async (item) => {
    return await controller.rootStore.post({ path: `onboarding/reset-company/${item.id}`, body: {} });
  };

  return controller;

}

