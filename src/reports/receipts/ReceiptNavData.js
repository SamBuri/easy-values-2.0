import dailyNav from "./daily/DailyNav"
import weeklyNav from "./weekly/WeeklyNav"
import monthlyNav from "./monthly/MonthlyNav"
import yearlyNav from "./yearly/YearlyNav"


const receiptNavData = {
    routes: [
        dailyNav.route,
        weeklyNav.route,
        monthlyNav.route,
        yearlyNav.route
    ],
    nav: {
        id: "reports.receipts",
        title: "Receipts",
        icon: "mdi-view-dashbord",
        children: [
            dailyNav.menu,
            weeklyNav.menu,
            monthlyNav.menu,
            yearlyNav.menu

        ],
    }
}

export default receiptNavData
