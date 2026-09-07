import companyNav from '../organisation/company/CompanyNav'
import branchNav from './branch/BranchNav'
import devConfigNav from './devconfig/DevConfigNav'

const organisationNavData = {
  routes: [
    ...devConfigNav.routes,
    ...companyNav.routes,
    ...branchNav.routes,
  ],
  nav: {
    id: "organisation",
    title: "Organisation",
    icon: "mdi-domain-account",
    requires: [
      ...companyNav.menu.requires,
      ...branchNav.menu.requires,
      ...devConfigNav.menu.requires,
    ],
    children: [
      devConfigNav.menu,
      companyNav.menu,
      branchNav.menu,
    ],
  }
}

export default organisationNavData
