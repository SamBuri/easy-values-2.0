
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
        icon: "mdi-account",
        requires: [
          ...countryNav.menu.requires,
          ...districtNav.menu.requires,
          ...countyNav.menu.requires,
          ...subCountyNav.menu.requires,
          ...parishNav.menu.requires,
          ...villageNav.menu.requires,
          ...profileNav.menu.requires,
        ],
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
              icon: "mdi-map-marker",
              requires: [
                ...countryNav.menu.requires,
                ...districtNav.menu.requires,
                ...countyNav.menu.requires,
                ...subCountyNav.menu.requires,
                ...parishNav.menu.requires,
                ...villageNav.menu.requires,
              ],
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



