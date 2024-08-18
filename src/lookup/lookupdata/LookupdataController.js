import rootController from "@/root/RootController";
import lookupDataModel from "./LookupDataModel";
import rootOptions from "@/root/RootOptions";
export default function lookupDataController(){

  const controller = rootController(lookupDataModel);
  rootOptions.showDelete = true;
  return controller;

}
