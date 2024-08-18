<script setup>
import invoiceDetailController from "./InvoiceDetailController";
import rootOptions from "@/root/RootOptions"
const cols = 12;
const sm = 4;
const md = 3;
const controller = invoiceDetailController();
rootOptions.maxWidth =1300;

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Invoice Detail</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="itemId"
          label="Item"
          v-model="model.itemId"
          :rules="rules.itemId"
          :counter="100"
          :items="controller.itemStore.mini"
          :loading="controller.itemStore.miniLoading"
          item-title="itemName"
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
        <s-text-field
          id="measure"
          label="Measure"
          v-model="model.measure"
          :rules="rules.measure"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="measureQuantity"
          label="Measure Quantity"
          v-model="model.measureQuantity"
          :rules="rules.measureQuantity"
          :counter="100"
        ></s-number-input>
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
        <s-text-field
          id="unitMeasure"
          label="Unit Measure"
          v-model="model.unitMeasure"
          :rules="rules.unitMeasure"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="quantity"
          label="Quantity"
          v-model="model.quantity"
          :rules="rules.quantity"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="unitCost"
          label="UnitCost"
          v-model="model.unitCost"
          :rules="rules.unitCost"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="unitPrice"
          label="UnitPrice"
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
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="location"
          label="Location"
          v-model="model.location"
          :rules="rules.location"
          :counter="100"
        ></s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
