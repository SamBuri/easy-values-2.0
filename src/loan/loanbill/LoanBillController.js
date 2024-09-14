import rootController from "@/root/RootController";
import loanBillModel from "./LoanBillModel";
import { onMounted, watch, ref, computed } from "vue";
import loanNav from "@/loan/loan/LoanNav.js";
import { defineLoanStore } from "@/loan/loan/LoanStore.js";
import loanBillDetailNav from "@/loan/loanbilldetail/LoanBillDetailNav.js";
import loanBillDetailController from "@/loan/loanbilldetail/LoanBillDetailController.js";
import { defineLoanBillDetailStore } from "@/loan/loanbilldetail/LoanBillDetailStore.js";
import loanController from "../loan/LoanController";
import defineBillDetailsModifier from "@/root/compasables/BillDetailModifier";
import defineBillDetailsModifierFunc from "@/root/compasables/BillDetailModifierFunc";

export default function loanBillController() {
  const controller = rootController(loanBillModel);

  const loanIdOk = (data) => {
    if (data) {
      controller.model.value.loanId = data.id;
    }
  };
  controller.loanIdOk = loanIdOk;
  const loanStore = defineLoanStore();
  controller.loanStore = loanStore;
  const loanBillDetailStore = defineLoanBillDetailStore();
  controller.loanBillDetailStore = loanBillDetailStore;
  const { setData: setLoanBillDetailData } = loanBillDetailController();
  controller.setLoanBillDetailData = setLoanBillDetailData;
  controller.loanNav = loanNav;
  controller.loanBillDetailNav = loanBillDetailNav;
  onMounted(() => {
    loanStore.getMini();
  });

  const model = controller.model.value;
  const lcontroller = loanController();

  watch(
    () => model.loanId,
    async (newValue) => {
      model.balance = 0;
      model.name = "";
      if (!newValue) return;
      let loan = await lcontroller.getData(newValue);
      if (loan) {
        model.balance = loan.balance;
        model.name = loan.loanApplication.name;
      }
    }
  );

  const billDetailsChanged = (items) => {
    defineBillDetailsModifierFunc(model, items, model.balance);
  };

  controller.billDetailsChanged = billDetailsChanged;

  defineBillDetailsModifier(() => model.loanBillDetails, "balance", model);

  return controller;
}
