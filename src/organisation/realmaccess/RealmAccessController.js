import rootController from "@/root/RootController";
import realmAccessModel from "./RealmAccessModel";
export default function realmAccessController(){

  const controller = rootController(realmAccessModel);
  return controller;

}

