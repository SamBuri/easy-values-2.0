import { de } from 'vuetify/locale'
import companyNav from '../organisation/company/CompanyNav'
import branchNav from './branch/BranchNav'
import devConfigNav from './devconfig/DevConfigNav'
import tenantNav from './tenant/TenantNav'
import tenantGroupNav from './tenantgroup/TenantGroupNav'
import onboardingNav from './onboarding/OnboardingNav'
import dataImportNav from './onboarding/DataImportNav'

const organisationNavData = {
  routes: [
    ...onboardingNav.routes,
    ...dataImportNav.routes,
    ...devConfigNav.routes,
    ...companyNav.routes,
    ...branchNav.routes,
    ...tenantNav.routes,
    ...tenantGroupNav.routes,

  ],
  nav: {
    id: "organisation",
    title: "Organisation",
    icon: "mdi-domain-account  ",
    requires: [
      ...onboardingNav.menu.requires,
      ...dataImportNav.menu.requires,
      ...companyNav.menu.requires,
      ...branchNav.menu.requires,
      ...tenantNav.menu.requires,
      ...devConfigNav.menu.requires,
      ...tenantGroupNav.menu.requires,
    ],
    children: [
      onboardingNav.menu,
      dataImportNav.menu,
      devConfigNav.menu,
      companyNav.menu,
      branchNav.menu,
      tenantNav.menu,
      tenantGroupNav.menu,
    ],
  },

}

export default organisationNavData
