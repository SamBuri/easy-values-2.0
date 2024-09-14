<script setup>
import countryController from "./CountryController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = countryController();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Country</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="countryName"
          label="Country Name"
          v-model="model.countryName"
          :rules="rules.countryName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="countryCode"
          label="Country Code"
          v-model="model.countryCode"
          :rules="rules.countryCode"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="default"
          label="Default"
          v-model="model.default"
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
</template>
