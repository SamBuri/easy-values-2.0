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
      { text: "Product Name", value: "productName" },
      { text: "Interest Rate", value: "interestRate" },
      { text: "Interest Method", value: "interestMethod" },
      { text: "Least Security Scale", value: "leastSecurityScale" },
      { text: "Interest Period", value: "interestPeriod.periodName" },
      { text: "Payment Period", value: "paymentPeriod.periodName" },
      { text: "Max Periods", value: "maxPeriods" },
      { text: "Min Amount", value: "minAmount", isNumeric: true },
      { text: "Max Amount", value: "maxAmount", isNumeric: true },
      { text: "Pre Remainder", value: "preRemainder" },
      { text: "Fine Days", value: "fineDays" },
      { text: "Red Flag After", value: "redFlagAfter" },
      { text: "Hidden", value: "hidden" },
      { text: "Actions", value: "actions" },
    ],
    headers: [
      {
        text: "Id",
        align: "start",
        // sortable: false,
        value: "id",
      },
      { text: "Product Name", value: "productName" },
      { text: "Interest Rate", value: "interestRate" },
      { text: "Interest Method", value: "interestMethod" },
      { text: "Least Security Scale", value: "leastSecurityScale" },
      { text: "Interest Period", value: "interestPeriod.periodName" },
      { text: "Payment Period", value: "paymentPeriod.periodName" },
      { text: "Max Periods", value: "maxPeriods" },
      { text: "Min Amount", value: "minAmount", isNumeric: true },
      { text: "Max Amount", value: "maxAmount", isNumeric: true },
      { text: "Pre Remainder", value: "preRemainder" },
      { text: "Fine Days", value: "fineDays" },
      { text: "Red Flag After", value: "redFlagAfter" },
      { text: "Hidden", value: "hidden" },
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
        to: { name: "loanproduct", param: { mode: 0 } },
      },
      {
        id: "loan.loanProduct.edit",
        title: "Edit",
        to: { name: "loanproduct", param: { mode: 1 } },
      },
      {
        id: "loan.loanProduct.history",
        title: "History",
        to: { name: "loanproduct", param: { mode: 2 } },
      },
    ],
  },
};
export default loanProductNav;
