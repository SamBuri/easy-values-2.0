import organisationNavData from '../organisation/OrganisationNavData'
import accountingNavData from '../accounting/AccountingNavData'
import customerNavData from '../customer/CustomerNavData'
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
// import interviewNavData from '../interview/InterviewNavData'

const navData = {

tree: [


          customerNavData.nav,
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

          // interviewNavData.nav




],

// menus: [
//     ...sharesNavData.nav.children,
//     ...salesNavData.menus,
//     ...loanNavData.menus,
//     ...bankingNavData.menus,
//     ...profileNavData.menus,
//     ...expensesNavData.nav.children,
//     ...accountingNavData.menus,
//     ...lookupNavData.menus,
//     ...sharesNavData.menus,
//     ...organisationNavData.menus,
// ],


}

export default navData;
