import { de } from 'vuetify/locale'
import companyNav from '../organisation/company/CompanyNav'
import branchNav from './branch/BranchNav'
import devConfigNav from './devconfig/DevConfigNav'
import tenantNav from './tenant/TenantNav'
import realmAccessNav from './realmaccess/RealmAccessNav'

const organisationNavData = {
  routes: [
    ...devConfigNav.routes,
    ...companyNav.routes,
    ...branchNav.routes,
    ...tenantNav.routes,
    ...realmAccessNav.routes,

  ],
  nav: {
    id: "organisation",
    title: "Organisation",
    icon: "mdi-domain-account  ",
    requires: [
      ...companyNav.menu.requires,
      ...branchNav.menu.requires,
      ...tenantNav.menu.requires,
      ...devConfigNav.menu.requires,
      ...realmAccessNav.menu.requires,
    ],
    children: [
      devConfigNav.menu,
      companyNav.menu,
      branchNav.menu,
      tenantNav.menu,
      realmAccessNav.menu,
    ],
  },

}

export default organisationNavData
