<script setup>
import profileController from "./ProfileController";
import rootOptions from "@/root/RootOptions";
import ProfilePicture from "../profilepicture/ProfilePicture.vue";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = profileController();

const model = controller.model;
const rules = controller.rules;

const profilePictures = controller.profilePictures;
const showPictures = controller.showPictures;
const isOrganisation = controller.isOrganisation;
const isUpdate = controller.isUpdate;
const photoWidth = 100;

const addPictureDialog = controller.addPictureDialog;
const showPictureDialog = true;
const pictureDialog = true;
const pictureDialogWidth = 600;
const displayPhotoWidth = 200;
const saveProfilePictureDialog = true;
const maxWidth = 700;
const menuItems = [
  { title: "Make Profile" },
  { title: "Delete" },
  { title: "Edit Caption" },
];
</script>

<template>
  <div>
    <span>
      <v-card
        :max-width="photoWidth"
        :max-height="photoWidth"
        v-for="(pic, i) in profilePictures"
        :key="i"
        class="card-right"
      >
        <s-image
          v-if="pic.imageType == 'Primary'"
          :width="displayPhotoWidth"
          :height="displayPhotoWidth"
          :imageData="pic.photo"
        >
        </s-image>
      </v-card>
    </span>
    <crud-form :controller="controller">
      <template #heading> Profile </template>

      <template #right v-if="showPictures">
        <v-card
          :max-width="photoWidth"
          :max-height="photoWidth"
          v-for="(pic, i) in profilePictures"
          :key="i"
        >
          <s-image
            v-if="pic.imageType == 'Primary'"
            :width="displayPhotoWidth"
            :height="displayPhotoWidth"
            :imageData="pic.photo"
          >
          </s-image>
        </v-card>
      </template>

      <template #form-data>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete
            id="profileType"
            label="Profile Type"
            v-model="model.profileType"
            :rules="rules.profileType"
            :items="controller.profileStore.profileTypes"
            :loading="controller.profileStore.profileTypesLoading"
          ></s-autocomplete>
        </v-col>
        <template v-if="!isOrganisation">
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="firstName"
              label="First Name"
              v-model="model.firstName"
              :rules="rules.firstName"
              :counter="20"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="lastName"
              label="Last Name"
              v-model="model.lastName"
              :rules="rules.lastName"
              :counter="20"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="otherNames"
              label="Other Names"
              v-model="model.otherNames"
              :rules="rules.otherNames"
              :counter="20"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-date-picker
              id="birthDate"
              label="Birth Date"
              v-model="model.birthDate"
              :rules="rules.birthDate"
          /></v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="gender"
              label="Gender"
              v-model="model.gender"
              :rules="rules.gender"
              :items="controller.lookupStore.gender"
              :loading="controller.lookupStore.genderLoading"
            ></s-autocomplete>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="maritalStatusId"
              label="Marital Status"
              v-model="model.maritalStatusId"
              :rules="rules.maritalStatusId"
              :items="controller.lookupDataStore.maritalStatuses"
              :loading="controller.lookupDataStore.maritalStatusesLoading"
              item-title="lookupDataName"
              item-value="id"
            ></s-autocomplete>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="spouseName"
              label="Spouse Name"
              v-model="model.spouseName"
              :rules="rules.spouseName"
              :counter="100"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="spouseContact"
              label="Spouse Contact"
              v-model="model.spouseContact"
              :rules="rules.spouseContact"
              :counter="100"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="nOKin"
              label="NO Kin"
              v-model="model.nOKin"
              :rules="rules.nOKin"
              :counter="100"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="nOKinContact"
              label="NO Kin Contact"
              v-model="model.nOKinContact"
              :rules="rules.nOKinContact"
              :counter="100"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="idTypeId"
              label="Id Type"
              v-model="model.idTypeId"
              :rules="rules.idTypeId"
              :items="controller.lookupDataStore.idTypes"
              :loading="controller.lookupDataStore.idTypesLoading"
              item-title="lookupDataName"
              item-value="id"
            ></s-autocomplete>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="idNo"
              label="Id No"
              v-model="model.idNo"
              :rules="rules.idNo"
              :counter="100"
            ></s-text-field>
          </v-col>

          <!-- <v-col :cols="cols" :sm="sm" :md="md">
          <s-file-input
            id="fingerPrint"
            label="FingerPrint"
            v-model="model.fingerPrint"
          ></s-file-input>
        </v-col> -->

          <v-col :cols="cols" :sm="sm" :md="md">
            <s-textarea
              id="homeAddress"
              label="Home Address"
              v-model="model.homeAddress"
              :rules="rules.homeAddress"
              :counter="200"
              rows="1"
              auto-grow
            ></s-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-textarea
              id="residentialAddress"
              label="Residential Address"
              v-model="model.residentialAddress"
              :rules="rules.residentialAddress"
              :counter="200"
              rows="1"
              auto-grow
            ></s-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-textarea
              id="residenceCoordinates"
              label="Residence Coordinates"
              v-model="model.residenceCoordinates"
              :rules="rules.residenceCoordinates"
              :counter="200"
              rows="1"
              auto-grow
            ></s-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-textarea
              id="addressDetails"
              label="Address Details"
              v-model="model.addressDetails"
              :rules="rules.addressDetails"
              :counter="200"
              rows="1"
              auto-grow
            ></s-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-date-picker
              id="joinDate"
              label="Join Date"
              v-model="model.joinDate"
              :rules="rules.joinDate"
          /></v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="occupationId"
              label="Occupation"
              v-model="model.occupationId"
              :rules="rules.occupationId"
              :items="controller.lookupDataStore.occupations"
              :loading="controller.lookupDataStore.occupationsLoading"
              item-title="lookupDataName"
              item-value="id"
            ></s-autocomplete>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="workType"
              label="Work Type"
              v-model="model.workType"
              :rules="rules.workType"
              :items="controller.lookupStore.workTypes"
              :loading="controller.lookupStore.workTypesLoading"
            ></s-autocomplete>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <s-autocomplete
              id="countryId"
              label="Country"
              v-model="model.countryId"
              :rules="rules.countryId"
              :items="controller.countryStore.mini"
              :loading="controller.countryStore.miniLoading"
              item-title="countryName"
              item-value="id"
            ></s-autocomplete>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="primaryPhoneNo"
              label="Primary Phone No"
              v-model="model.primaryPhoneNo"
              :rules="rules.primaryPhoneNo"
              :counter="30"
            ></s-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-text-field
              id="otherPhoneNos"
              label="Other Phone Nos"
              v-model="model.otherPhoneNos"
              :rules="rules.otherPhoneNos"
              :counter="30"
            ></s-text-field>
          </v-col>
        </template>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field
            id="businessName"
            label="Business Name"
            v-model="model.businessName"
            :rules="rules.businessName"
            :counter="100"
          ></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete
            id="businessCategoryId"
            label="Business Category"
            v-model="model.businessCategoryId"
            :rules="rules.businessCategoryId"
            :items="controller.lookupDataStore.businessCategories"
            :loading="controller.lookupDataStore.businessCategoriesLoading"
            item-title="lookupDataName"
            item-value="id"
          ></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-textarea
            id="businessDescriptions"
            label="Business Description"
            v-model="model.businessDescriptions"
            :rules="rules.businessDescriptions"
            :counter="200"
            rows="1"
            auto-grow
          ></s-textarea>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field
            id="designation"
            label="Designation"
            v-model="model.designation"
            :rules="rules.designation"
            :counter="100"
          ></s-text-field>
        </v-col>

        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field
            id="email"
            label="Email"
            v-model="model.email"
            :rules="rules.email"
            :counter="100"
          ></s-text-field>
        </v-col>

        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field
            id="businessLocation"
            label="Business Location"
            v-model="model.businessLocation"
            :rules="rules.businessLocation"
            :counter="100"
          ></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field
            id="workCoordinates"
            label="Work Coordinates"
            v-model="model.workCoordinates"
            :rules="rules.workCoordinates"
            :counter="100"
          ></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-checkbox
            id="idNoVerified"
            label="Id No Verified"
            v-model="model.idNoVerified"
            :rules="rules.phoneVerified"
          ></v-checkbox>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-checkbox
            id="phoneVerified"
            label="Phone Verified"
            v-model="model.phoneVerified"
            :rules="rules.phoneVerified"
          ></v-checkbox>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
          <v-checkbox
            id="hidden"
            label="Hidden"
            v-model="model.hidden"
          ></v-checkbox>
        </v-col>
      </template>
    </crud-form>
    <v-dialog
      v-model="addPictureDialog"
      :max-width="pictureDialogWidth"
      persistent
    >
      <ProfilePicture
        :dialog="true"
        @ok="controller.closeAddPictureDialog"
        @cancel="controller.closeAddPictureDialog"
        buttonLabel="Save"
        :retain="true"
      ></ProfilePicture>
    </v-dialog>
    <v-card flat :max-width="maxWidth" class="mx-auto mt-0 pa-1">
      <v-container v-if="isUpdate">
        <v-row
          ><v-btn color="primary" text @click="controller.addPicture"
            >Upload Photos</v-btn
          ></v-row
        >
        <v-row v-if="showPictures">
          <v-col
            v-for="(pic, i) in profilePictures"
            :key="i"
            :cols="cols"
            :sm="sm"
            :md="md"
          >
            <v-card
              :max-width="displayPhotoWidth"
              :max-height="displayPhotoWidth"
            >
              <s-image
                :width="displayPhotoWidth"
                :height="displayPhotoWidth"
                :imageData="pic.photo"
                :items="menuItems"
              >
              </s-image>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<!-- <script>
