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
  
  
};
export default loanDashboardNav;
