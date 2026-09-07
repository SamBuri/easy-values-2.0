import { reactive } from 'vue';
import organisationNavData from '../organisation/OrganisationNavData'
import onboardingNavData from '../onboarding/OnboardingNavData'
import accountingNavData from '../accounting/AccountingNavData'
import lookupNavData from '../lookup/LookupNavData'
// import itemsNavData from '../items/ItemsNavData'
import salesNavData from '../sales/SalesNavData'
import bankingNavData from '../banking/BankingNavData'
import loanNavData from '../loan/LoanNavData'
import securityNavData from '../security/securityNavData'
import profileNavData from '../profile/ProfileNavData'
import reportsNavData from '../reports/ReportNavData'
import expensesNavData from '../expenses/EpensesNavData'
import sharesNavData from '../shares/SharesNavData'
import creditorNavData from '../creditor/CreditorNavData';
import loanDashboardNav from '../loan/loaddashboard/LoanDashboardNav';
import { settingsNavGroup } from 'saburi-vue-utils';

const navData = reactive({

  tree: [
    // Overview Section
    { header: 'Overview' },
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: { name: 'dashboard' }
    },
    loanDashboardNav.menu,

    { divider: true },

    // Core Operations Section
    { header: 'Core Operations' },
    salesNavData.nav,
    loanNavData.nav,
    bankingNavData.nav,
    creditorNavData.nav,
    expensesNavData.nav,
    sharesNavData.nav,

    { divider: true },

    // Financials & Reports Section
    { header: 'Financials & Reports' },
    accountingNavData.nav,
    reportsNavData.nav,

    { divider: true },

    // System & Setup Section
    { header: 'System & Setup' },
    profileNavData.nav,
    lookupNavData.nav,
    organisationNavData.nav,
    securityNavData.nav,
    settingsNavGroup.nav,
    onboardingNavData.nav,
  ],

})

export default navData;
