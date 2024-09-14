import LoanTransition from "./LoanTransition.vue";
import LoanTransitions from "./LoanTransitions.vue";
const loanTransitionNav = {
  routes: [
    {
      path: "/loantransition/:mode",
      name: "loantransition",
      component: LoanTransition,
      meta: { auth: true },
    },
    {
      path: "/loantransitions",
      name: "loantransitions",
      component: LoanTransitions,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.loantransition",
    title: "Loan Transitions",
    component: LoanTransition,
    path: "loantransitions",
    width: "700px",
    editHeaders: [
      { title: "Loan Id", key: "loanId.id" },
      { title: "Profile Id", key: "profileId" },
      { title: "Full Name", key: "fullName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "From Status", key: "fromStatus" },
      { title: "To Status", key: "toStatus" },
      { title: "Notes", key: "notes" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Loan Id", key: "loanId.id" },
      { title: "Profile Id", key: "profileId" },
      { title: "Full Name", key: "fullName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "From Status", key: "fromStatus" },
      { title: "To Status", key: "toStatus" },
      { title: "Notes", key: "notes" },
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
        id: "loan.loanTransition.view",
        title: "View",
        to: { name: "loantransitions" },
      },
      {
        id: "loan.loanTransition.new",
        title: "New",
        to: { name: "loantransition", params: { mode: 0 } },
      },

      {
        id: "loan.loanTransition.history",
        title: "History",
        to: { name: "loantransition", params: { mode: 2 } },
      },
    ],
  },
};
export default loanTransitionNav;
