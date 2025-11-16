import rootController from "@/root/RootController";
import tenantModel from "./TenantModel";
import { onMounted, watch } from "vue";
import { defineOrganisationStore } from "@/organisation/OrganisationStore.js"
import { defineCompanyStore } from "@/organisation/company/CompanyStore.js"
import { defineBranchStore } from "@/organisation/branch/BranchStore.js"
export default function tenantController() {

  const controller = rootController(tenantModel);
  const organisationStore = defineOrganisationStore();
  controller.organisationStore = organisationStore;
  const companyStore = defineCompanyStore();
  controller.companyStore = companyStore;
  const branchStore = defineBranchStore();
  controller.branchStore = branchStore;
  onMounted(() => {
    organisationStore.getTenantTypes();

    companyStore.getMini();

    // branchStore.getMini();


  })
  const model = controller.model.value;

  watch(() => model.companyId, (newValue) => {
    model.branchId='';
    if (newValue) {
      branchStore.getBranchByCompanyId(newValue)
    }
    console.log("Company changed to: ", newValue);
  });

   

  return controller;

}

