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
    icon: "mdi-view-dashbord",
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
