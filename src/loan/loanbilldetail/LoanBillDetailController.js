import rootController from "@/root/RootController";
import loanBillDetailModel from "./LoanBillDetailModel";
import { onMounted } from "vue";
import itemNav from "@/lookup/item/ItemNav.js"
import {defineItemStore} from "@/lookup/item/ItemStore.js"
import {defineLoanStore} from "@/loan/LoanStore.js"
import itemSelected from "@/root/compasables/ItemSelected";
export default function loanBillDetailController(){

  const controller = rootController(loanBillDetailModel);
const itemIdOk = (data) => {
    if (data) {

      controller.model.value.itemId= data.id;

    }
  };
controller.itemIdOk = itemIdOk;
const itemStore = defineItemStore();
controller.itemStore = itemStore;
const loanStore = defineLoanStore();
controller.loanStore = loanStore;
controller.itemNav=itemNav;
onMounted(()=>{
itemStore.getMini();

loanStore.getDeterminingMethods();


})
const model = controller.model.value;
itemSelected(model)
  return controller;

}

