import LoanDashboard from "./LoanDashboard.vue";

const loanDashboardNav = {
  routes: [
    {
      path: "/loandashboard",
      name: "loandashboard",
      component: LoanDashboard,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loandashboard",
    title: "Loan Dashboard",
    icon: "mdi-view-dashboard-outline",
    to: { name: "loandashboard" },
    requires: [],
  },
};
export default loanDashboardNav;
