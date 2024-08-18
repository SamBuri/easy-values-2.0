import rootController from "@/root/RootController";
import itemPriceGroupModel from "./ItemPriceGroupModel";
import { onMounted, watch } from "vue";
import { defineItemStore } from "@/lookup/item/ItemStore.js";
import { defineLookupDataStore } from "@/lookup/lookupdata/LookupDataStore.js";
export default function itemPriceGroupController() {
  const controller = rootController(itemPriceGroupModel);
  const itemStore = defineItemStore();
  controller.itemStore = itemStore;
  const lookupDataStore = defineLookupDataStore();
  controller.lookupDataStore = lookupDataStore;

  onMounted(() => {
    itemStore.getMini();

    lookupDataStore.getPriceGroups();
  });

  const model = controller.model;
  watch(()=>model.value.priceGroupId, (v)=>{
   let data = lookupDataStore.priceGroups.filter(t=>t.id===v);
     let priceGroup = data.length===0?{}:data[0];
     model.value.priceGroup = priceGroup;
  })
  return controller;
}
