<template>
  <div>

    <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
      @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" @postSave="postSave"
      :path="path" :maxWidth="maxWidth" :inner="inner" :deletable="deletable">


      <template slot="heading">
        <v-toolbar flat>
          Profile

        </v-toolbar>

      </template>

      <template slot="right" v-if="showPictures">
        <v-card :max-width="photoWidth" :max-height="photoWidth" v-for="pic, i in profilePictures" :key="i">
          <s-image v-if="pic.imageType == 'Primary'" :width="displayPhotoWidth" :height="displayPhotoWidth"
            :imageData="pic.photo">
          </s-image>
        </v-card>
      </template>

      <template slot="form-data" slot-scope="{ isUpdate }">

        <v-col :cols="cols" :sm="sm" :md="md">
          <v-select label="Profile Type" v-model="profile.profileType" :rules="profileTypeRules" required
            :items="$store.state.profile.profileTypes" :loading="$store.state.profile.profileTypesLoading">
          </v-select>
        </v-col>


        <template v-if="isIndividual">

          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="First Name" v-model="profile.firstName" :rules="firstNameRules" :counter="20" required>
            </v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Last Name" v-model="profile.lastName" :rules="lastNameRules" :counter="20" required>
            </v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Other Names" v-model="profile.otherNames" :counter="20"></v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-select label="Gender" v-model="profile.gender" :rules="genderRules" :counter="10" required
              :items="$store.state.lookup.genders" :loading="$store.state.lookup.gendersLoading"></v-select>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <s-date-picker label="Birth Date" v-model="profile.birthDate" />
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <v-select label="Id Type" v-model="profile.idTypeId" :rules="idTypeIdRules" :counter="20" required
              :items="$store.state.lookup.lookupdata.idTypes" :loading="$store.state.lookup.lookupdata.idTypesLoading"
              item-text="lookupDataName" item-value="id"></v-select>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Id No" v-model="profile.idNo" :rules="idNoRules" :counter="100" required></v-text-field>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <v-textarea label="Home Address" v-model="profile.homeAddress" :rules="homeAddressRules" :counter="200"
              required rows="1" auto-grow></v-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-textarea label="Residential Address" v-model="profile.residentialAddress" :rules="residentialAddressRules"
              :counter="200" required rows="1" auto-grow></v-textarea>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-textarea label="Residence Coordinates" v-model="profile.residenceCoordinates" :counter="200" required
              rows="1" auto-grow></v-textarea>
          </v-col>


          <v-col :cols="cols" :sm="sm" :md="md">
            <v-select label="Occupation" v-model="profile.occupationId"
              :items="$store.state.lookup.lookupdata.occupations"
              :loading="$store.state.lookup.lookupdata.occupationsLoading" item-text="lookupDataName" item-value="id">
            </v-select>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-select label="Work Type" v-model="profile.workType" :rules="workTypeRules" :counter="20" required
              :items="$store.state.lookup.workTypes" :loading="$store.state.lookup.workTypesLoading"></v-select>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Designation" v-model="profile.designation" :rules="designationRules" :counter="100"
              required></v-text-field>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">
            <v-select label="Marital Status" v-model="profile.maritalStatusId" :rules="maritalStatusIdRules"
              :counter="100" required :items="$store.state.lookup.lookupdata.maritalStatuses"
              :loading="$store.state.lookup.lookupdata.maritalStatusesLoading" item-text="lookupDataName" item-value="id">
            </v-select>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Spouse Name" v-model="profile.spouseName" :counter="100" required></v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="Spouse Contact" v-model="profile.spouseContact" :counter="100" required></v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="NO Kin" v-model="profile.nokin" :counter="100" required></v-text-field>
          </v-col>
          <v-col :cols="cols" :sm="sm" :md="md">
            <v-text-field label="NO Kin Contact" v-model="profile.nokinContact" :counter="100" required></v-text-field>
          </v-col>

        </template>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Business Name" v-model="profile.businessName" :rules="businessNameRules" :counter="100"
            required></v-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-select label="Country" v-model="profile.countryObj" :rules="countryIdRules" :counter="100" required
            :items="$store.state.profile.country.mini" :loading="$store.state.profile.country.miniLoading"
            item-text="countryName" item-value="id" return-object></v-select>
        </v-col>

        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Primary Phone No" v-model="profile.primaryPhoneNo" :rules="primaryPhoneNoRules"
            :counter="30" required></v-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Other Phone Nos" v-model="profile.otherPhoneNos" :counter="30"></v-text-field>
        </v-col>


        <v-col :cols="cols" :sm="sm" :md="md">
          <v-textarea label="Address Details" v-model="profile.addressDetails" :rules="addressDetailsRules" :counter="200"
            required rows="1" auto-grow></v-textarea>
        </v-col>

        <v-col :cols="cols" :sm="sm" :md="md">
          <v-select label="Business Category" v-model="profile.businessCategoryId" :rules="businessCategoryIdRules"
            :counter="100" required :items="$store.state.lookup.lookupdata.businessCategories"
            :loading="$store.state.lookup.lookupdata.businessCategoriesLoading" item-text="lookupDataName"
            item-value="id"></v-select>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-textarea label="Business Description" v-model="profile.businessDescriptions"
            :rules="businessDescriptionsRules" :counter="200" required rows="1" auto-grow></v-textarea>
        </v-col>


        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Business Location" v-model="profile.businessLocation" :rules="businessLocationRules"
            :counter="100" required></v-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Work Coordinates" v-model="profile.workCoordinates" :counter="100" required></v-text-field>
          <!-- <s-map></s-map> -->
        </v-col>

        <v-col :cols="cols" :sm="sm" :md="md">
          <s-date-picker label="Join Date" v-model="profile.joinDate" />
        </v-col>


        <v-col :cols="cols" :sm="sm" :md="md">
          <v-text-field label="Email" v-model="profile.email" :counter="100" :rules="emailRules"></v-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-checkbox label="Id No Verified" v-model="profile.idNoVerified" :rules="idNoVerifiedRules"></v-checkbox>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <v-checkbox label="Phone Verified" v-model="profile.phoneVerified" :rules="phoneVerifiedRules"></v-checkbox>
        </v-col>
        <v-col cols="12" v-if="isOrganisation">
          <crud-table title="Associated Profiles" :headers="associatedProfileNav.menu.editHeaders"
            :items="profile.associatedProfiles" :component="associatedProfileNav.menu.component" maxWidth="700px" />
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
          <v-checkbox label="Hidden" v-model="profile.hidden"></v-checkbox>
        </v-col>
      </template>

    </crud-form>
    <v-dialog v-model="$store.state.components.saveDialog" :max-width="pictureDialogWidth"
      :profilePictures="profilePictures" persistent>
      <ProfilePicture :isDialog="saveProfilePictureDialog"></ProfilePicture>
    </v-dialog>
    <v-card flat :max-width="maxWidth" class="mx-auto mt-0 pa-1" >
      <v-container v-if="isUpdateMode">
        <v-row><v-btn color="primary" text @click="showPhotosDialog">Upload Photos</v-btn></v-row>
        <v-row v-if="showPictures"> 
          <v-col v-for="pic, i in profilePictures" :key="i" :cols="cols" :sm="sm" :md="md">

            <v-card :max-width="displayPhotoWidth" :max-height="displayPhotoWidth">
              <s-image :width="displayPhotoWidth" :height="displayPhotoWidth" :imageData="pic.photo" :items="menuItems">
              </s-image>
            </v-card>
          </v-col>


        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
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
    //   return this.profile.countryObj;
    // },



    countries() {
      return this.$store.state.profile.country.mini;
    },
    testEmail(v) {
      if (v) {
        return /.+@.+\..+/.test(v);
      }
      else { return true; }
    },

    isIndividual() {
      return this.profile.profileType === 'Individual';
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
      return this.profile.id;
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
      return this.profile.profileType === 'Organisation'
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
        path: `${this.path}/${this.profile.id}`,
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
      this.profile.clear();
      this.setDefaultCountry();
    },
    async setObjects(obj) {

      this.profile.countryObj = { id: obj.countryId, countryName: obj.country };
      console.log("Profile Country Obj", this.profile.countryObj);
      // funcs.createFileFromBytes(obj.photo).then(e => {
      //   console.log("Created File ", e);
      //   this.profile.photo = e;
      //   return e;

      // }).catch(error => console.log("Error creating a file from bytes", error));

      let file = await funcs.createFileFromBytes(obj.photo);
      this.profile.photo = file;
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

      data.append("profileType", this.profile.profileType);
      if (this.profile.photo !== null && !this.freshRead) {
        data.append("photo", this.profile.photo);
      }
      data.append("firstName", this.profile.firstName);
      data.append("lastName", this.profile.lastName);
      data.append("otherNames", this.profile.otherNames);
      data.append("birthDate", this.profile.birthDate);
      data.append("gender", this.profile.gender);
      data.append("maritalStatusId", this.profile.maritalStatusId);
      data.append("countryId", this.profile.countryObj.id);
      data.append("country", this.profile.countryObj.countryName);
      data.append("spouseName", this.profile.spouseName);
      data.append("spouseContact", this.profile.spouseContact);
      data.append("nOKin", this.profile.nOKin);
      data.append("nOKinContact", this.profile.nOKinContact);
      data.append("idTypeId", this.profile.idTypeId);
      data.append("idNo", this.profile.idNo);
      data.append("primaryPhoneNo", this.profile.primaryPhoneNo);
      data.append("otherPhoneNos", this.profile.otherPhoneNos);
      data.append("email", this.profile.email);
      data.append("homeAddress", this.profile.homeAddress);
      data.append("residentialAddress", this.profile.residentialAddress);
      data.append("residenceCoordinates", this.profile.residenceCoordinates);
      data.append("addressDetails", this.profile.addressDetails);
      data.append("joinDate", this.profile.joinDate);
      data.append("occupationId", this.profile.occupationId);
      data.append("workType", this.profile.workType);
      data.append("businessCategoryId", this.profile.businessCategoryId);
      data.append("businessDescriptions", this.profile.businessDescriptions);
      data.append("designation", this.profile.designation);
      data.append("businessName", this.profile.businessName);
      data.append("businessLocation", this.profile.businessLocation);
      data.append("workCoordinates", this.profile.workCoordinates);
      data.append("idNoVerified", this.profile.idNoVerified);
      data.append("phoneVerified", this.profile.phoneVerified);


      return data;
    },

    setDefaultCountry() {
      if (this.countries) {
        let defaultCountries = this.countries.filter(c => c.isDefault);

        console.log("Default Countries", defaultCountries)

        if (defaultCountries.length > 0) {
          if (this.profile.countryObj === null) {
            this.profile.countryObj = defaultCountries[0];
          }
        }

      }

    },

    postSave(entity) {
      this.$store.commit("components/saveDialog", true);
      this.$store.commit("profile/profile/entity", entity)
    },



    showPhotosDialog() {

      this.$store.commit("components/saveDialog", true);
      this.$store.commit("profile/profile/entity", this.profile)
    },

    pictureDialogOk(profilePicture) {
      console.log("Profile Picture Ok", profilePicture)
      this.saveProfilePictureDialog = false;
    }


  },
};
</script>
<style>
.custom-card {
  border: 2px solid #e0e0e0;
  /* Set the border thickness and color */
}
</style>