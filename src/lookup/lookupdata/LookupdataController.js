import rootController from "@/root/RootController";
import lookupDataModel from "./LookupDataModel";

export default function lookupDataController(){

  const controller = rootController(lookupDataModel);

  return controller;

}
