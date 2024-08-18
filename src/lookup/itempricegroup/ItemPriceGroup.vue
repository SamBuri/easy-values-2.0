<script setup>
import itemPriceGroupController from "./ItemPriceGroupController";
const cols = 12;
const sm = 12;
const md = 12;
const controller = itemPriceGroupController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Item Price Group</template>

    <template #form-data>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="priceGroupId"
          label="Price Group"
          v-model="model.priceGroupId"
          :rules="rules.priceGroupId"
          :counter="100"
          :items="controller.lookupDataStore.priceGroups"
          :loading="controller.lookupDataStore.priceGroupsLoading"
          item-title="lookupDataName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="unitPrice"
          label="Unit Price"
          v-model="model.unitPrice"
          :rules="rules.unitPrice"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="discount"
          label="Discount"
          v-model="model.discount"
          :rules="rules.discount"
          :counter="100"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
