import LoanBill from "./LoanBill.vue";
import LoanBills from "./LoanBills.vue";
const loanBillNav = {
  routes: [
    {
      path: "/loanbill/:mode",
      name: "loanbill",
      component: LoanBill,
      meta: { auth: true },
    },
    {
      path: "/loanbills",
      name: "loanbills",
      component: LoanBills,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loanbill",
    title: "Loan Bills",
    component: LoanBill,
    path: "loanbills",
    width: "700px",
    editHeaders: [
      { title: "Loan", key: "loan.id" },
      { title: "Bill Date", key: "billDate", isDate: true },
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
      { title: "Loan", key: "loan.id" },
      { title: "Profile Id", key: "loan.loanApplication.applicantId" },
      { title: "Name", key: "loan.loanApplication.name" },
      { title: "Bill Date", key: "billDate", isDate: true },
      { title: "Invoice Id", key: "invoiceId" },
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
    children: [
      { id: "loan.loanBill.view", title: "View", icon: "mdi-table", to: { name: "loanbills" } },
      {
        id: "loan.loanBill.new",
        title: "New",
        icon: "mdi-plus-circle",
        to: { name: "loanbill",  params: { mode: 0 } },
      },
     
      {
        id: "loan.loanBill.history",
        title: "History",
        icon: "mdi-history",
        to: { name: "loanbill",  params: { mode: 2 } },
      },
    ],
  },
};
export default loanBillNav;
