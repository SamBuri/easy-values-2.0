import rootController from "@/root/RootController";
import subCountyModel from "./SubCountyModel";
import { onMounted } from "vue";
import {defineCountyStore} from "@/profile/county/CountyStore.js"
export default function subCountyController(){

  const controller = rootController(subCountyModel);
const countyStore = defineCountyStore();
controller.countyStore = countyStore;
onMounted(()=>{
countyStore.getMini();


})
  return controller;

}

