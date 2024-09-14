<template>
  <s-save-form @save="save" @reset="reset" :path="path" :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt"
    @print="print" :inner="inner" :isDialog="isDialog" @close="closeDialog">
    <template slot="heading">Profile Picture</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Profile Id" v-model="profilePicture.profileId" :rules="profileRules" :counter="20"
          append-icon="mdi-view-list" @click:append="showProfileDialog"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="profilePicture.name" :rules="nameRules" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Image Type" v-model="profilePicture.imageType" :rules="imageTypeRules" :counter="100"
          :items="$store.state.profile.imageTypes" :loading="$store.state.profile.imageTypesLoading"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-file-input label="Photo" v-model="profilePicture.photo" :rules="photoRules"></s-file-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Caption" v-model="profilePicture.caption" :counter="100"></v-text-field>
      </v-col>
      <v-dialog v-model="profileDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="profileOk" @close="profileClose"
          :items="$store.state.profile.profile.mini" :headers="profileNav.menu.miniHeaders" />
      </v-dialog>
    </template>
  </s-save-form>
</template>
<script>

import profilePictureModel from "./ProfilePictureModel";
import funcs from '../../utils/funcs'
import profileNav from '../profile/ProfileNav.js';
export default {
  components: {},
  name: "ProfilePicture",
  props: ['inner', 'profilePictures', 'isDialog'],
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: profilePictureModel.path,
    profilePicture: profilePictureModel.profilePicture,
    profileNav: profileNav,
    profileRules: [(v) => !!v || "Profile is required",
    ], nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",], imageTypeRules: [(v) => !!v || "Image Type is required",
    ], photoRules: [(v) => !!v || "Photo is required",
    ], captionRules: [(v) => !!v || "Caption is required",
    (v) => v.length < 100 || "Caption length must be less or equal to 100",],
    photoUrl: null,

    profileDialog: false,
    profileData: null,
    mtdsProvided: true,
    showPrintPrompt: false,

  }),
  created() {
    this.$store.dispatch("profile/profile/getMini");
    this.$store.dispatch("profile/getImageTypes");
  },

  mounted() {
    this.setProfile();
  },
  computed: {
    profile() {
      return this.$store.state.profile.profile.entity;
    },


  },

  watch: {
    profileData() {
      if (this.profileData) {
        this.profilePicture.profileId = this.profileData.id;
        this.profilePicture.name = this.profileData.display;
      }
    },
    profile() {
      this.setProfile();
    }
  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.getFormData() });
    },

    async search() {
      var obj = this.$store.state.obj;
      this.profilePicture = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.$store.commit("components/saveDialog", false);
      this.profilePicture.clear();
      

    },
    setObjects(obj) {
      console.log(obj);
      funcs.createFileFromBytes(obj.photo).then(e => {
        this.profilePicture.photo = e;

      }).catch(error => console.log(error));
    }, setDialog(obj) {
      this.profilePicture = Object.assign({}, obj);
      this.setObjects(obj);
    },


    getFormData() {
      console.log("Profile Picture: ", this.profilePicture);
      var data = new FormData();
      data.append("profileId", this.profilePicture.profileId);
      data.append("name", this.profilePicture.name);
      data.append("imageType", this.profilePicture.imageType);
      data.append("photo", this.profilePicture.photo);
      data.append("caption", this.profilePicture.caption);

      return data;
    }, async setPhotoFile(obj) {
      let photo = obj.photo;
      if (photo) {
        this.photoUrl = "data:image/png;base64," + photo;
        const getUrlExtension = (url) => {
          return url.split(/[#?]/)[0].split(".").pop().trim();
        };
        var imgExt = getUrlExtension(this.photoUrl);

        const response = await fetch(this.photoUrl);
        const blob = await response.blob();
        console.log("Blob: ", blob);
        const file = new File([blob], "logo." + imgExt, {
          type: blob.type,
        });
        this.profilePicture.photo = file;

      } else {
        this.photoUrl = null;
      }
    },
    print() {
      let data = [];
      data.push({ text: "Profile", value: this.profilePicture.profile });
      data.push({ text: "Name", value: this.profilePicture.name });
      data.push({ text: "Image Type", value: this.profilePicture.imageType });
      data.push({ text: "Caption", value: this.profilePicture.caption });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Profile Picture"

      }

      this.makePDFDocument(options);
    },
    profileOk(data) {
      this.profileData = data
    },
    profileClose() {
      this.profileDialog = false;

    },

    showProfileDialog() {
      this.profileDialog = true;
    },

    closeDialog() {
      this.$emit('close');

    },

    setProfile() {
      console.log("Profile", this.profile);
      if (this.profile !== null) {
        this.profilePicture.profileId = this.profile.id;
        this.profilePicture.name = this.profile.displayKey;
      }
    },





  }
};
</script>
