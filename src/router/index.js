// Composables
import { createRouter, createWebHistory } from "vue-router";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import { Search } from "saburi-vue-utils";
import lookupNavData from "../lookup/LookupNavData";
import accountingNavData from "../accounting/AccountingNavData";
import organisationNavData from "../organisation/OrganisationNavData";
// import itemsNavData from '../items/ItemsNavData'
import bankingNavData from "../banking/BankingNavData";
import salesNavData from "../sales/SalesNavData";
import loanNavData from "../loan/LoanNavData";
import securityNavData from "../security/securityNavData";
import Dashboard from "../dashboard/Dashboard.vue";
// import store from '../store/index'
import profileNavData from "../profile/ProfileNavData";
import reportsNavData from "../reports/ReportNavData";
import expensesNavData from "../expenses/EpensesNavData";
// import storeFuncs from "../utils/storeFuncs";
import sharesNavData from "../shares/SharesNavData";

import creditorNavData from "../creditor/CreditorNavData";


const routes = [
  {
    children: [

      // {
      //   path: '/load',
      //   name: 'load',
      //   // route level code-splitting
      //   // this generates a separate chunk (About.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('../views/LoadingPage.vue')
      // },

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
        path: '/currentbranch',
        name: 'currentbranch',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../organisation/branch/CurrentBranch.vue')
      },
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
        meta: { auth: true },
      },
      {
        path: "/profile",
        name: "user-profile",
        component: () => import("../security/user/UserProfile.vue"),
        meta: { auth: true },
      },
      {
        path: "/search/:action",
        name: "search",
        component: Search,
        meta: { auth: true },
      },

      ...lookupNavData.routes,
      ...organisationNavData.routes,
      ...accountingNavData.routes,
      ...salesNavData.routes,
      ...bankingNavData.routes,
      ...loanNavData.routes,
      ...securityNavData.routes,
      ...profileNavData.routes,
      ...reportsNavData.routes,
      ...expensesNavData.routes,
      ...sharesNavData.routes,
      ...creditorNavData.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

router.beforeEach(async (to, from, next) => {

  const branchStore = defineBranchStore();
  if (!branchStore.currentBranch && to.name !== 'currentbranch' && from.name !== 'currentbranch') {

    next("/currentbranch");

    return;

  }


  next();

})

export default router;
