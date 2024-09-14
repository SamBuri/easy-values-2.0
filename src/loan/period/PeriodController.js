import rootController from "@/root/RootController";
import periodModel from "./PeriodModel";
export default function periodController(){

  const controller = rootController(periodModel);
  return controller;

}

