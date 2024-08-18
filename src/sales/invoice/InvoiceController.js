import rootController from "@/root/RootController";
import invoiceModel from "./InvoiceModel";
import { onMounted } from "vue";
import {defineLookupStore} from "@/lookup/LookupStore.js"
import customerNav from "@/customer/customer/CustomerNav.js"
import {defineCustomerStore} from "@/customer/customer/CustomerStore.js"
import invoiceDetailNav from "@/sales/invoicedetail/InvoiceDetailNav.js"
import invoiceDetailController from "@/sales/invoicedetail/InvoiceDetailController.js"
import {defineInvoiceDetailStore} from "@/sales/invoicedetail/InvoiceDetailStore.js"
export default function invoiceController(){

  const controller = rootController(invoiceModel);
const sellToIdOk = (data) => {
    if (data) {

      controller.model.value.sellToId = data.id;

    }
  };
controller.sellToIdOk = sellToIdOk;
const lookupStore = defineLookupStore();
controller.lookupStore = lookupStore;
const customerStore = defineCustomerStore();
controller.customerStore = customerStore;
const invoiceDetailStore = defineInvoiceDetailStore();
controller.invoiceDetailStore = invoiceDetailStore;
const {setData: setInvoiceDetailData}=invoiceDetailController();
controller.setInvoiceDetailData=setInvoiceDetailData;
controller.customerNav=customerNav;
controller.invoiceDetailNav=invoiceDetailNav;
onMounted(()=>{
lookupStore.getInvoiceTypes();

customerStore.getMini();

invoiceDetailStore.getMini();


})
  return controller;

}

