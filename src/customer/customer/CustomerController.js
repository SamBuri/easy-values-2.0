import rootController from "@/root/RootController";
import customerModel from "./CustomerModel";
import { onMounted } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineCustomerStore } from "@/customer/customer/CustomerStore.js";
import { defineCustomerSponsorStore } from "@/customer/customersponsor/CustomerSponsorStore.js";
export default function customerController() {
  const controller = rootController(customerModel);
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const customerSponsorStore = defineCustomerSponsorStore();
  controller.customerSponsorStore = customerSponsorStore;

  const invoiceDetailsDialog = ref(false);
  const openInvoiceDetailsDialog = ()=>openInvoiceDetailsDialog.value=true;
  const closeInvoiceDetailsDialog = ()=>closeInvoiceDetailsDialog.value=false;

   controller.invoiceDetailsDialog = invoiceDetailsDialog;
   controller.openInvoiceDetailsDialog = openInvoiceDetailsDialog;
   controller.closeInvoiceDetailsDialog = closeInvoiceDetailsDialog;

  onMounted(() => {
    lookupStore.getCustomerTypes();

    lookupStore.getPriceGroups();

    customerStore.getMini();

    lookupStore.getCustomerAccountsGroup();

    customerStore.getCustomerReferenceTypes();

    customerSponsorStore.getMini();
  });
  return controller;
}
