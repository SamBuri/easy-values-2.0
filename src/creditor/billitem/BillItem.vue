<script setup>
import billItemController from "./BillItemController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = billItemController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Bill Item</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="itemId"
          label="Item Id"
          v-model="model.itemId"
          :rules="rules.itemId"
          :counter="100"
          @ok="controller.itemIdOk"
          :items="controller.itemStore.mini"
          :headers="controller.itemNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="itemName"
          label="Item Name"
          v-model="model.itemName"
          :rules="rules.itemName"
           disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="itemCategory"
          label="Item Category"
          v-model="model.itemCategory"
          :rules="rules.itemCategory"
           disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="quantity"
          label="Quantity"
          v-model="model.quantity"
          :rules="rules.quantity"
           :disabled="!model.editQuantity"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="unitCost"
          label="Unit Cost"
          v-model="model.unitCost"
          :rules="rules.unitCost"
          :disable="!model.editUnitCost"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          disabled
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
