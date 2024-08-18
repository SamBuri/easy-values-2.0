import rootController from "@/root/RootController";
import accountModel from "./AccountModel";
import { onMounted, watch, watchEffect } from "vue";
import { defineLookupStore } from "@/lookup/LookupStore.js";
import { defineAccountCategoryStore } from "@/accounting/accountcategory/AccountCategoryStore.js";
export default function accountController() {
  const controller = rootController(accountModel);
  const lookupStore = defineLookupStore();
  controller.lookupStore = lookupStore;
  const accountCategoryStore = defineAccountCategoryStore();
  controller.accountCategoryStore = accountCategoryStore;
  onMounted(() => {
    lookupStore.getAccountTypes();

    lookupStore.getAccountActions();

    lookupStore.getAccountReports();
  });

  const assetAccountType = "Asset";
  const incomeAccountType = "Income";
  const expenseAccountType = "Expense";

  const model = controller.model;
  const setAccountAction = () => {
    let accountType = model.value.accountType;
    let isContra = model.value.contra;
    let debitAccountAction = "Debit";
    let creditAccountAction = "Credit";

    if (accountType == assetAccountType || accountType == expenseAccountType) {
      model.value.accountAction = debitAccountAction;
      if (isContra) {
        model.value.accountAction = creditAccountAction;
      }
    } else {
      model.value.accountAction = creditAccountAction;
      if (isContra) {
        model.value.accountAction = debitAccountAction;
      }
    }
  };

  const setAccountReport = () => {
    let accountType = model.value.accountType;
    let financialStatementAccountReport = "Financial_Statement";
    let balanceSheetAccountReport = "Balance_Sheet";
    // let contra = model.value.contra

    if (accountType == incomeAccountType || accountType == expenseAccountType) {
      model.value.accountReport = financialStatementAccountReport;
      // if (contra) {
      //   model.value.accountReport = balanceSheetAccountReport
      // }
    } else {
      model.value.accountReport = balanceSheetAccountReport;
      // if (contra) {
      //   model.value.accountReport = financialStatementAccountReport;
      // }
    }
  };

  const setControls = () => {
    setAccountAction();
    setAccountReport();
  };

  watch(
    () => model.value.accountType,
    (value) => {
      model.value.accountCategoryId = "";
      accountCategoryStore.getAccountCategoriesByAccountType(value);
    }
  );

  watchEffect(() => setControls());

  return controller;
}
