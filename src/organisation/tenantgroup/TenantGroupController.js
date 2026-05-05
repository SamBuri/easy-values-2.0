import rootController from "@/root/RootController";
import tenantGroupModel from "./TenantGroupModel";
export default function tenantGroupController(){

  const controller = rootController(tenantGroupModel);

  controller.resetOnboarding = async (item) => {
    return await controller.rootStore.post({ path: `onboarding/reset-tenant-group/${item.id}`, body: {} });
  };

  return controller;

}

