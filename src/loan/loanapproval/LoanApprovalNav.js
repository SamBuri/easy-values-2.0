import LoanApproval from "./LoanApproval.vue";
import LoanApprovals from "./LoanApprovals.vue";
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
  menu: {
    id: "loan.loanapproval",
    title: "Loan Approvals",
    component: LoanApproval,
    path: "loanapprovals",
    width: "1000px",
    editHeaders: [
      { title: "Loan Application", key: "loanApplication.displayKey" },
      { title: "Approval Date", key: "approvalDate", isDate: true },
      { title: "Approved By", key: "approvedBy" },
      { title: "Approval Notes", key: "approvalNotes" },
      { title: "Approval Status", key: "approvalStatus" },
      { title: "Loan Product", key: "loanProduct" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Collateral Category", key: "collateralCategory" },
      { title: "Collateral Desc", key: "collateralDesc" },
      {
        title: "Estimated Collateral key",
        key: "estimatedCollateralkey",
        isNumeric: true,
      },
      { title: "Loan Product Name", key: "loanProductName" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      //         {
      //         title: "Id",
      //         align: "start",
      //         // sortable: false,
      //         visible:false,
      //         key: "id",
      // },
      { title: "Id", align: "start", key: "id" },
      { title: "Application Id", align: "start", key: "loanApplication.id" },
      { title: "Applicant Id", key: "loanApplication.applicantId" },
      { title: "Applicant", key: "loanApplication.name" },
      { title: "Approval Date", key: "approvalDate", isDate: true },
      { title: "Approved By", key: "approvedBy" },
      { title: "Approval Notes", key: "approvalNotes" },
      { title: "Approval Status", key: "approvalStatus" },
      { title: "Amount Applied", key: "loanApplication.amount" },
      { title: "Approved Amount", key: "amount", isNumeric: true },
      {
        title: "Collateral Category",
        key: "loanApplication.collateralCategory",
      },
      { title: "Collateral Desc", key: "loanApplication.collateralDesc" },
      {
        title: "Estimated Collateral key",
        key: "loanApplication.estimatedCollateralkey",
      },
      {
        title: "Loan Product Name",
        key: "loanApplication.loanProduct.productName",
      },
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
        id: "loan.loanApproval.view",
        title: "View",
        to: { name: "loanapprovals" },
      },
      {
        id: "loan.loanApproval.new",
        title: "New",
        route: "loanapproval",
        mode: 0,
        to: { name: "loanapproval", params: { mode: 0 } },
      },
      {
        id: "loan.loanApproval.edit",
        title: "Edit",
        route: "loanapproval",
        mode: 1,
        to: { name: "loanapproval", params: { mode: 1 } },
      },
      {
        id: "loan.loanApproval.history",
        title: "History",
        route: "loanapproval",
        mode: 2,
        to: { name: "loanapproval", params: { mode: 2 } },
      },
    ],
  },
};
export default loanApprovalNav;
