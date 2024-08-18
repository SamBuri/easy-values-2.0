<script setup>
import itemController from "./ItemController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = itemController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Item</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="itemCategoryId"
          label="Item Category"
          v-model="model.itemCategoryId"
          :rules="rules.itemCategory"
          :counter="100"
          :items="controller.itemCategoryStore.mini"
          :loading="controller.itemCategoryStore.miniLoading"
          item-title="itemCategory"
          item-value="id"

        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="itemName"
          label="Item Name"
          v-model="model.itemName"
          :rules="rules.itemName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="unitCost"
          label="Unit Cost"
          v-model="model.unitCost"
          :rules="rules.unitCost"
          :counter="100"
        ></s-number-input>
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
        <s-autocomplete
          id="measureGroupId"
          label="Measure Group"
          v-model="model.measureGroupId"
          :rules="rules.measureGroup"
          :counter="100"
          :items="controller.measureGroupStore.mini"
          :loading="controller.measureGroupStore.miniLoading"
          item-title="measureGroupName"
          item-value="id"

        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="editUnitCost"
          label="Edit Unit Cost"
          v-model="model.editUnitCost"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="editUnitPrice"
          label="Edit Unit Price"
          v-model="model.editUnitPrice"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="editQuantity"
          label="Edit Quantity"
          v-model="model.editQuantity"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Item Price Groups"
          :headers="controller.itemPriceGroupNav.menu.editHeaders"
          :items="model.itemPriceGroups"
          :component="controller.itemPriceGroupNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
