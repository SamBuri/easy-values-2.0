import dailyNav from "./daily/DailyNav"
import weeklyNav from "./weekly/WeeklyNav"
import monthlyNav from "./monthly/MonthlyNav"
import yearlyNav from "./yearly/YearlyNav"


const loanNavData = {
    routes: [
        dailyNav.route,
        weeklyNav.route,
        monthlyNav.route,
        yearlyNav.route
    ],
    nav: {
        id: "reports.loans",
        title: "Loans",
        icon: "mdi-view-dashbord",
        children: [
            dailyNav.menu,
            weeklyNav.menu,
            monthlyNav.menu,
            yearlyNav.menu

        ],
    }
}

export default loanNavData
