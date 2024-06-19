import httmMethods from '../../utils/HttpMethods'
import profilePictureNav from './ProfilePictureNav';
export default {
    namespaced: true,
    state: {
        mini: [],
        miniLoading: false,
        profilePictures: [],
        profilePicturesLoading: false,

    },

    mutations: {
        profilePictures(state, profilePictures){
            state.profilePictures = profilePictures;

        }
    },
    actions: {

        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${profilePictureNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },

        async getProfilePictures(context, profileId) {
            context.state.profilePictures = [];
            context.state.profilePicturesLoading = true;
            httmMethods.get(`${profilePictureNav.menu.path}/profileid/${profileId}`)
                .then(response => {
                    
                    context.state.profilePictures =response.data;
                    context.state.profilePicturesLoading = false;
                }).catch(e => {
                    context.state.profilePictures = [];
                    console.log("Error loading profile pictures", e);
                    context.state.profilePicturesLoading = false;
                   

                })

        },

    }
}
