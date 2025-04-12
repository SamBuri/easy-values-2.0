import rootController from "@/root/RootController";
import branchModel from "./BranchModel";
import { onMounted } from "vue";
import {defineCompanyStore} from "@/organisation/company/CompanyStore.js"
export default function branchController(){

  const controller = rootController(branchModel);
const companyStore = defineCompanyStore();
controller.companyStore = companyStore;
onMounted(()=>{
companyStore.getMini();


})
  return controller;

}

