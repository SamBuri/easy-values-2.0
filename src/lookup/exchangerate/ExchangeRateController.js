import rootController from "@/root/RootController";
import exchangeRateModel from "./ExchangeRateModel";
import { defineCurrencyStore } from "../currency/CurrencyStore";

export default function exchangeRateController() {
  const controller = rootController(exchangeRateModel);
  const currencyStore = defineCurrencyStore();

  return {
    ...controller,
    currencyStore
};
}
