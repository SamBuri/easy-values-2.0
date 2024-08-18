<script setup>
import measureGroupController from "./MeasureGroupController";
import measureRelationNav from "@/lookup/measurerelation/MeasureRelationNav.js";
import measureRelationController from "@/lookup/measurerelation/MeasureRelationController.js";
import { ref } from "vue";
const cols = 12;
const sm = 12;
const md = 12;
const controller = measureGroupController();
controller.rawOptions.maxWidth = 900;

const model = controller.model;
const rules = controller.rules;

const { setData: setMeasureRelationData } = measureRelationController();
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Measure Group</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="measureGroupName"
          label="Measure Group Name"
          v-model="model.measureGroupName"
          :rules="rules.measureGroupName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Measure Relation"
          :headers="measureRelationNav.menu.editHeaders"
          :items="model.measureRelation"
          :component="measureRelationNav.menu.component"
          @setData="setMeasureRelationData"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
