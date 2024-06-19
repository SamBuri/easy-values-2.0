import httmMethods from "../utils/HttpMethods"
import country from "./country/country"
import district from "./district/district"
import county from "./county/county"
import subcounty from "./subcounty/subcounty"
import parish from "./parish/parish"
import village from "./village/village"
import profile from './profile/profile'
import profilepicture from "./profilepicture/profilepicture"

export default {
    namespaced:true,
    state: {
        path: "profile/enums/",
        imagetypes: [],
        imagetypesLoading: false,
        profileTypes: [],
        profileTypesLoading: false,
    },
    mutations: {
       
    },
    actions: {
        getImageTypes(context) {
            if (context.mini) { return }
             context.state.imagetypes= true;
            httmMethods.get(`${context.state.path}imagetypes`)
                .then(response => {
                    context.state.imageTypes =  response.data;
                    context.state.imageTypesLoading =  false;
                }).catch(e => {
                    context.state.imageTypes =  [];
                    console.log(e);
                    context.state.imageTypesLoading =  false;
                })

        },

        getProfileTypes(context) {
            if (context.mini) { return }
             context.state.profileTypesLoading= true;
            httmMethods.get(`${context.state.path}profiletypes`)
                .then(response => {
                    context.state.profileTypes =  response.data;
                    context.state.profileTypesLoading =  false;
                }).catch(e => {
                    context.state.profileTypes =  [];
                    console.log(e);
                    context.state.profileTypesLoading =  false;
                })

        },
        
    },
    modules: {country, district, county, subcounty, parish, village, profile, profilepicture} 

}