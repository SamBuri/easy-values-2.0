import rootController from "@/root/RootController";
import rootOptions from "@/root/RootOptions";
import onboardingModel from "./OnboardingModel";
import { onMounted, ref } from "vue";
import { defineOrganisationStore } from "../OrganisationStore";
import { defineDevConfigStore } from "../devconfig/DevConfigStore";
import { defineTenantGroupStore } from "../tenantgroup/TenantGroupStore";
import { defineTenantStore } from "../tenant/TenantStore";
import { useRouter } from "vue-router";
import branchNav from "../branch/BranchNav";

export default function onboardingController() {
  const router = useRouter();

  const hooks = {
    afterSave: (res) => {
      if (res.success) {
        step.value = 1;
      }
    },
  };

  const controller = rootController(onboardingModel, rootOptions, hooks);

  const organisationStore = defineOrganisationStore();
  const devConfigStore = defineDevConfigStore();
  const tenantGroupStore = defineTenantGroupStore();
  const tenantStore = defineTenantStore();

  controller.organisationStore = organisationStore;
  controller.devConfigStore = devConfigStore;
  controller.tenantGroupStore = tenantGroupStore;
  controller.tenantStore = tenantStore;
  controller.branchNav = branchNav;

  const step = ref(1);
  controller.step = step;

  onMounted(() => {
    organisationStore.getBusinessTypes();
    devConfigStore.getMini();
    tenantGroupStore.getMini();
    tenantStore.getMini();
  });

  return controller;
}