import profileModel from "./ProfileModel";
import constants from "../../utils/constants";
import funcs from '../../utils/funcs'
import associatedProfileNav from '../associatedprofile/AssociatedProfileNav'
import ProfilePicture from "../profilepicture/ProfilePicture.vue";
export default {
  components: { ProfilePicture },
  props: ['inner'],
  name: "Profile",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    mdp: 4,
    maxWidth: 1000,
    path: profileModel.path,
    profile: profileModel.profile,
    associatedProfileNav: associatedProfileNav,

    photoRules: [(v) => !!v || "Photo is required"],

    countryIdRules: [(v) => !!v || "Country is required"],


    primaryPhoneNoRules: [
      (v) => !!v || "Primary Phone No is required",
      (v) =>
        v.length < 30 || "Primary Phone No length must be less or equal to 30",
    ],
    otherPhoneNosRules: [
      (v) => !!v || "Other Phone Nos is required",
      (v) =>
        v.length < 30 || "Other Phone Nos length must be less or equal to 30",
    ],

    emailRules: [
      (v) => v.length < 100 || "Email length must be less or equal to 100",
      //  v => !this.testEmail(v) || 'E-mail must be valid',
    ],

    emRules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 20 || 'Max 20 characters',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    ],



    addressDetailsRules: [
      (v) => !!v || "Address Details is required",
      (v) =>
        v.length < 200 || "Address Details length must be less or equal to 200",
    ],

    businessCategoryIdRules: [(v) => !!v || "Business Category is required"],
    businessDescriptionsRules: [
      (v) => !!v || "Business Description is required",
      (v) =>
        v.length < 200 ||
        "Business Description length must be less or equal to 200",
    ],

    businessNameRules: [
      (v) => !!v || "Business Name is required",
      (v) =>
        v.length < 100 || "Business Name length must be less or equal to 100",
    ],
    businessLocationRules: [
      (v) => !!v || "Business Location is required",
      (v) =>
        v.length < 100 ||
        "Business Location length must be less or equal to 100",
    ],
    workCoordinatesRules: [
      (v) => !!v || "Work Coordinates is required",
      (v) =>
        v.length < 100 ||
        "Work Coordinates length must be less or equal to 100",
    ],

    idNoVerifiedRules: [(v) => v || "Id No  verified must be ticket"],

    phoneVerifiedRules: [(v) => v || "Phone verified must be ticket"],

    profileTypeRules: [(v) => !!v || "Profile Type is required"],
    designationRules: [

      (v) => v.length < 100 || "Designation length must be less or equal to 100",
    ],
    // photoUrl: null,
    fingerPrintUrl: null,
    photoChanged: false,
    freshRead: false,
    photoWidth: 100,
    showPictureDialog: true,
    pictureDialog: true,
    pictureDialogWidth: 600,
    displayPhotoWidth: 200,
    deletable: false,
    saveProfilePictureDialog: true,

    menuItems: [
      { title: 'Make Profile' },
      { title: 'Delete' },
      { title: 'Edit Caption' },
    ],



  }),
  created() {

    this.$store.dispatch("lookup/getGenders");
    this.$store.dispatch("lookup/lookupdata/getMaritalStatuses");
    this.$store.dispatch("profile/country/getMini");
    this.$store.dispatch("lookup/lookupdata/getIdTypes");
    this.$store.dispatch("lookup/lookupdata/getOccupations");
    this.$store.dispatch("lookup/getWorkTypes");
    this.$store.dispatch("lookup/lookupdata/getBusinessCategories");
    this.$store.dispatch("profile/getProfileTypes");
  },
  mounted() {

  },
  computed: {
    // countryObj() {
    //   return this.model.countryObj;
    // },



    countries() {
      return this.$store.state.model.country.mini;
    },
    testEmail(v) {
      if (v) {
        return /.+@.+\..+/.test(v);
      }
      else { return true; }
    },

    isIndividual() {
      return this.model.profileType === 'Individual';
    },

    firstNameRules() {
      if (this.isIndividual) return [
        (v) => !!v || "First Name is required",
        (v) => v.length <= 20 || "First Name length must be less or equal to 20",
      ];

      return [];
    },

    lastNameRules() {
      if (this.isIndividual) return [
        (v) => !!v || "Last Name is required",
        (v) => v.length <= 20 || "Last Name length must be less or equal to 20",
      ];

      return [];
    },
    homeAddressRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Home Address is required",
        (v) =>
          v.length < 200 || "Home Address length must be less or equal to 200",
        ];
      return [];

    },

    residentialAddressRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Residential Address is required",
        (v) =>
          v.length < 200 ||
          "Residential Address length must be less or equal to 200",
        ];
      return [];
    },
    residenceCoordinatesRules() {
      if (this.isIndividual)
        [
          (v) => !!v || "Residence Coordinates is required",
          (v) =>
            v.length < 200 ||
            "Residence Coordinates length must be less or equal to 200",
        ];
      return [];
    },

    workTypeRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Work Type is required"];
      return [];
    },

    genderRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Gender is required"];
      return [];
    },
    maritalStatusIdRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Marital Status is required"];
      return [];
    },
    idTypeIdRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Id Type is required"];
      return [];
    },
    idNoRules() {
      if (this.isIndividual)
        return [(v) => !!v || "Id No is required",
        (v) => v.length < 100 || "Id No length must be less or equal to 100",
        ];
      return [];
    },

    profileId() {
      return this.model.id;
    },
    profilePictures() {
      return this.$store.state.profile.profilepicture.profilePictures;
    },

    isUpdateMode() {
      let mode = parseInt(this.$route.params.mode, 10);
      return mode === 1 || mode === 2 || this.$store.state.search.dialog || this.$store.state.crudtable.dialog || this.$store.state.components.dialog;
    },

    isOrganisation() {
      if (!this.profile) return false;
      return this.model.profileType === 'Organisation'
    },

    showPictures() {
      return this.isUpdateMode && this.profilePictures.length > 0;
    },






  },

  watch: {

    profile() {
      if (!this.profile) {
        this.profile = profileModel.profile;
      }
    },
    countries() {
      this.setDefaultCountry();
    },

    async profileId() {
      this.$store.commit("profile/profilepicture/profilePictures", []);
      if (!this.isUpdateMode) return;
      await this.$store.dispatch("profile/profilepicture/getProfilePictures", this.profileId);

    },


  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.getFormData(),
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.model.id}`,
        body: this.getFormData(),
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.profile = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.model.clear();
      this.setDefaultCountry();
    },
    async setObjects(obj) {

      this.model.countryObj = { id: obj.countryId, countryName: obj.country };
      console.log("Profile Country Obj", this.model.countryObj);
      // funcs.createFileFromBytes(obj.photo).then(e => {
      //   console.log("Created File ", e);
      //   this.model.photo = e;
      //   return e;

      // }).catch(error => console.log("Error creating a file from bytes", error));

      let file = await funcs.createFileFromBytes(obj.photo);
      this.model.photo = file;
      console.log("Returned file from byte", file);
      this.freshRead = true;
      this.photoChanged = false;


    },
    setDialog(obj) {
      this.profile = Object.assign({}, obj);
      this.setObjects(obj);


    },
    done() {
      // this.$store.commit("crudtable/data", Object.assign({}, this.profile));
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },
    showHidden(buttonText) {
      return buttonText === constants.buttonTexts.update;
    },
    getFormData() {
      var data = new FormData();

      data.append("profileType", this.model.profileType);
      if (this.model.photo !== null && !this.freshRead) {
        data.append("photo", this.model.photo);
      }
      data.append("firstName", this.model.firstName);
      data.append("lastName", this.model.lastName);
      data.append("otherNames", this.model.otherNames);
      data.append("birthDate", this.model.birthDate);
      data.append("gender", this.model.gender);
      data.append("maritalStatusId", this.model.maritalStatusId);
      data.append("countryId", this.model.countryObj.id);
      data.append("country", this.model.countryObj.countryName);
      data.append("spouseName", this.model.spouseName);
      data.append("spouseContact", this.model.spouseContact);
      data.append("nOKin", this.model.nOKin);
      data.append("nOKinContact", this.model.nOKinContact);
      data.append("idTypeId", this.model.idTypeId);
      data.append("idNo", this.model.idNo);
      data.append("primaryPhoneNo", this.model.primaryPhoneNo);
      data.append("otherPhoneNos", this.model.otherPhoneNos);
      data.append("email", this.model.email);
      data.append("homeAddress", this.model.homeAddress);
      data.append("residentialAddress", this.model.residentialAddress);
      data.append("residenceCoordinates", this.model.residenceCoordinates);
      data.append("addressDetails", this.model.addressDetails);
      data.append("joinDate", this.model.joinDate);
      data.append("occupationId", this.model.occupationId);
      data.append("workType", this.model.workType);
      data.append("businessCategoryId", this.model.businessCategoryId);
      data.append("businessDescriptions", this.model.businessDescriptions);
      data.append("designation", this.model.designation);
      data.append("businessName", this.model.businessName);
      data.append("businessLocation", this.model.businessLocation);
      data.append("workCoordinates", this.model.workCoordinates);
      data.append("idNoVerified", this.model.idNoVerified);
      data.append("phoneVerified", this.model.phoneVerified);


      return data;
    },

    setDefaultCountry() {
      if (this.countries) {
        let defaultCountries = this.countries.filter(c => c.isDefault);

        console.log("Default Countries", defaultCountries)

        if (defaultCountries.length > 0) {
          if (this.model.countryObj === null) {
            this.model.countryObj = defaultCountries[0];
          }
        }

      }

    },

    postSave(entity) {
      this.$store.commit("components/saveDialog", true);
      this.$store.commit("profile/profile/entity", entity)
    },



    <showPhotosDialog>() {

      this.$store.commit("components/saveDialog", true);
      this.$store.commit("profile/profile/entity", this.profile)
    },

    pictureDialogOk(profilePicture) {
      console.log("Profile Picture Ok", profilePicture)
      this.saveProfilePictureDialog = false;
    }


  },
};
</script> -->
<!-- <style>
.custom-card {
  border: 2px solid #e0e0e0;
  /* Set the border thickness and color */
}
</style> -->

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.card-right {
  position: absolute;
  top: 80;
  right: 0;
  margin: 10px;
  /* background-color: #6200ea; */
  color: white;
  /* padding: 20; */
  width: 400px;
  border-radius: 1px;
}
</style>
