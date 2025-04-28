import rootController from "@/root/RootController";
import roleModel from "./RoleModel";
export default function roleController(){

  const controller = rootController(roleModel);
  return controller;

}

