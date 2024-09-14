import Loan from "./Loan.vue";
import Loans from "./Loans.vue";
const loanNav = {
  routes: [
    {
      path: "/loan/:mode",
      name: "loan",
      component: Loan,
      meta: { auth: true },
    },
    {
      path: "/loans",
      name: "loans",
      component: Loans,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loan",
    title: "Loans",
    component: Loan,
    path: "loans",
    width: "1000px",

  miniHeaders: [
      { title: "Loan Id", key: "id" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
     { title: "Balance", key: "balance", isNumeric: true },


    ],
    editHeaders: [
      { title: "Loan Application", key: "loanApplication.id" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Account", key: "accountId" },
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Business Section", key: "customerTypeId" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
      { title: "Loan Product", key: "loanProduct" },
      { title: "Applied For Amount", key: "appliedForAmount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategory" },
      { title: "Collateral Desc", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Loan Id", key: "id" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Account", key: "accountId" },
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Business Section", key: "customerTypeId" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
      { title: "Loan Product", key: "loanProduct" },
      { title: "Applied For Amount", key: "appliedForAmount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategory" },
      { title: "Collateral Desc", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    children: [
      { id: "loan.loan.view", title: "View", to: { name: "loans" } },
      {
        id: "loan.loan.new",
        title: "New",
        to: { name: "loan", params: { mode: 0 } },
      },
      {
        id: "loan.loan.edit",
        title: "Edit",
        to: { name: "loan", params: { mode: 1 } },
      },
      {
        id: "loan.loan.history",
        title: "History",
        to: { name: "loan", params: { mode: 2 } },
      },
    ],
  },
};
export default loanNav;
