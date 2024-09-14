import rootController from "@/root/RootController";
import billItemModel from "./BillItemModel";
import { onMounted } from "vue";
import itemNav from "@/lookup/item/ItemNav.js";
import { defineItemStore } from "@/lookup/item/ItemStore.js";
import itemSelected from "@/root/compasables/ItemSelected";
import unitCostAmount from "@/root/compasables/UnitCostAmount";
export default function billItemController() {
  const controller = rootController(billItemModel);
  const itemIdOk = (data) => {
    if (data) {
      controller.model.value.itemId = data.id;
    }
  };
  controller.itemIdOk = itemIdOk;
  const itemStore = defineItemStore();
  controller.itemStore = itemStore;
  controller.itemNav = itemNav;
  onMounted(() => {
    itemStore.getMini();
  });

  const model = controller.model.value;
  itemSelected(model);
  unitCostAmount(model);
  return controller;
}
