import rootController from "@/root/RootController";
import loanProductChargeModel from "./LoanProductChargeModel";
import { onMounted } from "vue";
import {defineLoanProductStore} from "@/loan/loanproduct/LoanProductStore.js"
import itemNav from "@/lookup/item/ItemNav.js"
import {defineItemStore} from "@/lookup/item/ItemStore.js"
import {defineLoanStore} from "@/loan/LoanStore.js"
import itemSelected from "@/root/compasables/ItemSelected";
export default function loanProductChargeController(){

  const controller = rootController(loanProductChargeModel);
const itemIdOk = (data) => {
    if (data) {

      controller.model.value.itemId= data.id;
      controller.model.value.itemName= data.itemName;

    }
  };
controller.itemIdOk = itemIdOk;
const loanProductStore = defineLoanProductStore();
controller.loanProductStore = loanProductStore;
const itemStore = defineItemStore();
controller.itemStore = itemStore;
const loanStore = defineLoanStore();
controller.loanStore = loanStore;
controller.itemNav=itemNav;
onMounted(()=>{
loanProductStore.getMini();

itemStore.getMini();

loanStore.getDeterminingMethods();


})

const model = controller.model.value;
itemSelected(model)
  return controller;

}

