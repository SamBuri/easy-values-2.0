import { watch } from "vue";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import funcs from "@/utils/funcs";
export default function currencySelected(model, callBack){
  const currencyStore = defineCurrencyStore();

  const defaultFunction=(currency)=>{
    if (currency) {
      model.exchangeRate = currency.buying;

    } else {
      model.exchangeRate= 0;
    }

  }
  watch(
    () => model.currencyId,
    async (newValue) => {
      let currency = await currencyStore.getCurrency(newValue);
      if(callBack) callBack(currency);
      else defaultFunction(currency);
      funcs.calculateAmount(model);

    }
  );

  return model;

}
