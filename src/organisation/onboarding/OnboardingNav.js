import Onboarding from "./Onboarding.vue";
import { navUtils } from 'saburi-vue-utils';


const onboardingNav = {
  routes: [navUtils.viewRoute("onboarding", Onboarding)],
  menu: {
    id: "organisation.onboarding",
    title: "Client Onboarding",
    icon: "mdi-account-plus",
    path: "onboarding",
    component: Onboarding,
    to: { name: "onboarding" },
    requires: navUtils.viewRoles("company"),
  }
}

export default onboardingNav;
