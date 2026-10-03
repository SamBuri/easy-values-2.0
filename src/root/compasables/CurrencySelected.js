import { watch } from "vue";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import { defineExchangeRateStore } from "@/lookup/exchangerate/ExchangeRateStore";
import funcs from "@/utils/funcs";

export default function currencySelected(model, callBack) {
  const currencyStore = defineCurrencyStore();
  const exchangeRateStore = defineExchangeRateStore();

  const defaultFunction = (currency, rateObj) => {
    if (currency) {
      model.exchangeRate = rateObj?.buying ?? (rateObj?.baseCurrency ? 1 : 0);
      model.currency = currency.currencyCode || currency.currency || "";
    } else {
      model.exchangeRate = 0;
      model.currency = "";
    }
  };

  watch(
    () => model.currencyId,
    async (newValue) => {
      if (!newValue) {
        if (callBack) callBack(null, null);
        else defaultFunction(null, null);
        funcs.calculateAmount(model);
        return;
      }

      const [currency, rateObj] = await Promise.all([
        currencyStore.getCurrency(newValue),
        exchangeRateStore.getRate(newValue),
      ]);

      const buyingRate = rateObj?.buying ?? (rateObj?.baseCurrency ? 1 : 0);
      const sellingRate = rateObj?.selling ?? (rateObj?.baseCurrency ? 1 : 0);

      if (currency) {
        currency.buying = buyingRate;
        currency.selling = sellingRate;
        currency.baseCurrency = !!rateObj?.baseCurrency;
        if (!currency.currency && currency.currencyCode) {
          currency.currency = currency.currencyCode;
        }
      }

      if (callBack) callBack(currency, rateObj);
      else defaultFunction(currency, rateObj);

      funcs.calculateAmount(model);
    }
  );

  return model;
}
