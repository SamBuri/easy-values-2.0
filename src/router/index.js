// Composables
import { createRouter, createWebHistory } from "vue-router";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import Search from "@/search/Search.vue";
import lookupNavData from "../lookup/LookupNavData";
import accountingNavData from "../accounting/AccountingNavData";
import organisationNavData from "../organisation/OrganisationNavData";
import customerNavData from "../customer/CustomerNavData";
// import itemsNavData from '../items/ItemsNavData'
import bankingNavData from "../banking/BankingNavData";
import salesNavData from "../sales/SalesNavData";
import loanNavData from "../loan/LoanNavData";
import securityNavData from "../security/securityNavData";
import SDataFileInput from "../components/SDataFileInput.vue";
import Dashboard from "../dashboard/Dashboard.vue";
// import store from '../store/index'
import profileNavData from "../profile/ProfileNavData";
import reportsNavData from "../reports/ReportNavData";
import expensesNavData from "../expenses/EpensesNavData";
// import storeFuncs from "../utils/storeFuncs";
import sharesNavData from "../shares/SharesNavData";
import SBarChart from "../components/SBarChart.vue";
import interviewNavData from "../interview/InterviewNavData";
import creditorNavData from "../creditor/CreditorNavData";

const routes = [
  {
    children: [

      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
      },
      {
        path: '/tree',
        name: 'tree',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/STreeviewTest.vue')
      },
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
        meta: { auth: true },
      },

      // {
      //   path: "/tree",
      //   name: "tree",
      //   component: () => import('../components/STreeview.vue')
      //   meta: { auth: true },
      // },

      {
        path: "/search/:action",
        name: "search",
        component: Search,
        meta: { auth: true },
      },

      ...lookupNavData.routes,
      ...organisationNavData.routes,
      ...accountingNavData.routes,
      ...customerNavData.routes,
      ...salesNavData.routes,
      ...bankingNavData.routes,
      ...loanNavData.routes,
      ...securityNavData.routes,
      ...profileNavData.routes,
      ...reportsNavData.routes,
      ...expensesNavData.routes,
      ...sharesNavData.routes,
      ...creditorNavData.routes,
      ...interviewNavData.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

router.beforeEach(async (to, from, next) => {
  const branchStore = defineBranchStore();
  if (branchStore.loadCurrentBranchVue && to.name!=='currentbranch') {

    next("/currentbranch");
      return;

  }


   next();

})

export default router;
