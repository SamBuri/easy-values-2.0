import rootController from "@/root/RootController";
import loanApprovalModel from "./LoanApprovalModel";
import { onMounted, watch } from "vue";
import loanApplicationNav from "@/loan/loanapplication/LoanApplicationNav.js"
import {defineLoanApplicationStore} from "@/loan/loanapplication/LoanApplicationStore.js"
import {defineLookupStore} from "@/lookup/LookupStore.js"
import loanApplicationController from "../loanapplication/LoanApplicationController";
import loanApplicationSelected from "@/root/compasables/LoanApplicationSelected";
export default function loanApprovalController() {
  const controller = rootController(loanApprovalModel);
  const loanApplicationStore = defineLoanApplicationStore();
  controller.loanApplicationStore = loanApplicationStore;
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;

  const loanApplicationIdOk = (data) => {
    if (data) {

      controller.model.value.loanApplicationId= data.id;

    }
  };
controller.loanApplicationIdOk = loanApplicationIdOk;
controller.loanApplicationNav=loanApplicationNav;

  onMounted(() => {
    loanApplicationStore.getPending();
    model.approvedBy=controller.authStore.user.fullName;
  });

  const model = controller.model.value;

  // const lapplicationController = loanApplicationController();

  // watch(
  //   () => model.loanApplicationId,
  //   async (newValue) => {
  //     const loanApp = await lapplicationController.getData(newValue);
  //     model.loanProductName = "";
  //     model.amount = "";
  //     model.collateralCategory = "";
  //     model.collateralDesc = "";
  //     model.estimatedCollateralValue = "";
  //     model.loanProduct = "";
  //     model.appliedForAmount;


  //     if (loanApp) {

  //       model.amount = loanApp.amount;
  //       model.collateralCategory = loanApp.collateralCategory;
  //       model.collateralDesc = loanApp.collateralDesc;
  //       model.estimatedCollateralValue = loanApp.estimatedCollateralValue
  //       model. loanProduct = loanApp.loanProduct.productName;
  //       model.appliedForAmount = loanApp.amount;
  //     }
  //   }
  // );

  loanApplicationSelected(()=>model.loanApplicationId, model);
  return controller;
}
