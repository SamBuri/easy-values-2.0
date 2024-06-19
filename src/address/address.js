import country from "./country/country"
import district from "./district/district"
import county from "./county/county"
import subcounty from "./subcounty/subcounty"
import parish from "./parish/parish"
import village from "./village/village"

export default {
    namespaced:true,
    state: {
    },
    mutations: {
       
    },
    actions: {
        
    },
    modules: {country, district, county, subcounty, parish, village} 

}