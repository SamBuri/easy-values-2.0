import { watch } from "vue";
import funcs from "@/utils/funcs";
export default function unitCostAmount(model) {

  watch(
    () => model.unitCost,
    (newValue) => {
      funcs.calculateAmountFromUnitCost(model);
    }
  );

  watch(
    () => model.quantity,
    (newValue) => {
      funcs.calculateAmountFromUnitCost(model);
    }
  );

  return model;
}
