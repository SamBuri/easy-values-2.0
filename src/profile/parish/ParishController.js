import rootController from "@/root/RootController";
import parishModel from "./ParishModel";
import { onMounted } from "vue";
import {defineCountryStore} from "@/profile/country/CountryStore.js"
import {defineDistrictStore} from "@/profile/district/DistrictStore.js"
import {defineCountyStore} from "@/profile/county/CountyStore.js"
import {defineSubCountyStore} from "@/profile/subcounty/SubCountyStore.js"
export default function parishController(){

  const controller = rootController(parishModel);
const countryStore = defineCountryStore();
controller.countryStore = countryStore;
const districtStore = defineDistrictStore();
controller.districtStore = districtStore;
const countyStore = defineCountyStore();
controller.countyStore = countyStore;
const subCountyStore = defineSubCountyStore();
controller.subCountyStore = subCountyStore;
onMounted(()=>{
countryStore.getMini();

districtStore.getMini();

countyStore.getMini();

subCountyStore.getMini();


})
  return controller;

}

