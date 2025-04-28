import rootController from "@/root/RootController";
import itemModel from "./ItemModel";
import { onMounted } from "vue";
import { defineItemCategoryStore } from "@/lookup/itemcategory/ItemCategoryStore.js";
import { defineMeasureGroupStore } from "@/lookup/measuregroup/MeasureGroupStore.js";
import itemPriceGroupNav from "@/lookup/itempricegroup/ItemPriceGroupNav.js";
import itemPriceGroupController from "@/lookup/itempricegroup/ItemPriceGroupController.js";
import { defineItemPriceGroupStore } from "@/lookup/itempricegroup/ItemPriceGroupStore.js";
import { defineItemStore } from "./ItemStore";
import itemNav from "./ItemNav";
export default function itemController() {
  const controller = rootController(itemModel);
  const itemCategoryStore = defineItemCategoryStore();
  controller.itemCategoryStore = itemCategoryStore;
  const measureGroupStore = defineMeasureGroupStore();
  controller.measureGroupStore = measureGroupStore;
  const itemPriceGroupStore = defineItemPriceGroupStore();
  controller.itemPriceGroupStore = itemPriceGroupStore;
  const { setData: setItemPriceGroupData } = itemPriceGroupController();
  controller.setItemPriceGroupData = setItemPriceGroupData;
  controller.itemPriceGroupNav = itemPriceGroupNav;
  const itemStore = defineItemStore();
  controller.currentStore = itemStore;
  controller.currentNav = itemNav
  controller.miniHeaders = itemNav.menu.miniHeaders;
  onMounted(() => {
    itemCategoryStore.getMini();

    measureGroupStore.getMini();

  itemStore.getMini();

    // itemPriceGroupStore.getMini();
  });
  return controller;
}
