import rootController from "@/root/RootController";
import loanModel from "./LoanModel";
import { onMounted, computed, watch } from "vue";
import loanApplicationNav from "@/loan/loanapplication/LoanApplicationNav.js";
import { defineLoanApplicationStore } from "@/loan/loanapplication/LoanApplicationStore.js";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore.js";
import { defineLookupDataStore } from "@/lookup/lookupdata/LookupDataStore.js";
import loanApplicationSelected from "@/root/compasables/LoanApplicationSelected";
import funcs from "@/utils/funcs";
import customBankAccountSelected from "@/root/compasables/CustomBankAccountSelected";
import defineBillDetailsModifierFunc from "@/root/compasables/BillDetailModifierFunc";
export default function loanController() {
  const controller = rootController(loanModel);
  const loanApplicationIdOk = (data) => {
    if (data) {
      controller.model.value.loanApplicationId = data.id;
    }
  };
  controller.loanApplicationIdOk = loanApplicationIdOk;
  const loanApplicationStore = defineLoanApplicationStore();
  controller.loanApplicationStore = loanApplicationStore;
  const bankAccountStore = defineBankAccountStore();
  controller.bankAccountStore = bankAccountStore;
  const lookupDataStore = defineLookupDataStore();
  controller.lookupDataStore = lookupDataStore;
  controller.loanApplicationNav = loanApplicationNav;
  onMounted(() => {
    loanApplicationStore.getApproved();

    bankAccountStore.getMini();

    lookupDataStore.getBusinessSections();
  });

  const model = controller.model.value;
  loanApplicationSelected(() => model.loanApplicationId, model, (v)=>model.principle=v.approvedAmount);
  // defineBillDetailsModifier(()=>model.loanProduct, model.loanProduct.loanProductCharges,
  //  "approvedAmount", model, (v)=>model.balance=v.amount)

  // const loanProduct = computed(()=>model.loanProduct)

  // const calculateBalance = (charges) => {
  //   if (!charges) model.balance = 0;

  //   let loanBalance = model.approvedAmount;

  //   loanBalance = loanBalance < 0 ? 0 : loanBalance;
  //   model.principle = loanBalance
  //   let totalBill = 0;
  //   const percentageMethod = "Percentage";
  //   for (let charge of charges) {
  //     console.log("Charge", charge);
  //     let unitPrice = 0;

  //     let price = Number(charge.unitPrice);
  //     if (charge.determiningMethod === percentageMethod) {
  //       unitPrice = Math.ceil(price * loanBalance * 0.01);
  //     } else {
  //       unitPrice = price;
  //     }

  //     charge.unitPrice = unitPrice;
  //     let quantity = Number(charge.quantity);
  //     let amount = Math.ceil(unitPrice * quantity);
  //     charge.amount = amount;
  //     totalBill += amount;
  //   }
  //   console.log("Balance", totalBill);
  //   model.balance = Number(totalBill);
  // };

  const setNextPayDate = () => {
    model.nextPaymentDate = null;
    let loanDate = model.loanDate;
    if (!loanDate) return;
    let loanProduct = model.loanProduct;
    if (!loanProduct) return;
    if (model.loanProduct) {
      model.nextPaymentDate = funcs.formatDate(
        funcs.addDays(loanDate, loanProduct.paymentPeriod.days)
      );
      console.log(model.nextPaymentDate);
    }
  };


  watch(
    () => model.loanProduct,
    (newValue) => {

      if (!newValue) return;
      let charges = newValue.loanProductCharges || [];
      defineBillDetailsModifierFunc(model, charges, model.approvedAmount,
        (v)=>model.balance=v.amount
      );
      setNextPayDate();
    }
  );

  watch(
    () => model.loanDate,
    () => {
      setNextPayDate();
    }
  );


  customBankAccountSelected(()=>model.accountId, model)




  return controller;
}
