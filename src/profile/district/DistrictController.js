import rootController from "@/root/RootController";
import districtModel from "./DistrictModel";
import { onMounted } from "vue";
import {defineCountryStore} from "@/profile/country/CountryStore.js"
export default function districtController(){

  const controller = rootController(districtModel);
const countryStore = defineCountryStore();
controller.countryStore = countryStore;
onMounted(()=>{
countryStore.getMini();


})
  return controller;

}

