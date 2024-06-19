import financialPeriodNav from './financialperiod/FinancialPeriodNav'
import accountCategoryNav from './accountcategory/AccountCategoryNav'
import accountNav from './account/AccountNav'
import journalNav from './journal/JournalNav'
import generalLedgerNav from './generalledger/GeneralLedgerNav'
import businessSectionAccountNav from './businesssectionaccount/BusinessSectionAccountNav'
import accountLedgerNav from './ledger/AccountLedgerNav'
import incomestatementNav from './incomestatement/IncomeStatementNav'
import balanceSheetNav from './balanceshhet/BalanceSheetNav'


const accountsNavData = {
  routes: [
    ...financialPeriodNav.routes,
    ...accountCategoryNav.routes,
    ...accountNav.routes,
    ...journalNav.routes,
    ...generalLedgerNav.routes,
    ...businessSectionAccountNav.routes,
    accountLedgerNav.route,
    incomestatementNav.route,
    balanceSheetNav.route,

  ],
  nav: {
    id: "accounting",
    title: "Accounting",
    icon: "mdi-view-dashbord",
    children: [
      financialPeriodNav.menu,
      accountCategoryNav.menu,
      accountNav.menu,
      businessSectionAccountNav.menu,
      journalNav.menu,
      generalLedgerNav.menu,
      accountLedgerNav.menu,
      incomestatementNav.menu,
      balanceSheetNav.menu,


    ],
  },

  menus: [
    financialPeriodNav.menu,
    accountCategoryNav.menu,
    accountNav.menu,
    businessSectionAccountNav.menu,
    journalNav.menu,
    generalLedgerNav.menu,
    balanceSheetNav.menu,


  ],
}

export default accountsNavData
