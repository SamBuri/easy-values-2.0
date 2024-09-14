<script setup>
import periodController from "./PeriodController";
const cols = 12;
const sm = 12;
const md = 12;
const controller = periodController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Period</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="periodName"
          label="Period Name"
          v-model="model.periodName"
          :rules="rules.periodName"
          :counter="40"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="days"
          label="Days"
          v-model="model.days"
          :rules="rules.days"
          :counter="100"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
