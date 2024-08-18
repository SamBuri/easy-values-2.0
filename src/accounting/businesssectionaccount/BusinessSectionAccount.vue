<script setup>
import businessSectionAccountController from "./BusinessSectionAccountController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = businessSectionAccountController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Business Section Account</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="name"
          label="Name"
          v-model="model.name"
          :rules="rules.name"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="businessSectionId"
          label="Business Section"
          v-model="model.businessSectionId"
          :rules="rules.businessSectionId"
          :counter="100"
          :items="controller.lookupDataStore.businessSections"
          :loading="controller.lookupDataStore.businessSectionsLoading"
          item-title="lookupDataName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="itemCategoryId"
          label="Item Category"
          v-model="model.itemCategoryId"
          :rules="rules.itemCategoryId"
          :counter="100"
          :items="controller.itemCategoryStore.mini"
          :loading="controller.itemCategoryStore.miniLoading"
          item-title="itemCategory"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="salesAccountId"
          label="Sales Account"
          v-model="model.salesAccountId"
          :rules="rules.salesAccount"
          :counter="100"
          :items="controller.accountStore.incomeAccounts"
          :loading="controller.accountStore.incomeAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="expenseAccountId"
          label="Expense Account"
          v-model="model.expenseAccountId"
          :rules="rules.expenseAccount"
          :counter="100"
          :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
    </template>
  </crud-form>
</template>
