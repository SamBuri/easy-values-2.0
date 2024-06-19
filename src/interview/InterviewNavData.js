import testListNav from "./test/TestListNav"
import testNav from "./test/TestNav"
const interviewNavData = {
    routes: [
       testNav.route,
       testListNav.route

    ],
    nav: {
        id: "Interview",
        title: "Interview",
        icon: "mdi-view-dashbord",
        children: [
           testNav.menu,
           testListNav.menu
        ],
    },

}

export default interviewNavData
