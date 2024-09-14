<script setup>
import profilePictureController from "./ProfilePictureController";
import funcs from "../../utils/funcs";
const cols = 12;
const sm = 6;
const md = 6;
const controller = profilePictureController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Profile Picture</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="profileId"
          label="Profile"
          v-model="model.profileId"
          :rules="rules.profileId"
          :items="controller.profileStore.mini"
          :loading="controller.profileStore.miniLoading"
          item-title="profileName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="name"
          label="Name"
          v-model="model.name"
          :rules="rules.name"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="imageType"
          label="Image Type"
          v-model="model.imageType"
          :rules="rules.imageType"
          :items="controller.profileStore.imageTypes"
          :loading="controller.profileStore.imageTypesLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-file-input
          id="photo"
          label="Photo"
          v-model="model.photo"
        ></s-file-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="caption"
          label="Caption"
          v-model="model.caption"
          :rules="rules.caption"
          :counter="100"
        ></s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
