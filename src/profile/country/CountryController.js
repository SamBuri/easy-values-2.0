import rootController from "@/root/RootController";
import countryModel from "./CountryModel";
export default function countryController(){

  const controller = rootController(countryModel);
  return controller;

}

