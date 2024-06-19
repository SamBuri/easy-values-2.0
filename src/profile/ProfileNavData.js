
import countryNav from "./country/CountryNav"
import districtNav from "./district/DistrictNav"
import subCountyNav from "./subcounty/SubCountyNav"
import countyNav from "./county/CountyNav"
import parishNav from "./parish/ParishNav"
import villageNav from './village/VillageNav'
import profileNav from "./profile/ProfileNav"

     const profileNavData = {
       routes:[
        ...countryNav.routes,
        ...districtNav.routes,
        ...countyNav.routes,
        ...subCountyNav.routes,
        ...parishNav.routes,
        ...villageNav.routes,
        ...profileNav.routes,
       ],

      nav:{
      id: "profile",
        title: "Profile",
        icon: "mdi-view-dashbord",
        children: [
          // countryNav.menu,
          // districtNav.menu,
          // countyNav.menu,
          // subCountyNav.menu,
          // parishNav.menu,
          // villageNav.menu,
          {
            id: "profile.address",
              title: "Address",
              icon: "mdi-view-dashbord",
              children: [
                countryNav.menu,
                districtNav.menu,
                countyNav.menu,
                subCountyNav.menu,
                parishNav.menu,
                villageNav.menu,
              ],
            },
          profileNav.menu,
        ],
      },

      }
 export default profileNavData;



