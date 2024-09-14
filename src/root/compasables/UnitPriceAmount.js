import { watch } from "vue";
import funcs from "@/utils/funcs";
export default function unitPriceAmount(model) {

  watch(
    () => model.quantity,
    (newValue) => {
      funcs.calculateAmountFromUnitPrice(model);
    }
  );

  watch(
    () => model.unitPrice,
    (newValue) => {
      funcs.calculateAmountFromUnitPrice(model);
    }
  );

  return model;
}
