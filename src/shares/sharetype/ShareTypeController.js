import rootController from "@/root/RootController";
import shareTypeModel from "./ShareTypeModel";
export default function shareTypeController(){

  const controller = rootController(shareTypeModel);
  return controller;

}

