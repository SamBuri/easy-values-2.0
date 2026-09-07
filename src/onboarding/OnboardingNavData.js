import onboardingNav from './OnboardingNav'
import dataImportNav from './DataImportNav'

const onboardingNavData = {
  routes: [
    ...onboardingNav.routes,
    ...dataImportNav.routes,
  ],
  nav: {
    id: "onboarding",
    title: "Onboarding",
    icon: "mdi-account-plus",
    requires: [
      ...onboardingNav.menu.requires,
      ...dataImportNav.menu.requires,
    ],
    children: [
      onboardingNav.menu,
      dataImportNav.menu,
    ],
  },
}

export default onboardingNavData
