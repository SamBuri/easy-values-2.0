import rootController from "@/root/RootController";
import financialPeriodModel from "./FinancialPeriodModel";
export default function financialPeriodController(){

  const controller = rootController(financialPeriodModel);
  return controller;

}

