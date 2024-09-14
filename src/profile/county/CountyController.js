import rootController from "@/root/RootController";
import countyModel from "./CountyModel";
import { onMounted } from "vue";
import {defineDistrictStore} from "@/profile/district/DistrictStore.js"
export default function countyController(){

  const controller = rootController(countyModel);
const districtStore = defineDistrictStore();
controller.districtStore = districtStore;
onMounted(()=>{
districtStore.getMini();


})
  return controller;

}

