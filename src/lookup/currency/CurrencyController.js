import rootController from "@/root/RootController";
import currencyModel from "./CurrencyModel";
export default function currencyController(){

  const controller = rootController(currencyModel);
  return controller;

}

