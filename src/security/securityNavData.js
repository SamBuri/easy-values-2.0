// import loginNav from './login/LoginNav'
// import roleNav from './role/RoleNav'
import groupNav from './group/GroupNav'
import roleNav from './role/RoleNav'
import userNav from './user/UserNav'


const securityNavData = {
    routes: [
     
      ...groupNav.routes,
      ...userNav.routes,
      ...roleNav.routes,
     
    ],
    nav: {
      id: "security",
      title: "Security",
      icon: "mdi-view-dashbord",
      children: [
        groupNav.menu,
        userNav.menu,
        roleNav.menu,
  
      ],
    }
  }
  
  export default securityNavData