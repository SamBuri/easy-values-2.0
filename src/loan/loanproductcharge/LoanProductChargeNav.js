import LoanProductCharge from "./LoanProductCharge.vue";
import LoanProductCharges from "./LoanProductCharges.vue";
const loanProductChargeNav = {
  routes: [
    {
      path: "/loanproductcharge/:mode",
      name: "loanproductcharge",
      component: LoanProductCharge,
      meta: { auth: true },
    },
    {
      path: "/loanproductcharges",
      name: "loanproductcharges",
      component: LoanProductCharges,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loanproductcharge",
    title: "Loan Product Charges",
    component: LoanProductCharge,
    path: "loanproductcharges",
    width: "700px",
    miniHeaders: [
      { title: "Item", key: "itemName" },
      { title: "Determining Method", key: "determiningMethod" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Charge", key: "charge", isNumeric: true },
      { title: "Bill Duration", key: "billDuration", isNumeric: true },
      { title: "Recurrent", key: "recurrent" },
    ],
    editHeaders: [
      { title: "Item", key: "itemName" },
      { title: "Determining Method", key: "determiningMethod" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Charge", key: "charge", isNumeric: true },
      { title: "Bill Duration", key: "billDuration", isNumeric: true },
      { title: "Recurrent", key: "recurrent" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Loan Product", key: "loanProduct.id" },
      { title: "Item", key: "itemId" },
      { title: "Determining Method", key: "determiningMethod" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Charge", key: "charge", isNumeric: true },
      { title: "Bill Duration", key: "billDuration", isNumeric: true },
      { title: "Recurrent", key: "recurrent" },
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
        id: "loan.loanProductCharge.view",
        title: "View",
        to: { name: "loanproductcharges" },
      },
      {
        id: "loan.loanProductCharge.new",
        title: "New",
        to: { name: "loanproductcharge", params: { mode: 0 } },
      },
      {
        id: "loan.loanProductCharge.edit",
        title: "Edit",
        to: { name: "loanproductcharge", params: { mode: 1 } },
      },
      {
        id: "loan.loanProductCharge.history",
        title: "History",
        to: { name: "loanproductcharge", params: { mode: 2 } },
      },
    ],
  },
};
export default loanProductChargeNav;
