import { defineStore } from "pinia";
import profilePictureNav from "./ProfilePictureNav";
import { defineRootStore } from "@/root/RootStore";
export const defineProfilePictureStore = defineStore("profilePicture", {
  state: () => ({
    path: profilePictureNav.menu.path,
    mini: [],
    miniLoading: false,
    profilePictures: [],
    profilePicturesLoading: false,
  }),
  actions: {
    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
        },

        (res) => (this.mini = res.data),

        () => (this.miniLoading = false)
      );
      return data;
    },

    getProfilePictures(profileId) {
      this.profilePictures = []
      if(!profileId) return this.profilePictures;

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/profileid/${profileId}`,
        () => {
          this.profilePicturesLoading = true;
          this.profilePictures = [];
        },

        (res) => (this.profilePictures = res.data),

        () => (this.profilePicturesLoading = false)
      );
      return data;
    },

  },
});
