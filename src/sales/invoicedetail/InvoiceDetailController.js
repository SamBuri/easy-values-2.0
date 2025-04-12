import rootController from "@/root/RootController";
import invoiceDetailModel from "./InvoiceDetailModel";
import { onMounted, watch } from "vue";
import { defineInvoiceStore } from "@/sales/invoice/InvoiceStore.js"
import itemNav from "@/lookup/item/ItemNav.js"
import { defineItemStore } from "@/lookup/item/ItemStore.js"
import itemSelected from "@/root/compasables/ItemSelected";
export default function invoiceDetailController() {

  const controller = rootController(invoiceDetailModel);
  const itemIdOk = (data) => {
    if (data) {

      controller.model.value.itemId = data.id;

    }
  };
  controller.itemIdOk = itemIdOk;
  const invoiceStore = defineInvoiceStore();
  controller.invoiceStore = invoiceStore;
  const itemStore = defineItemStore();
  controller.itemStore = itemStore;
  controller.itemNav = itemNav;
  onMounted(() => {
    invoiceStore.getMini();

    itemStore.getBillableItems();


  })

 
 

 const model = controller.model.value;

 const setDefaultUnitMeasure= ()=>{
  let defaultInvoicingMeasures = model.measureRelations.filter(itm=>itm.defaultUsage==="Invoicing");
  model.measureRelation = defaultInvoicingMeasures.length>0?defaultInvoicingMeasures[0]:model.defaultMeasureRelation;

}
 itemSelected(model, setDefaultUnitMeasure)

 const calcAmount=()=>{
  model.amount = (model.quantity* model.unitPrice)-model.discount;
};

 const calcQuantity=()=>{
  model.quantity = model.measureQuantity*model.measureSize;
  calcAmount();
};
 watch(()=>model.measureRelation, (newValue)=>{
  
    if(newValue){
     
       model.measure = newValue.measureName;
       model.measureSize = newValue.measureSize;
       model.measureQuantity =1;
       calcQuantity();
    }

 })

 watch(()=>model.measureQuantity, (newValue)=>{
  
  if(newValue){
   
     calcQuantity();
  }

})

 watch([()=>model.unitPrice, ()=>model.discount], ([newValue, newDiscount])=>{
  
  if(newValue||newDiscount){
   
     calcAmount();
  }

})




  return controller;

}

