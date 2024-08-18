<script setup>
import journalDetailsController from "./JournalDetailsController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = journalDetailsController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Journal Details</template>

    <template #form-data>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="accountId"
          label="Account Id"
          v-model="model.accountId"
          :rules="rules.accountId"
          :counter="100"
          @ok="controller.accountIdOk"
          :items="controller.accountStore.mini"
          :headers="controller.accountNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="accountName"
          label="Account Name"
          v-model="model.accountName"
          :rules="rules.accountName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="accountType"
          label="Account Type"
          v-model="model.accountType"
          :rules="rules.accountType"
          :counter="100"
          :items="controller.lookupStore.accountTypes"
          :loading="controller.lookupStore.accountTypesLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="accountAction"
          label="Account Action"
          v-model="model.accountAction"
          :rules="rules.accountAction"
          :counter="100"
          :items="controller.lookupStore.accountActions"
          :loading="controller.lookupStore.accountActionsLoading"
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
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="notes"
          label="Notes"
          v-model="model.notes"
          :rules="rules.notes"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
    </template>
  </crud-form>
</template>
