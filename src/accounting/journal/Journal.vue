<script setup>
import journalController from "./JournalController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1300;
const controller = journalController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Journal</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="financialPeriodId"
          label="Financial Period Id"
          v-model="model.financialPeriodId"
          :rules="rules.financialPeriodId"
          :counter="20"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="tranDate"
          label="Tran Date"
          v-model="model.tranDate"
          :rules="tranDateRules"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="description"
          label="Description"
          v-model="model.description"
          :rules="rules.description"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="referenceNo"
          label="Reference No"
          v-model="model.referenceNo"
          :rules="rules.referenceNo"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="currencyId"
          label="Currency"
          v-model="model.currencyId"
          :rules="rules.currencyId"
          :counter="20"
          :items="controller.currencyStore.mini"
          :loading="controller.currencyStore.miniLoading"
          item-title="currencyName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="baseAmount"
          label="Base Amount"
          v-model="model.baseAmount"
          :rules="rules.baseAmount"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="exchangeRate"
          label="Exchange Rate"
          v-model="model.exchangeRate"
          :rules="rules.exchangeRate"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          :counter="100"
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
        ></s-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Journal Details"
          :headers="controller.journalDetailsNav.menu.editHeaders"
          :items="model.journalDetails"
          :component="controller.journalDetailsNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
