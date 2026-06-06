<script setup>
import exchangeRateController from "./ExchangeRateController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = exchangeRateController();

const model = controller.model;
const rules = controller.rules;

controller.currencyStore.getMini();
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Exchange Rate</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="currencyId"
          label="Currency"
          v-model="model.currencyId"
          :items="controller.currencyStore.mini"
          item-title="currencyCode"
          item-value="id"
          :rules="rules.currencyId"
          :loading="controller.currencyStore.miniLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="rateDate"
          label="Rate Date"
          v-model="model.rateDate"
          :rules="rules.rateDate"
        ></s-date-picker>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="buying"
          label="Buying"
          v-model="model.buying"
          :rules="rules.buying"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="selling"
          label="Selling"
          v-model="model.selling"
          :rules="rules.selling"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="baseCurrency"
          label="Base Currency"
          v-model="model.baseCurrency"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
