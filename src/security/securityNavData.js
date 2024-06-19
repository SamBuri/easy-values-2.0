import loginNav from './login/LoginNav'
import roleNav from './role/RoleNav'
import userNav from './user/UserNav'
const securityNavData = {
    routes: [
      roleNav.route,
      userNav.route,
      loginNav.route,
    ],
    nav: {
      id: "security",
      name: "Security",
      icon: "mdi-view-dashbord",
      children: [
        roleNav.menu,
        userNav.menu,
  
      ],
    }
  }
  
  export default securityNavData