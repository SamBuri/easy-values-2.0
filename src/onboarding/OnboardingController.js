import rootController from "@/root/RootController";
import rootOptions from "@/root/RootOptions";
import onboardingModel from "./OnboardingModel";
import { onMounted, ref } from "vue";
import { defineOrganisationStore } from "../organisation/OrganisationStore";
import { defineDevConfigStore } from "../organisation/devconfig/DevConfigStore";
import { useRouter } from "vue-router";
import branchNav from "../organisation/branch/BranchNav";

export default function onboardingController() {
  const router = useRouter();

  const hooks = {
    afterSave: (res) => {
      if (res.success) {
        const company = res.entity || res.data || {};
        router.push({ name: "appuser", query: {
          clientGroupId: company.clientGroupId || "",
          defaultBranchId: company.branches?.[0]?.id || "",
          companyId: company.id || ""
        }});
      }
    },
  };

  const controller = rootController(onboardingModel, rootOptions, hooks);

  const organisationStore = defineOrganisationStore();
  const devConfigStore = defineDevConfigStore();

  controller.organisationStore = organisationStore;
  controller.devConfigStore = devConfigStore;
  controller.branchNav = branchNav;

  const step = ref(1);
  controller.step = step;

  onMounted(() => {
    organisationStore.getBusinessTypes();
    devConfigStore.getMini();
    organisationStore.getOrganisationTypes();
  });

  return controller;
}
