import Loan from "./Loan.vue";
import Loans from "./Loans.vue";
import LoanDashboard from "./LoanDashboard.vue";
import loan from "./loan";
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
    {
      path: "/loandashboard",
      name: "loandashboard",
      component: LoanDashboard,
      meta: { auth: true },
    },
  ],

  // reports: [
  //         ...reportsNavData.routes
  // ],

  menu: {
    id: "loan.loan",
    title: "Loans",
    component: Loan,
    path: "loans",
    width: "1000px",
    editHeaders: [
      { title: "Loan Application", key: "loanApplication.name" },
      { title: "Principal", key: "principal", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Account", key: "accountId.displayKey" },
      { title: "Account", key: "account" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
      { title: "Loan Status", key: "loanStatus" },
      { title: "Loan Bill Details", key: "loanBillDetails.displayKey" },
      { title: "Actions", key: "actions" },
    ],
    midHeaders: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Profile Id", key: "loanApplication.applicantId" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Phone No", key: "loanApplication.primaryPhoneNo" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Loan Date", key: "loanDate" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Last Payment Date", key: "lastPaymentDate" },
      { title: "Loan Status", key: "loanStatus" },
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
    ],

    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Profile Id", key: "loanApplication.applicantId" },
      { title: "Application Id", key: "loanApplication.id" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Phone No", key: "loanApplication.primaryPhoneNo" },
      { title: "Other Phone Nos", key: "loanApplication.otherPhoneNos" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Last Payment Date", key: "lastPaymentDate", isDate: true },
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
      {
        title: "Last Engagement Date",
        key: "lastEngagementDate",
        isDate: true,
      },
      {
        title: "Last Transition Date",
        key: "lastTransitionDate",
        isDate: true,
      },
      { title: "Last Bill Date", key: "lastBillDate", isDate: true },
      {
        title: "Next Engagement Date",
        key: "nextEngagementDate",
        isDate: true,
      },
      { title: "Loan Status", key: "loanStatus" },
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
      { title: "Customer Type", key: "customerType" },
      { title: "Guarantors", key: "loanApplication.guarantors[0].name" },
      {
        title: "Guarantor Phone No",
        key: "loanApplication.guarantors[0].primaryPhoneNo",
      },
      {
        title: "Guarantor Other Phone No",
        key: "loanApplication.guarantors[0].otherPhoneNos",
      },
      {
        title: "Collateral Category",
        key: "loanApplication.collateralCategory",
      },
      {
        title: "Collateral Description",
        key: "loanApplication.collateralDesc",
      },
      { title: "BL Posted", key: "blPosted" },
      { title: "GL Posted", key: "glPosted" },
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

    miniHeaders: [
      {
        title: "Id",
        align: "start",
        key: "id",
      },
      { title: "Name", key: "loanApplication.name" },
      { title: "Phone No", key: "loanApplication.primaryPhoneNo" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Address", key: "address" },
    ],
    children: [
      {
        id: "loan.loan.view",
        title: "View",
        route: "loans",
        to: { name: "loans" },
      },
      {
        id: "loan.loan.new",
        title: "New",
        route: "loan",
        mode: 0,
        to: { name: "loan", params: { mode: 0 } },
      },
      {
        id: "loan.loan.history",
        title: "History",
        route: "loan",
        mode: 2,
        to: { name: "loan", params: { mode: 2 } },
      },
      // reportsNavData.nav
    ],
  },
};
export default loanNav;
