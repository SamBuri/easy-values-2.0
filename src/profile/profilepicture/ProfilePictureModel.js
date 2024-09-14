const profilePictureModel = {
  model: {
    profileId: "",
    name: "",
    imageType: "",
    photo: null,
    caption: "",

    clear() {
      this.profileId = "";
      this.name = "";
      this.imageType = "";
      this.photo = null;
      this.caption = "";
    },
    copy(obj) {
      this.id = obj.id;
      this.profileId = obj.profile.Id;
      this.name = obj.name;
      this.imageType = obj.imageType.Id;
      this.photo = obj.photo;
      this.caption = obj.caption;
    },
    printOptions() {
      let data = [];
      data.push({
        text: "Profile",
        value: this.profilePicture.profile.displayKey,
      });
      data.push({ text: "Name", value: this.profilePicture.name });
      data.push({
        text: "Image Type",
        value: this.profilePicture.imageType.displayKey,
      });
      data.push({ text: "Photo", value: this.profilePicture.photo });
      data.push({ text: "Caption", value: this.profilePicture.caption });

      return {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Profile Picture",
      };
    },

    getFormData() {
      var data = new FormData();
      data.append("profileId", this.profileId);
      data.append("name", this.name);
      data.append("imageType", this.imageType);
      data.append("photo", this.photo);
      data.append("caption", this.caption);

      return data;
    },
  },
  path: "profilepictures",
  rules: {
    profileId: [(v) => !!v || "Profile is required"],
    name: [
      (v) => !!v || "Name is required",
      (v) => v.length < 100 || "Name length must be less or equal to 100",
    ],
    imageType: [(v) => !!v || "Image Type is required"],
    photo: [(v) => !!v || "Photo is required"],
    caption: [
      (v) => !!v || "Caption is required",
      (v) => v.length < 100 || "Caption length must be less or equal to 100",
    ],
  },
};

export default profilePictureModel;
