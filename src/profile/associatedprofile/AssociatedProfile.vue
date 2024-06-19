<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">Associated Profile</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Profile" v-model="associatedProfile.profile" :rules="profileRules" :counter="20"
          append-icon="mdi-view-list" @click:append="showProfileDialog"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Associated Profile" v-model="associatedProfile.associatedProfile"
          :rules="associatedProfileRules" :counter="20" append-icon="mdi-view-list"
          @click:append="showAssociatedProfileDialog"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Profile Name" v-model="associatedProfile.associatedProfileName"
          ></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Position" v-model="associatedProfile.position" :rules="positionRules"
          :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Main" v-model="associatedProfile.main"></v-checkbox>
      </v-col>
      <v-dialog v-model="profileDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="profileOk" @close="profileClose"
          :items="$store.state.profile.profile.mini" :headers="profileNav.menu.miniHeaders" />
      </v-dialog>
      <v-dialog v-model="associatedProfileDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="associatedProfileOk" @close="associatedProfileClose"
          :items="$store.state.profile.profile.mini" :headers="profileNav.menu.miniHeaders" />
      </v-dialog>
    </template>
  </crud-form>
</template>
<script>

import associatedProfileModel from "./AssociatedProfileModel";
import profileNav from '../profile/ProfileNav.js';
export default {
  components: {},
  name: "AssociatedProfile",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: associatedProfileModel.path,
    associatedProfile: associatedProfileModel.associatedProfile,
    profileNav: profileNav,
    profileRules: [(v) => !!v || "Profile is required",
    ], associatedProfileRules: [(v) => !!v || "Associated Profile is required",
    ], positionRules: [(v) => !!v || "Position is required",
    (v) => v.length < 100 || "Position length must be less or equal to 100",],

    profileDialog: false,
    associatedProfileDialog: false,
    profileData: null,
    associatedProfileData: null,
    mtdsProvided: true,
    showPrintPrompt: true,
  }),
  created() {
    this.$store.dispatch("profile/profile/getMini");
    this.$store.dispatch("profile/profile/getMini");
  },
  computed: {},

  watch: {
    profileData() {
      if (this.profileData) {
        this.associatedProfile.profile = this.profileData.id;
      }

    },
    associatedProfileData() {
      if (this.associatedProfileData) {
        this.associatedProfile.associatedProfile = this.associatedProfileData.id;
        this.associatedProfile.associatedProfileName = this.associatedProfileData.displayKey;
      }

    },
  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.associatedProfile });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.associatedProfile.id}`, body: this.associatedProfile });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.associatedProfile = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.associatedProfile.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.associatedProfile = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.associatedProfile)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    print() {
      let data = [];
      data.push({ text: "Profile", value: this.associatedProfile.profile });
      data.push({ text: "Associated Profile", value: this.associatedProfile.associatedProfile });
      data.push({ text: "Position", value: this.associatedProfile.position });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Associated Profile"

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
    associatedProfileOk(data) {
      this.associatedProfileData = data
    },
    associatedProfileClose() {
      this.associatedProfileDialog = false;
    },

    showAssociatedProfileDialog() {
      this.associatedProfileDialog = true;
    },
  }
};
</script>
