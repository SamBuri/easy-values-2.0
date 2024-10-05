<script setup>
import accountsGroupController from "./AccountsGroupController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = accountsGroupController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Accounts Group</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md"
        ><v-text-field
          label="Customer Group"
          v-model="model.customerGroup"
          :rules="rules.customerGroup"
          :counter="40"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="businessSectionId"
          label="Business Section"
          v-model="model.businessSectionId"
          :rules="rules.businessSectionId"
          :items="controller.lookupDataStore.businessSections"
          :loading="controller.lookupDataStore.businessSectionsLoading"
          item-title="lookupDataName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="receivableAccountId"
          label="Receivable Account"
          v-model="model.receivableAccountId"
          :rules="rules.receivableAccountId"
          :items="controller.accountStore.assetAccounts"
          :loading="controller.accountStore.assetAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="discountAccountId"
          label="Discount Account"
          v-model="model.discountAccountId"
          :rules="rules.discountAccountId"
          :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="writeOffAccountId"
          label="Write Off Account"
          v-model="model.writeOffAccountId"
          :rules="rules.writeOffAccountId"
          :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="withholdingTaxAccountId"
          label="Withholding Tax Account"
          v-model="model.withholdingTaxAccountId"
          :rules="rules.withholdingTaxAccountId"
          :items="controller.accountStore.assetAccounts"
          :loading="controller.accountStore.assetAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
    </template>
  </crud-form>
</template>
