import financialPeriodNav from "./financialperiod/FinancialPeriodNav";
import journalNav from "./journal/JournalNav";
const postingNavData = {
    routes: [
        financialPeriodNav.route,
        journalNav.route
    ],
    nav: {
        id: "posting",
        name: "Posting",
        icon: "mdi-view-dashbord",
        children: [
            financialPeriodNav.menu,
            journalNav.menu

        ],
    }
}

export default postingNavData