import rootController from "@/root/RootController";
import invoiceModel from "./InvoiceModel";
import { onMounted, watch, ref } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore.js"
import customerNav from "..//customer/CustomerNav.js"
import { defineCustomerStore } from "../customer/CustomerStore.js"
import invoiceDetailNav from "@/sales/invoicedetail/InvoiceDetailNav.js"
import invoiceDetailController from "@/sales/invoicedetail/InvoiceDetailController.js"
import { defineInvoiceDetailStore } from "@/sales/invoicedetail/InvoiceDetailStore.js"
import defineListAmountCalOnAmount from "@/root/compasables/ListAmountCalcOnAmountFunc";
import customerController from "../customer/CustomerController";
import { defineCustomerSponsorStore } from "../customersponsor/CustomerSponsorStore";

export default function invoiceController() {

  const controller = rootController(invoiceModel);

 
 
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const customerStore = defineCustomerStore();
  controller.customerStore = customerStore;
  const invoiceDetailStore = defineInvoiceDetailStore();
  controller.invoiceDetailStore = invoiceDetailStore;
  const { setData: setInvoiceDetailData } = invoiceDetailController();
  controller.setInvoiceDetailData = setInvoiceDetailData;
  controller.customerNav = customerNav;
  controller.invoiceDetailNav = invoiceDetailNav;

 
  onMounted(() => {
    lookupStore.getInvoiceTypes();
    customerStore.getMini();

  })

 
  

  
  const customerSponsorStore =defineCustomerSponsorStore();
  controller.customerSponsorStore = customerSponsorStore;
  const model = controller.model.value;
  const sellToIdOk = (data) => {
    if (data) {

      model.sellToId= data.id;
      model .sellToName = data.customerName
      customerSponsorStore.getCustomerSponsors(data.id);

    }
  };

   controller.sellToIdOk = sellToIdOk;

  
  const invoiceDatailsChanged = (items) => defineListAmountCalOnAmount(model, items);
  controller.invoiceDatailsChanged = invoiceDatailsChanged;
  return controller;

}

