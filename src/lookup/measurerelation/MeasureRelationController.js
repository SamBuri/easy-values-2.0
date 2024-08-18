import { onMounted } from "vue";
import rootController from "@/root/RootController";
import measureRelationModel from "./MeasureRelationModel";
import { defineMeasureGroupStore } from "@/lookup/measuregroup/MeasureGroupStore.js";
import { defineLookupStore } from "@/lookup/LookupStore.js";
export default function measureRelationController() {
  const controller = rootController(measureRelationModel);
  const measureGroupStore = defineMeasureGroupStore();
  controller.measureGroupStore = measureGroupStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  onMounted(() => {
    measureGroupStore.getMini();

    lookupStore.getUnitMeasureUsages();
  });
  return controller;
}
