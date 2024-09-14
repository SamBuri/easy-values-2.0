import rootController from "@/root/RootController";
import loanProductModel from "./LoanProductModel";
import { onMounted } from "vue";
import { defineLoanStore } from "@/loan/LoanStore.js";
import { definePeriodStore } from "@/loan/period/PeriodStore.js";
import loanProductChargeNav from "@/loan/loanproductcharge/LoanProductChargeNav.js";
import loanProductChargeController from "@/loan/loanproductcharge/LoanProductChargeController.js";
import { defineLoanProductChargeStore } from "@/loan/loanproductcharge/LoanProductChargeStore.js";
export default function loanProductController() {
  const controller = rootController(loanProductModel);
  const loanStore = defineLoanStore();
  controller.loanStore = loanStore;
  const periodStore = definePeriodStore();
  controller.periodStore = periodStore;
  const loanProductChargeStore = defineLoanProductChargeStore();
  controller.loanProductChargeStore = loanProductChargeStore;
  const { setData: setLoanProductChargeData } = loanProductChargeController();
  controller.setLoanProductChargeData = setLoanProductChargeData;
  controller.loanProductChargeNav = loanProductChargeNav;
  onMounted(() => {
    loanStore.getInterestMethods();

    periodStore.getMini();

  });
  return controller;
}
