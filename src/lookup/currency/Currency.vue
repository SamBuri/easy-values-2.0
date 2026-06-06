<script setup>
import currencyController from "./CurrencyController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = currencyController();

const model = controller.model;
const rules = controller.rules;
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Currency</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="currencyCode"
          label="Currency Code"
          v-model="model.currencyCode"
          :rules="rules.currencyCode"
          :counter="3"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="currencyName"
          label="Currency Name"
          v-model="model.currencyName"
          :rules="rules.currencyName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="symbol"
          label="Symbol"
          v-model="model.symbol"
          :counter="10"
        ></s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
