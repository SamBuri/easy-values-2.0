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
      { title: "Loan", key: "loan.displayKey" },
      { title: "Bill Date", key: "billDate", isDate: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Entry Mode", key: "entryMode" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Profile Id", key: "loan.loanApplication.applicantId" },
      { title: "Name", key: "loan.loanApplication.name" },
      { title: "Phone No", key: "loan.loanApplication.primaryPhoneNo" },
      { title: "Bill Date", key: "billDate", isDate: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Loan Id", key: "loan.id" },
      { title: "Invoice Id", key: "invoiceId" },
      { title: "Entry Mode", key: "entryMode" },
      { title: "Branch", key: "branch", label: "Branch", field: "branch" },
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
      {
        title: "Created By",
        key: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        title: "Modified By",
        key: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],

    children: [
      {
        id: "loan.loanBill.view",
        title: "View",
        to: { name: "loanbills" },
      },
      { id: "loan.loanBill.new", title: "New", route: "loanbill", mode: 0, to: { name: "loanbill", params:{mode:0} }, },
      { id: "loan.loanBill.edit", title: "Edit", route: "loanbill", mode: 1, to: { name: "loanbill",params:{mode:0}} },
      {
        id: "loan.loanBill.history",
        title: "History",
        route: "loanbill",
        mode: 2,
      },
    ],
  },
};
export default loanBillNav;
