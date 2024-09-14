import LoanBillDetail from "./LoanBillDetail.vue";
import LoanBillDetails from "./LoanBillDetails.vue";
const loanBillDetailNav = {
  routes: [
    {
      path: "/loanbilldetail/:mode",
      name: "loanbilldetail",
      component: LoanBillDetail,
      meta: { auth: true },
    },
    {
      path: "/loanbilldetails",
      name: "loanbilldetails",
      component: LoanBillDetails,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loanbilldetail",
    title: "Loan Bill Details",
    component: LoanBillDetail,
    path: "loanbilldetails",
    to: { name: "loanbilldetails" },
    width: "700px",
    editHeaders: [

      { title: "Item Name", key: "itemName" },
      { title: "Determining Method", key: "determiningMethod" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Charge", key: "charge", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Item", key: "itemId" },
      { title: "Item Name", key: "itemName" },
      { title: "Determining Method", key: "determiningMethod" },
      { title: "Quantity", key: "quantity", isNumeric: true },
      { title: "Charge", key: "charge", isNumeric: true },
      { title: "Unit Price", key: "unitPrice", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
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

  },
};
export default loanBillDetailNav;
