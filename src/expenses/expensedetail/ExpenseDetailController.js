import rootController from "@/root/RootController";
import expenseDetailModel from "./ExpenseDetailModel";
import { onMounted } from "vue";
import itemNav from "@/lookup/item/ItemNav.js"
import { defineItemStore } from "@/lookup/item/ItemStore.js"
import itemSelected from "@/root/compasables/ItemSelected";
import unitCostAmount from "@/root/compasables/UnitCostAmount";

export default function expenseDetailController() {

  const controller = rootController(expenseDetailModel);
  const itemIdOk = (data) => {
    if (data) {

      controller.model.value.itemId = data.id;
      controller.model.value.itemName = data.itemName;

    }
  };
  controller.itemIdOk = itemIdOk;
  const itemStore = defineItemStore();
  controller.itemStore = itemStore;
  controller.itemNav = itemNav;
  onMounted(() => {
    itemStore.getExpensableItems();


  })
  const model = controller.model.value;
  itemSelected(model);
  unitCostAmount(model)
  return controller;

}

