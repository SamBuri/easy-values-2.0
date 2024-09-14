import LoanProduct from "./LoanProduct.vue";
import LoanProducts from "./LoanProducts.vue";
const loanProductNav = {
  routes: [
    {
      path: "/loanproduct/:mode",
      name: "loanproduct",
      component: LoanProduct,
      meta: { auth: true },
    },
    {
      path: "/loanproducts",
      name: "loanproducts",
      component: LoanProducts,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loanproduct",
    title: "Loan Products",
    component: LoanProduct,
    path: "loanproducts",
    width: "1000px",
    editHeaders: [
      { title: "Product Name", key: "productName" },
      { title: "Interest Rate", key: "interestRate", isNumeric: true },
      { title: "Interest Method", key: "interestMethod" },
      {
        title: "Least Security Scale",
        key: "leastSecurityScale",
        isNumeric: true,
      },
      { title: "Interest Period", key: "interestPeriod.id" },
      { title: "Payment Period", key: "paymentPeriod.id" },
      { title: "Max Periods", key: "maxPeriods", isNumeric: true },
      { title: "Min Amount", key: "minAmount", isNumeric: true },
      { title: "Max Amount", key: "maxAmount", isNumeric: true },
      { title: "Pre Remainder", key: "preRemainder", isNumeric: true },
      { title: "Fine Days", key: "fineDays", isNumeric: true },
      { title: "Red Flag After", key: "redFlagAfter", isNumeric: true },
      { title: "Hidden", key: "hidden" },
      { title: "Loan Product Charges", key: "loanProductChargesId" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Product Name", key: "productName" },
      { title: "Interest Rate", key: "interestRate", isNumeric: true },
      { title: "Interest Method", key: "interestMethod" },
      {
        title: "Least Security Scale",
        key: "leastSecurityScale",
        isNumeric: true,
      },
      { title: "Interest Period", key: "interestPeriod.periodName" },
      { title: "Payment Period", key: "paymentPeriod.periodName" },
      { title: "Max Periods", key: "maxPeriods", isNumeric: true },
      { title: "Min Amount", key: "minAmount", isNumeric: true },
      { title: "Max Amount", key: "maxAmount", isNumeric: true },
      { title: "Pre Remainder", key: "preRemainder", isNumeric: true },
      { title: "Fine Days", key: "fineDays", isNumeric: true },
      { title: "Red Flag After", key: "redFlagAfter", isNumeric: true },
      { title: "Hidden", key: "hidden" },
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
      {
        id: "loan.loanProduct.view",
        title: "View",
        to: { name: "loanproducts" },
      },
      {
        id: "loan.loanProduct.new",
        title: "New",
        to: { name: "loanproduct", params: { mode: 0 } },
      },
      {
        id: "loan.loanProduct.edit",
        title: "Edit",
        to: { name: "loanproduct", params: { mode: 1 } },
      },
      {
        id: "loan.loanProduct.history",
        title: "History",
        to: { name: "loanproduct", params: { mode: 2 } },
      },
    ],
  },
};
export default loanProductNav;
