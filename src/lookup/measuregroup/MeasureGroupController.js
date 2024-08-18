import rootController from "@/root/RootController";
import measureGroupModel from "./MeasureGroupModel";
import { onMounted } from "vue";
import measureRelationNav from "@/lookup/measurerelation/MeasureRelationNav.js";
import { defineMeasureRelationStore } from "@/lookup/measurerelation/MeasureRelationStore.js";
export default function measureGroupController() {
  const controller = rootController(measureGroupModel);
  const measureRelationStore = defineMeasureRelationStore();
  controller.measureRelationStore = measureRelationStore;
  onMounted(() => {
    measureRelationStore.getMini();
  });
  return controller;
}
