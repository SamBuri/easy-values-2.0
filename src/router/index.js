// Composables
import { createRouter, createWebHistory } from "vue-router";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import { useAuthStore } from "@/store/authstore";
import { authService } from "@/security/auth/AuthService";
import { Search } from "saburi-vue-utils";
import lookupNavData from "../lookup/LookupNavData";
import accountingNavData from "../accounting/AccountingNavData";
import organisationNavData from "../organisation/OrganisationNavData";
import onboardingNavData from "../onboarding/OnboardingNavData";
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
import { settingsNavGroup } from "saburi-vue-utils";


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
        path: "/oauth/callback",
        name: "oauth-callback",
        component: () => import("../security/auth/OAuthCallback.vue"),
        meta: { auth: false },
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
        component: () => import("saburi-vue-utils").then(m => m.UserProfile),
        meta: { auth: true },
      },
      {
        path: "/organisation-profile",
        name: "organisation-profile",
        component: () => import("../organisation/company/OrganisationProfile.vue"),
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
      ...onboardingNavData.routes,
      ...accountingNavData.routes,
      ...salesNavData.routes,
      ...bankingNavData.routes,
      ...loanNavData.routes,
      ...securityNavData.routes,
      ...settingsNavGroup.routes,
      ...profileNavData.routes,
      ...reportsNavData.routes,
      ...expensesNavData.routes,
      ...sharesNavData.routes,
      ...creditorNavData.routes,
      ...onboardingNavData.routes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

router.beforeEach(async (to) => {
  if (to.name === "oauth-callback" || to.meta.auth === false) return true;

  const authStore = useAuthStore();
  try {
    if (!authStore.isTokenValid()) {
      try {
        await authStore.ensureValidToken();
      } catch (_) {
        // The interactive login below is the recovery path.
      }
    }
    if (!authStore.authenticated) {
      await authService.login(null, to.fullPath);
      return false;
    }
  } catch (error) {
    console.error("Unable to initialize authentication", error);
    return false;
  }

  const branchStore = defineBranchStore();
  if (!branchStore.currentBranch && to.name !== "currentbranch") return { name: "currentbranch" };
  return true;
});

export default router;
