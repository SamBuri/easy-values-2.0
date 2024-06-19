const profilePictureModel = {
    profilePicture: {
        profileId: "",
        name: "",
        imageType: "Primary",
        photo: null,
        caption: "",

        clear() {
            this.profileId = "";
            this.name = "";
            this.imageType = "Primary";
            this.photo = null;
            this.caption = "";
        }
    },
    path: "profilepictures"
}

export default profilePictureModel;
