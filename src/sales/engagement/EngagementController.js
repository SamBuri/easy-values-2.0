import rootController from "@/root/RootController";
import engagementModel from "./EngagementModel";
import { onMounted, watch } from "vue";
import customerNav from "@/sales/customer/CustomerNav.js"
import { defineCustomerStore } from "@/sales/customer/CustomerStore.js"
import { defineSalesStore } from "@/sales/SalesStore.js"
import { defineLookupStore } from "@/lookup/LookupStore.js"
import engagementNav from "@/sales/engagement/EngagementNav.js"
import { defineEngagementStore } from "@/sales/engagement/EngagementStore.js"
export default function engagementController() {

  const controller = rootController(engagementModel);
  const customerIdOk = (data) => {
    if (data) {

      controller.model.value.customerId = data.id;
      controller.model.value.customerName = data.customerName;

    }
  };
  controller.customerIdOk = customerIdOk;
  const parentEngagementIdOk = (data) => {
    if (data) {

      controller.model.value.parentEngagementId = data.id;
      controller.model.value.parentEngagementTitle = data.title;

    }
  };
  controller.parentEngagementIdOk = parentEngagementIdOk;
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const salesStore = defineSalesStore();
  controller.salesStore = salesStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const engagementStore = defineEngagementStore();
  controller.engagementStore = engagementStore;
  controller.customerNav = customerNav;
  controller.engagementNav = engagementNav;
  onMounted(() => {
    customerStore.getMini();

    salesStore.getEngagementReasons();

    salesStore.getEngagementModes();

    lookupStore.getOpenStatuses();

    engagementStore.getMini();
    controller.model.value.attendingPersonnel = controller.authStore.fullName;


  })

  const setCustomerId = (id) => {
    controller.model.value.customerId = id;
  }
  controller.setCustomerId = setCustomerId;

  watch(() => controller.model.value.customerId, (newValue, oldValue) => {
    if (newValue) {
     let customer= customerStore.getCustomerMiniById(newValue);
     controller.model.value.customerName="";
     if(customer){
      controller.model.value.customerName=customer.customerName;
     }
    }
  }
  )
  return controller;

}

