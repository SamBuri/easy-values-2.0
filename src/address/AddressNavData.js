
import countryNav from "./country/CountryNav"
import districtNav from "./district/DistrictNav"
import subCountyNav from "./subcounty/SubCountyNav"
import countyNav from "./county/CountyNav"
import parishNav from "./parish/ParishNav"
import villageNav from './village/VillageNav'

     const addressNavData = {
       routes:[
        countryNav.route,
        districtNav.route,
        countyNav.route,
        subCountyNav.route,
        parishNav.route,
        villageNav.route
       ],

      nav:{ 
      id: "address",
        name: "Address",
        icon: "mdi-view-dashbord",
        children: [
          countryNav.menu,
          districtNav.menu,
          countyNav.menu,
          subCountyNav.menu,
          parishNav.menu,
          villageNav.menu
        ],
      }
      }
 export default addressNavData;