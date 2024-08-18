import { watch } from "vue";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import funcs from "@/utils/funcs";
export default function customCurrencySelected(prop, model, callBack) {
  const currencyStore = defineCurrencyStore();

  const defaultFunction = (currency) => {

    if (currency) {
      model.exchangeRate = currency.buying;
    } else {
      model.exchangeRate = 0;
    }
  };
  watch(prop, async (newValue) => {
     let currency = await currencyStore.getCurrency(newValue);
      if (callBack) callBack(currency);
      else defaultFunction(currency);
      funcs.calculateAmount(model);
    }
  );

}
