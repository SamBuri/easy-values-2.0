<script setup>
import organisationSettingController from "./OrganisationSettingController";

const cols = 12;
const sm = 6;
const md = 6;
const controller = organisationSettingController();
const model = controller.model;
const rules = controller.rules;
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Organisation Setting</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="companyId"
          label="Company"
          v-model="model.companyId"
          :items="controller.companyStore.mini"
          item-title="companyName"
          item-value="id"
          :rules="rules.companyId"
          :loading="controller.companyStore.miniLoading"
        ></s-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="settingId"
          label="Setting"
          v-model="model.settingId"
          :items="controller.settingStore.mini"
          item-title="propertyName"
          item-value="id"
          :rules="rules.settingId"
          :loading="controller.settingStore.miniLoading"
        ></s-autocomplete>
      </v-col>

      <v-col :cols="cols">
        <s-text-field
          id="propertyValue"
          label="Override Property Value"
          v-model="model.propertyValue"
          :rules="rules.propertyValue"
          :counter="255"
        ></s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
