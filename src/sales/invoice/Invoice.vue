<script setup>
import invoiceController from "./InvoiceController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1300;
const controller = invoiceController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Invoice</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="invoiceDate"
          label="Invoice Date"
          v-model="model.invoiceDate"
          :rules="invoiceDateRules"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="invoiceType"
          label="Invoice Type"
          v-model="model.invoiceType"
          :rules="rules.invoiceType"
          :counter="100"
          :items="controller.lookupStore.invoiceTypes"
          :loading="controller.lookupStore.invoiceTypesLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="sellToId"
          label="Sell To"
          v-model="model.sellToId"
          :rules="rules.sellToId"
          :counter="100"
          @ok="controller.sellToIdOk"
          :items="controller.customerStore.mini"
          :headers="controller.customerNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="billToId"
          label="Bill To"
          v-model="model.billToId"
          :rules="rules.billToId"
          :counter="100"
          :items="controller.customerStore.mini"
          :loading="controller.customerStore.miniLoading"
          item-title="customerName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          disabled
          :rules="rules.amount"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="amountWords"
          label="Amount Words"
          v-model="model.amountWords"
          disabled
          :rules="rules.amountWords"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Invoice Details"
          :headers="controller.invoiceDetailNav.menu.editHeaders"
          :items="model.invoiceDetails"
          :component="controller.invoiceDetailNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
