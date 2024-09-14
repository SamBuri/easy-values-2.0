<script setup>
import billController from "./BillController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1300;
const controller = billController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Bill</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="tranDate"
          label="Tran Date"
          v-model="model.tranDate"
          :rules="rules.tranDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="creditorId"
          label="Creditor"
          v-model="model.creditorId"
          :rules="rules.creditorId"
          :counter="100"
          @ok="controller.creditorIdOk"
          :items="controller.creditorStore.mini"
          :headers="controller.creditorNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="name"
          label="Name"
          v-model="model.name"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="startDate"
          label="Start Date"
          v-model="model.startDate"
          :rules="rules.startDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="endDate"
          label="End Date"
          v-model="model.endDate"
          :rules="rules.endDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
           disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="amountWords"
          label="Amount Words"
          v-model="model.amountWords"
          :rules="rules.amountWords"
          :counter="200"
          rows="1"
          auto-grow
          disabled
        ></s-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Bill Items"
          :headers="controller.billItemNav.menu.editHeaders"
          :items="model.billItems"
          :component="controller.billItemNav.menu.component"
          @after="controller.billDetailsChanged"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
