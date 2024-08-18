<script setup>
import measureRelationController from "./MeasureRelationController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = measureRelationController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Measure Relation</template>

    <template #form-data>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="measureName"
          label="Measure Name"
          v-model="model.measureName"
          :rules="rules.measureName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="measureSize"
          label="Measure Size"
          v-model="model.measureSize"
          :rules="rules.measureSize"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="basic" label="Basic" v-model="model.basic"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="defaultUsage"
          label="Default Usage"
          v-model="model.defaultUsage"
          :rules="rules.defaultUsage"
          :counter="100"
          :items="controller.lookupStore.unitMeasureUsages"
          :loading="controller.lookupStore.unitMeasureUsagesLoading"
        ></s-autocomplete>
      </v-col>
    </template>
  </crud-form>
</template>
