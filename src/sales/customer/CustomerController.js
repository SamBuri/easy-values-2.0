import rootController from "@/root/RootController";
import customerModel from "./CustomerModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js";
import { defineProfileStore } from "@/profile/profile/ProfileStore.js";
import { defineLookupDataStore } from "@/lookup/lookupdata/LookupDataStore.js";
import { defineCustomerGroupStore } from "../customergroup/CustomerGroupStore";
import { defineCustomerStore } from "./CustomerStore.js";
import customerNav from "./CustomerNav.js";
import customProfileSelected from "@/root/compasables/CustomProfileSelected";

export default function customerController() {
  const controller = rootController(customerModel);
  const profileIdOk = (data) => {
    if (data) {
      controller.model.value.profileId = data.id;
      model.id = data.id;
    }
  };
  controller.profileIdOk = profileIdOk;
  const customerSponsorsOk = (data) => {
    if (data) {
      controller.model.value.customerSponsors.push(data.id);
    }
  };
  controller.customerSponsorsOk = customerSponsorsOk;
  const profileStore = defineProfileStore();
  controller.profileStore = profileStore;
  const lookupDataStore = defineLookupDataStore();
  controller.lookupDataStore = lookupDataStore;
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const customerGroupStore = defineCustomerGroupStore();
  controller.customerGroupStore = customerGroupStore;
  controller.profileNav = profileNav;
  controller.customerNav = customerNav;
  onMounted(() => {
    profileStore.getMini();

    lookupDataStore.getBusinessSections();

    lookupDataStore.getPriceGroups();

    customerStore.getSponsors();

    customerGroupStore.getMini();
  });
  const model = controller.model.value;
  customProfileSelected(
    () => model.profileId,
    model,
    (profile) => {
      model.customerName = "";
      model.phoneNo = "";
      model.email = "";
      model.address = "";
      if (profile) {
        model.customerName = profile.display;
        model.phoneNo = profile.primaryPhoneNo;
        model.email = profile.email;
        model.address = profile.addressDetails;
      }
    }
  );
  return controller;
}
