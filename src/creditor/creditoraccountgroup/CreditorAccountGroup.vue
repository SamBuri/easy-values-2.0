<script setup>
import creditorAccountGroupController from "./CreditorAccountGroupController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = creditorAccountGroupController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Creditor Account Group</template>

    <template #form-data>
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
          :items="controller.accountStore.assetAccounts"
          :loading="controller.accountStore.assetAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="debtWaiverAccountId"
          label="Debt Waiver Account"
          v-model="model.debtWaiverAccountId"
          :rules="rules.debtWaiverAccountId"
          :items="controller.accountStore.assetAccounts"
          :loading="controller.accountStore.assetAccountsLoading"
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
