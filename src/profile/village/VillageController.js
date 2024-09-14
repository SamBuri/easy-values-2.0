import rootController from "@/root/RootController";
import villageModel from "./VillageModel";
import { onMounted } from "vue";
import {defineCountryStore} from "@/profile/country/CountryStore.js"
import {defineDistrictStore} from "@/profile/district/DistrictStore.js"
import {defineCountyStore} from "@/profile/county/CountyStore.js"
import {defineSubCountyStore} from "@/profile/subcounty/SubCountyStore.js"
import {defineParishStore} from "@/profile/parish/ParishStore.js"
export default function villageController(){

  const controller = rootController(villageModel);
const countryStore = defineCountryStore();
controller.countryStore = countryStore;
const districtStore = defineDistrictStore();
controller.districtStore = districtStore;
const countyStore = defineCountyStore();
controller.countyStore = countyStore;
const subCountyStore = defineSubCountyStore();
controller.subCountyStore = subCountyStore;
const parishStore = defineParishStore();
controller.parishStore = parishStore;
onMounted(()=>{
countryStore.getMini();

districtStore.getMini();

countyStore.getMini();

subCountyStore.getMini();

parishStore.getMini();


})
  return controller;

}

