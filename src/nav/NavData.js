import { reactive } from 'vue';
import organisationNavData from '../organisation/OrganisationNavData'
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

const navData = reactive({

  tree: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: { name: 'dashboard' }
    },
    loanDashboardNav.menu,
    salesNavData.nav,
    loanNavData.nav,
    bankingNavData.nav,
    profileNavData.nav,
    reportsNavData.nav,
    expensesNavData.nav,
    accountingNavData.nav,
    lookupNavData.nav,
    sharesNavData.nav,
    creditorNavData.nav,
    organisationNavData.nav,
    securityNavData.nav,
  ],

})

export default navData;
