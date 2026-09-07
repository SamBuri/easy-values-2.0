import rootController from "@/root/RootController";
import organisationSettingModel from "./OrganisationSettingModel";
import { defineCompanyStore } from "../company/CompanyStore";
import { defineSettingStore } from "saburi-vue-utils";
import { onMounted } from "vue";

export default function organisationSettingController() {
  const controller = rootController(organisationSettingModel);
  const companyStore = defineCompanyStore();
  const settingStore = defineSettingStore();
  controller.companyStore = companyStore;
  controller.settingStore = settingStore;

  onMounted(() => {
    companyStore.getMini();
    settingStore.getMini();
  });

  return controller;
}
