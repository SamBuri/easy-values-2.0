<script setup>
import creditorGroupController from "./CreditorGroupController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = creditorGroupController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Creditor Group</template>

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
          id="creditAccountId"
          label="Credit Account"
          v-model="model.creditAccountId"
          :rules="rules.creditAccountId"
          :items="controller.accountStore.liabilityAccounts"
          :loading="controller.accountStore.liabilityAccountsLoading"
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
          :items="controller.accountStore.incomeAccounts"
          :loading="controller.accountStore.incomeAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="debtReliefAccountId"
          label="Debt Relief Account"
          v-model="model.debtReliefAccountId"
          :rules="rules.debtReliefAccountId"
          :items="controller.accountStore.incomeAccounts"
          :loading="controller.accountStore.incomeAccountsLoading"
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
          :items="controller.accountStore.liabilityAccounts"
          :loading="controller.accountStore.liabilityAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
    </template>
  </crud-form>
</template>
