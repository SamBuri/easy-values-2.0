<script setup>
import countryController from "./CountryController";
import { defineCurrencyStore } from "../currency/CurrencyStore";

const cols = 12;
const sm = 6;
const md = 6;
const controller = countryController();
const currencyStore = defineCurrencyStore();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;

currencyStore.getMini();
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
          :counter="3"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="diallingCode"
          label="Dialling Code"
          v-model="model.diallingCode"
          :counter="10"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-currency-field
          id="currencyId"
          label="Currency"
          v-model="model.currencyId"
          :rules="rules.currencyId"
        ></s-currency-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="isDefault"
          label="Is Default"
          v-model="model.isDefault"
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
