<script setup>
import accountController from "./AccountController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = accountController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Account</template>

    <template #form-data>
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
          id="accountCategoryId"
          label="Account Category"
          v-model="model.accountCategoryId"
          :rules="rules.accountCategory"
          :counter="20"
          :items="controller.accountCategoryStore.accountCategoriesByAccountType"
          :loading="controller.accountCategoryStore.accountCategoriesByAccountTypeLoading"
          item-title="categoryName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="accountName"
          label="Account Name"
          v-model="model.accountName"
          :rules="rules.accountName"
          :counter="40"
        ></s-text-field>
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
        <s-autocomplete
          id="accountReport"
          label="Account Report"
          v-model="model.accountReport"
          :rules="rules.accountReport"
          :counter="100"
          :disabled="true"
          :items="controller.lookupStore.accountReports"
          :loading="controller.lookupStore.accountReportsLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="contra"
          label="Contra"
          v-model="model.contra"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="controlAccount"
          label="Control Account"
          v-model="model.controlAccount"
          :disabled="true"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          :rules="rules.balance"
          :counter="100"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="readOnly"
          label="Read Only"
          v-model="model.readOnly"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
