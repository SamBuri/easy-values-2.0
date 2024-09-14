import rootController from "@/root/RootController";
import loanApplicationModel from "./LoanApplicationModel";
import { onMounted } from "vue";
import profileNav from "@/profile/profile/ProfileNav.js"
import {defineProfileStore} from "@/profile/profile/ProfileStore.js"
import {defineLookupDataStore} from "@/lookup/lookupdata/LookupDataStore.js"
import {defineLoanProductStore} from "@/loan/loanproduct/LoanProductStore.js"
import customProfileSelected from "@/root/compasables/CustomProfileSelected";
export default function loanApplicationController(){

  const controller = rootController(loanApplicationModel);
const applicantOk = (data) => {
    if (data) {

      controller.model.value.applicantId = data.id;

    }
  };
controller.applicantOk = applicantOk;
const guarantorsOk = (data) => {
    if (data) {

      controller.model.value.guarantors.push(data.id);

    }
  };
controller.guarantorsOk = guarantorsOk;
const profileStore = defineProfileStore();
controller.profileStore = profileStore;
const lookupDataStore = defineLookupDataStore();
controller.lookupDataStore = lookupDataStore;
const loanProductStore = defineLoanProductStore();
controller.loanProductStore = loanProductStore;
controller.profileNav=profileNav;
onMounted(()=>{
profileStore.getMini();

lookupDataStore.getCollateralCategories();

loanProductStore.getMini();


})
const model = controller.model.value;
customProfileSelected(()=>model.applicantId, model);
  return controller;

}

