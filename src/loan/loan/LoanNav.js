import Loan from "./Loan.vue";
import Loans from "./Loans.vue";
import { navUtils } from 'saburi-vue-utils';

const loanNav = {
  // routes: [
  //   {
  //     path: "/loan/:mode",
  //     name: "loan",
  //     component: Loan,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/loans",
  //     name: "loans",
  //     component: Loans,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("loan", Loan, "loans", Loans, true),
  menu: {
    id: "loan.loan",
    title: "Loans",
    component: Loan,
    path: "loans",
    requires: navUtils.allRoles("loans"),
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
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
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
    midHeaders: [
      
      { title: "Loan Id", key: "id" },
      { title: "Profile Id", key: "loanApplication.applicantId" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Loan Status", key: "loanStatus" },
      
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
      
      { title: "Collateral Category", key: "loanApplication.collateralCategory" },
      { title: "Collateral Desc", key: "loanApplication.collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "loanApplication.estimatedCollateralValue",
        isNumeric: true,
      }],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Loan Id", key: "id" },
      { title: "Profile Id", key: "loanApplication.applicantId" },
      { title: "Name", key: "loanApplication.name" },
      { title: "Principle", key: "principle", isNumeric: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Loan Date", key: "loanDate", isDate: true },
      { title: "Primary Phone No", key: "loanApplication.primaryPhoneNo" },
      { title: "Other Phone Numbers", key: "loanApplication.otherPhoneNos" },

      
      { title: "Last Payment Date", key: "lastPaymentDate", isDate: true },
      { title: "Next Payment Date", key: "nextPaymentDate", isDate: true },
     
      { title: "Last Bill Date", key: "lastBillDate", isDate: true },
      { title: "Last Engagement Date", key: "lastEngagementDate", isDate: true },
      { title: "Loan Status", key: "loanStatus" },
      { title: "Gender", key: "loanApplication.gender" },
      { title: "Address", key: "loanApplication.addressDetails" },
      { title: "Account", key: "account" },
      { title: "Bank Account Type", key: "bankAccountType" },
     
      { title: "Bl Posted", key: "blPosted",},
      { title: "GlPosted", key: "glPosted"},
      { title: "Loan Product", key: "loanApplication.loanProduct.productName" },
      { title: "Collateral Category", key: "loanApplication.collateralCategory" },
      { title: "Collateral Desc", key: "loanApplication.collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "loanApplication.estimatedCollateralValue",
         isNumeric: true,
      },
      {title: "Guarantors", key: "loanApplication.guarantors",

        value: (item) => {
          if (!item || !item.loanApplication || !item.loanApplication.guarantors || !item.loanApplication.guarantors.length) return 'None';
          return item.loanApplication.guarantors.map(g => `${g.name} (${g.primaryPhoneNo})`).join(', ');
        }
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
    // children: [
    //   { id: "loan.loan.view", title: "View", 
    //     icon: "mdi-table",
    //     to: { name: "loans" } },
    //   {
    //     id: "loan.loan.new",
    //     title: "New",
    //     icon: "mdi-plus",
    //     to: { name: "loan", params: { mode: 0 } },
    //   },
    //   {
    //     id: "loan.loan.edit",
    //     title: "Edit",
    //     icon: "mdi-pencil",
        
    //     to: { name: "loan", params: { mode: 1 } },
    //   },
    //   {
    //     id: "loan.loan.history",
    //     title: "History",
    //     icon: "mdi-history",
    //     to: { name: "loan", params: { mode: 2 } },
    //   },
    children: navUtils.allChildren("loan", "loans", "loans", true, "loan")
  },
};
export default loanNav;
