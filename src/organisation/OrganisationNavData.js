import companyNav from '../organisation/company/CompanyNav'
import branchNav from './branch/BranchNav'
import tenantNav from './tenant/TenantNav'

const organisationNavData = {
  routes: [
    ...companyNav.routes,
    ...branchNav.routes,
    ...tenantNav.routes,

  ],
  nav: {
    id: "organisation",
    title: "Organisation",
    icon: "mdi-domain-account  ",
    requires: [
      ...companyNav.menu.requires,
      ...branchNav.menu.requires,
      ...tenantNav.menu.requires,
    ],
    children: [
      companyNav.menu,
      branchNav.menu,
      tenantNav.menu,
    ],
  },
  menus: [
    companyNav.menu,
    branchNav.menu,
    tenantNav.menu,
  ],
}

export default organisationNavData
