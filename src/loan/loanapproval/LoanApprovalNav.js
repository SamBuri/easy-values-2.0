import LoanApproval from "./LoanApproval.vue";
import LoanApprovals from "./LoanApprovals.vue";
import navUtils from "@/nav/NavUtils";
const loanApprovalNav = {
  routes: [
    {
      path: "/loanapproval/:mode",
      name: "loanapproval",
      component: LoanApproval,
      meta: { auth: true },
    },
    {
      path: "/loanapprovals",
      name: "loanapprovals",
      component: LoanApprovals,
      meta: { auth: true },
    },
  ],
  routes: navUtils.allRoutes("loanapproval", LoanApproval, "loanapprovals", LoanApprovals, true),
  menu: {
    id: "loan.loanapproval",
    title: "Loan Approvals",
    component: LoanApproval,
    path: "loanapprovals",
    requires: navUtils.allRoles("loanapproval"),
    width: "1000px",
    editHeaders: [
      { title: "Loan Application", key: "loanApplication.id" },
      { title: "Approval Date", key: "approvalDate", isDate: true },
      { title: "Approved By", key: "approvedBy" },
      { title: "Approval Notes", key: "approvalNotes" },
      { title: "Approval Status", key: "approvalStatus" },
      { title: "Loan Product", key: "loanProduct" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategory" },
      { title: "Collateral Desc", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Loan Product Name", key: "loanProductName" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Loan Application", key: "loanApplication.id" },
      { title: "Approval Date", key: "approvalDate", isDate: true },
      { title: "Approved By", key: "approvedBy" },
      { title: "Approval Notes", key: "approvalNotes" },
      { title: "Approval Status", key: "approvalStatus" },
      { title: "Loan Product", key: "loanProduct" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategory" },
      { title: "Collateral Desc", key: "collateralDesc" },
      {
        title: "Estimated Collateral Value",
        key: "estimatedCollateralValue",
        isNumeric: true,
      },
      { title: "Loan Product Name", key: "loanProductName" },
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
    //   {
    //     id: "loan.loanApproval.view",
    //     title: "View",
    //     icon: "mdi-table",
    //     to: { name: "loanapprovals" },
    //   },
    //   {
    //     id: "loan.loanApproval.new",
    //     title: "New",
    //     icon: "mdi-plus-circle",
    //     to: { name: "loanapproval", params: { mode: 0 } },
    //   },
    //   {
    //     id: "loan.loanApproval.edit",
    //     icon: "mdi-pencil",
    //     title: "Edit",
    //     to: { name: "loanapproval", params: { mode: 1 } },
    //   },
    //   {
    //     id: "loan.loanApproval.history",
    //     icon: "mdi-history",
    //     title: "History",
    //     to: { name: "loanapproval", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.allChildren(
      "loan",
      "loanapproval",
      "loanapprovals",
      true
    ),
  },
};
export default loanApprovalNav;
