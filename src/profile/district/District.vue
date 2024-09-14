<script setup>
import districtController from "./DistrictController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = districtController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>District</template>

    <template #form-data>
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
          id="districtName"
          label="District Name"
          v-model="model.districtName"
          :rules="rules.districtName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="isDefault"
          label="Default"
          v-model="model.isDefault"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
