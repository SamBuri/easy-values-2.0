<script setup>
import profileController from "./ProfileController";
import ProfilePicture from "../profilepicture/ProfilePicture.vue";
import rootOptions from '@/root/RootOptions';
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = profileController();

const profilePictures = controller.profilePictures;
const showPictures = controller.showPictures;
const isUpdate = controller.isUpdate;
const photoWidth = 200;
const addPictureDialog = controller.addPictureDialog
const pictureDialogWidth= 600;
const maxWidth = 700;
const menuItems = [
  { title: "Make Profile" },
  { title: "Delete" },
  { title: "Edit Caption" },];
const model = controller.model;
const rules = controller.rules;
</script>
<template>


  <crud-form :controller="controller">

    <template #heading> Profile </template>

    <template #form-header v-if="isUpdate">
      <v-cols :cols="cols" :sm="cols" :md="cols">
        <v-card :max-width="photoWidth" :max-height="photoWidth" v-for="(pic, i) in profilePictures" :key="i"
          class="image-card">
          <s-image v-if="pic.imageType == 'Primary'" :width="photoWidth" :height="photoWidth"
            :imageData="pic.photo">
          </s-image>
        </v-card> <br/>

      </v-cols>
    </template>

    <template #form-data>


      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="profileType" label="Profile Type" v-model="model.profileType" :rules="rules.profileType"
          :items="controller.profileStore.profileTypes"
          :loading="controller.profileStore.profileTypesLoading"></s-autocomplete>
      </v-col>
      <template v-if="model.profileType === 'Individual'">
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="profileNo" label="Profile No" v-model="model.profileNo" :rules="rules.profileNo"
            :counter="20"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="firstName" label="First Name" v-model="model.firstName" :rules="rules.firstName"
            :counter="20"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="lastName" label="Last Name" v-model="model.lastName" :rules="rules.lastName"
            :counter="20"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="otherNames" label="Other Names" v-model="model.otherNames" :rules="rules.otherNames"
            :counter="20"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-date-picker id="birthDate" label="Birth Date" v-model="model.birthDate" :rules="rules.birthDate" /></v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="gender" label="Gender" v-model="model.gender" :rules="rules.gender"
            :items="controller.lookupStore.gender" :loading="controller.lookupStore.genderLoading"></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="maritalStatusId" label="Marital Status" v-model="model.maritalStatusId"
            :rules="rules.maritalStatusId" :items="controller.lookupDataStore.maritalStatuses"
            :loading="controller.lookupDataStore.maritalStatusesLoading" item-title="lookupDataName"
            item-value="id"></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="countryId" label="Country" v-model="model.countryId" :rules="rules.countryId"
            :items="controller.countryStore.mini" :loading="controller.countryStore.miniLoading"
            item-title="countryName" item-value="id"></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="spouseName" label="Spouse Name" v-model="model.spouseName" :rules="rules.spouseName"
            :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="spouseContact" label="Spouse Contact" v-model="model.spouseContact"
            :rules="rules.spouseContact" :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="nOKin" label="NO Kin" v-model="model.nOKin" :rules="rules.nOKin"
            :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="nOKinContact" label="NO Kin Contact" v-model="model.nOKinContact"
            :rules="rules.nOKinContact" :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="idTypeId" label="Id Type" v-model="model.idTypeId" :rules="rules.idTypeId"
            :items="controller.lookupDataStore.idTypes" :loading="controller.lookupDataStore.idTypesLoading"
            item-title="lookupDataName" item-value="id"></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="idNo" label="Id No" v-model="model.idNo" :rules="rules.idNo" :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="primaryPhoneNo" label="Primary Phone No" v-model="model.primaryPhoneNo"
            :rules="rules.primaryPhoneNo" :counter="30"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="otherPhoneNos" label="Other Phone Nos" v-model="model.otherPhoneNos"
            :rules="rules.otherPhoneNos" :counter="30"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-text-field id="email" label="Email" v-model="model.email" :rules="rules.email"
            :counter="100"></s-text-field>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-textarea id="homeAddress" label="Home Address" v-model="model.homeAddress" :rules="rules.homeAddress"
            :counter="200" rows="1" auto-grow></s-textarea>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-textarea id="residentialAddress" label="Residential Address" v-model="model.residentialAddress"
            :rules="rules.residentialAddress" :counter="200" rows="1" auto-grow></s-textarea>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-textarea id="residenceCoordinates" label="Residence Coordinates" v-model="model.residenceCoordinates"
            :rules="rules.residenceCoordinates" :counter="200" rows="1" auto-grow></s-textarea>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-textarea id="addressDetails" label="Address Details" v-model="model.addressDetails"
            :rules="rules.addressDetails" :counter="200" rows="1" auto-grow></s-textarea>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-date-picker id="joinDate" label="Join Date" v-model="model.joinDate" :rules="rules.joinDate" /></v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="occupationId" label="Occupation" v-model="model.occupationId" :rules="rules.occupationId"
            :items="controller.lookupDataStore.occupations" :loading="controller.lookupDataStore.occupationsLoading"
            item-title="lookupDataName" item-value="id"></s-autocomplete>
        </v-col>
        <v-col :cols="cols" :sm="sm" :md="md">
          <s-autocomplete id="workType" label="Work Type" v-model="model.workType" :rules="rules.workType"
            :items="controller.lookupStore.workTypes"
            :loading="controller.lookupStore.workTypesLoading"></s-autocomplete>
        </v-col>

      </template>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="businessCategoryId" label="Business Category" v-model="model.businessCategoryId"
          :rules="rules.businessCategoryId" :items="controller.lookupDataStore.businessCategories"
          :loading="controller.lookupDataStore.businessCategoriesLoading" item-title="lookupDataName"
          item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea id="businessDescriptions" label="Business Description" v-model="model.businessDescriptions"
          :rules="rules.businessDescriptions" :counter="200" rows="1" auto-grow></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="model.profileType === 'Individual'">
        <s-text-field id="designation" label="Designation" v-model="model.designation" :rules="rules.designation"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="businessName" label="Business Name" v-model="model.businessName" :rules="rules.businessName"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="businessLocation" label="Business Location" v-model="model.businessLocation"
          :rules="rules.businessLocation" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="workCoordinates" label="Work Coordinates" v-model="model.workCoordinates"
          :rules="rules.workCoordinates" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="idNoVerified" label="Id No Verified" v-model="model.idNoVerified"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="phoneVerified" label="Phone Verified" v-model="model.phoneVerified"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="hidden" label="Hidden" v-model="model.hidden"></v-checkbox>
      </v-col>
    </template>
    <template #after-card>
      <v-dialog v-model="addPictureDialog" :max-width="pictureDialogWidth" persistent>
        <ProfilePicture :dialog="true" @ok="controller.closeAddPictureDialog" @cancel="controller.closeAddPictureDialog"
          buttonLabel="Save" :retain="true"></ProfilePicture>
      </v-dialog>
      <v-card flat :max-width="maxWidth">

        <v-container v-if="isUpdate">
          <v-row><v-btn color="primary" text @click="controller.addPicture" v-if="model.saved">Upload Photos</v-btn></v-row>
          <v-row v-if="showPictures">
            <v-col v-for="(pic, i) in profilePictures" :key="i" :cols="cols" :sm="sm" :md="md">
              <v-card :max-width="photoWidth" :max-height="photoWidth">
                <s-image :width="photoWidth" :height="photoWidth" :imageData="pic.photo"
                  :items="menuItems">
                </s-image>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </crud-form>

</template>

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

.image-card {
  color: white;
  width: 400px;
  border-radius: 1px;
}
</style>
