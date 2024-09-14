<script setup>
import loanController from "./LoanController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = loanController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Loan</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="loanApplicationId"
          label="Loan Application"
          v-model="model.loanApplicationId"
          :rules="rules.loanApplicationId"
          :counter="20"
          @ok="controller.loanApplicationIdOk"
          :items="controller.loanApplicationStore.approved"
          :headers="controller.loanApplicationNav.menu.miniHeaders"
        ></s-select-field>
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
        <s-date-picker
          id="loanDate"
          label="Loan Date"
          v-model="model.loanDate"
          :rules="rules.loanDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="accountId"
          label="Account"
          v-model="model.accountId"
          :rules="rules.accountId"
          :items="controller.bankAccountStore.mini"
          :loading="controller.bankAccountStore.miniLoading"
          item-title="bankAccountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="principle"
          label="Principle"
          v-model="model.principle"
          :rules="rules.principle"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="bankAccountType"
          label="Bank Account Type"
          v-model="model.bankAccountType"
          :rules="rules.bankAccountType"
          disabled
        ></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          disabled
          :rules="rules.balance"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="nextPaymentDate"
          label="Next Payment Date"
          v-model="model.nextPaymentDate"
          disabled
          :rules="rules.nextPaymentDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="loanProduct"
          label="Loan Product"
          v-model="model.loanProductName"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="appliedForAmount"
          label="Applied For Amount"
          v-model="model.appliedForAmount"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="collateralCategory"
          label="Collateral Category"
          v-model="model.collateralCategory"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="collateralDesc"
          label="Collateral Desc"
          v-model="model.collateralDesc"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="estimatedCollateralValue"
          label="Estimated Collateral Value"
          v-model="model.estimatedCollateralValue"
         disabled
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
