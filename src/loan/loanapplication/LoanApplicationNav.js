import LoanApplication from "./LoanApplication.vue";
import LoanApplications from "./LoanApplications.vue";
const loanApplicationNav = {
  routes: [
    {
      path: "/loanapplication/:mode",
      name: "loanapplication",
      component: LoanApplication,
      meta: { auth: true },
    },
    {
      path: "/loanapplications",
      name: "loanapplications",
      component: LoanApplications,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loanapplication",
    title: "Loan Applications",
    component: LoanApplication,
    path: "loanapplications",
    width: "1000px",
    miniHeaders: [
      { title: "Id", key: "id" },
      { title: "Name", key: "name" },
      { title: "Phone ", key: "primaryPhoneNo" },
    ],

    editHeaders: [
      { title: "Applicant", key: "applicant.id" },
      { title: "Name", key: "name" },
      { title: "Address", key: "address" },
      { title: "Primary Phone No", key: "primaryPhoneNo" },
      { title: "Other Phone Numbers", key: "otherPhoneNos" },
      { title: "Collateral Category", key: "collateralCategoryId" },
      { title: "Collateral Description", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Application Date", key: "applicationDate", isDate: true },
      { title: "Loan Product", key: "loanProduct.peoductName" },
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
      { title: "Applicant Id", key: "applicantId" },
      { title: "Name", key: "name" },
      { title: "Gender", key: "gender" },
      { title: "Address", key: "addressDetails" },
      { title: "Primary Phone No", key: "primaryPhoneNo" },
      { title: "Other Phone Numbers", key: "otherPhoneNos" },

      { title: "Application Date", key: "applicationDate", isDate: true },
      { title: "Loan Product", key: "loanProduct.productName" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategoryId" },
      { title: "Collateral Description", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Application Status", key: "applicationStatus" },
      {
        title: "Guarantors", key: "guarantors",

        value: (item) => {
          if (!item.guarantors || !item.guarantors.length) return 'None';
          return item.guarantors.map(g => `${g.name} (${g.primaryPhoneNo})`).join(', ');
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
    children: [
      {
        id: "loan.loanApplication.view",
        title: "View",
        icon: "mdi-table",
        to: { name: "loanapplications" },
      },
      {
        id: "loan.loanApplication.new",
        title: "New",
        icon: "mdi-plus-circle",
        to: { name: "loanapplication", params: { mode: 0 } },
      },
      {
        id: "loan.loanApplication.edit",
        title: "Edit",
        icon: "mdi-pencil",
        to: { name: "loanapplication", params: { mode: 1 } },
      },
      {
        id: "loan.loanApplication.history",
        title: "History",
        icon: "mdi-history",
        to: { name: "loanapplication", params: { mode: 2 } },
      },
    ],
  },
};
export default loanApplicationNav;
