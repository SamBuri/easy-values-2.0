import profileNav from "./profile/ProfileNav";


const profileNavData = {
  routes: [
    ...profileNav.routes,
  ],
nav: profileNav.menu
//   nav: {
//     id: "profile",
//     title: "Profile",
//     icon: "mdi-account",
//     requires: [
//       ...profileNav.menu.requires,
//     ],
//     children: [
//       profileNav.menu,
//     ],
//   },
};
export default profileNavData;
