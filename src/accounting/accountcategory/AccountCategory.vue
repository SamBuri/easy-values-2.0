<script setup>
import accountCategoryController from "./AccountCategoryController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = accountCategoryController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Account Category</template>

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
          id="parentCategoryId"
          label="Parent Category"
          v-model="model.parentCategoryId"
          :rules="rules.parentCategoryId"
          :items="controller.accountCategoryStore.accountCategoriesByAccountType"
          :loading="controller.accountCategoryStore.accountCategoriesByAccountTypeLoading"
          item-title="categoryName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="categoryName"
          label="Category Name"
          v-model="model.categoryName"
          :rules="rules.categoryName"
          :counter="40"
        ></s-text-field>
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
