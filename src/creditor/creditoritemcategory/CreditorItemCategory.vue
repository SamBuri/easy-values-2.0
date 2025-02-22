<script setup>
import creditorItemCategoryController from "./CreditorItemCategoryController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = creditorItemCategoryController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Creditor Item Category</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="creditorGroupId"
          label="Creditor Group"
          v-model="model.creditorGroupId"
          :rules="rules.creditorGroupId"
          :items="controller.creditorGroupStore.mini"
          :loading="controller.creditorGroupStore.miniLoading"
          item-title="name"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="itemCategoryId"
          label="Item Category"
          v-model="model.itemCategoryId"
          :rules="rules.itemCategoryId"
          :items="controller.itemCategoryStore.expensableItemCategories"
          :loading="controller.itemCategoryStore.expensableItemCategoriesLoading"
          item-title="itemCategory"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="expenseAccountId"
          label="Expense Account"
          v-model="model.expenseAccountId"
          :rules="rules.expenseAccountId"
          :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="enforceBudget"
          label="Enforce Budget"
          v-model="model.enforceBudget"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="monthlyAmount"
          label="Monthly Amount"
          v-model="model.monthlyAmount"
          :rules="rules.monthlyAmount"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="alertPercentage"
          label="Alert Percentage"
          v-model="model.alertPercentage"
          :rules="rules.alertPercentage"
          :counter="100"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
