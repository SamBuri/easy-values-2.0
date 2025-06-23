// import loginNav from './login/LoginNav'
// import roleNav from './role/RoleNav'
import groupNav from './group/GroupNav'
import resetPasswordNav from './resetpassword/ResetPasswordNav'
import roleNav from './role/RoleNav'
import userNav from './user/UserNav'


const securityNavData = {
    routes: [
     
      ...groupNav.routes,
      ...userNav.routes,
      ...roleNav.routes,
      ...resetPasswordNav.routes,
     
    ],
    nav: {
      id: "security",
      title: "Security",
      icon: "mdi-security",
      requires: [...roleNav.menu.requires, ...groupNav.menu.requires, ...userNav.menu.requires, ...resetPasswordNav.menu.requires],
      children: [
        roleNav.menu,
        groupNav.menu,
        userNav.menu,
        resetPasswordNav.menu,
      
  
      ],
    }
  }
  
  export default securityNavData