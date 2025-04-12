import rootController from "@/root/RootController";
import expenseDetailModel from "./ExpenseDetailModel";
import { onMounted } from "vue";
import itemNav from "@/sales/item/ItemNav.js"
import {defineItemStore} from "@/sales/item/ItemStore.js"
export default function expenseDetailController(){

  const controller = rootController(expenseDetailModel);
const itemIdOk = (data) => {
    if (data) {
     
      controller.model.value.itemId= data.id;

    }
  };
controller.itemIdOk = itemIdOk;
const itemStore = defineItemStore();
controller.itemStore = itemStore;
controller.itemNav=itemNav;
onMounted(()=>{
itemStore.getMini();


})
  return controller;

}

