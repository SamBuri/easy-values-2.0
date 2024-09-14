import rootController from "@/root/RootController";
import engagementModel from "./EngagementModel";
import { onMounted } from "vue";
import customerNav from "@/customer/customer/CustomerNav.js";
import { defineCustomerStore } from "@/customer/customer/CustomerStore.js";
import { defineCustomerStore as  defineRootCustomerStore} from "@/customer/CustomerStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineEngagementStore } from "./EngagementStore.js";
export default function engagementController() {
  const controller = rootController(engagementModel);
  const customerIdOk = (data) => {
    if (data) {
      controller.model.value.customerId = data.id;
      controller.model.value.customerName = data.customerName;
    }
  };
  controller.customerIdOk = customerIdOk;
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const engagementStore = defineEngagementStore();
  controller.engagementStore = engagementStore;
  controller.customerNav = customerNav;

  const rootCustomerStore = defineRootCustomerStore();
  controller.rootCustomerStore = rootCustomerStore;
  const model = controller.model.value;
  onMounted(() => {
    customerStore.getMini();

    rootCustomerStore.getEngagementReasons();

    rootCustomerStore.getEngagementModes();

    lookupStore.getOpenStatuses();

    engagementStore.getMini();

    model.attendingPersonnel=controller.authStore.user.fullName;
  });


  return controller;
}
