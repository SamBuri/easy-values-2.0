import rootController from "@/root/RootController";
import permsissionModel from "./PermsissionModel";
export default function permsissionController(){

  const controller = rootController(permsissionModel);
  return controller;

}

