<script setup>
import loanApplicationController from "./LoanApplicationController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = loanApplicationController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Loan Application</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="applicantId"
          label="Applicant"
          v-model="model.applicantId"
          :rules="rules.applicantId"
          :counter="100"
          @ok="controller.applicantOk"
          :items="controller.profileStore.mini"
          :headers="controller.profileNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="name"
          label="Name"
          v-model="model.name"
          disabled
          :rules="rules.name"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="address"
          label="Address"
          v-model="model.address"
          disabled
          :rules="rules.address"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="primaryPhoneNo"
          label="Primary Phone No"
          v-model="model.primaryPhoneNo"
          disabled
          :rules="rules.primaryPhoneNo"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="otherPhoneNos"
          label="Other Phone Numbers"
          v-model="model.otherPhoneNos"
          disabled
          :rules="rules.otherPhoneNos"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="collateralCategoryId"
          label="Collateral Category"
          v-model="model.collateralCategoryId"
          :rules="rules.collateralCategoryId"
          :items="controller.lookupDataStore.collateralCategories"
          :loading="controller.lookupDataStore.collateralCategoriesLoading"
          item-title="lookupDataName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="collateralDesc"
          label="Collateral Description"
          v-model="model.collateralDesc"
          :rules="rules.collateralDesc"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="estimatedCollateralValue"
          label="Estimated Collateral Value"
          v-model="model.estimatedCollateralValue"
          :rules="rules.estimatedCollateralValue"
          :counter="200"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="applicationDate"
          label="Application Date"
          v-model="model.applicationDate"
          :rules="rules.applicationDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="loanProductId"
          label="Loan Product"
          v-model="model.loanProductId"
          :rules="rules.loanProductId"
          :items="controller.loanProductStore.mini"
          :loading="controller.loanProductStore.miniLoading"
          item-title="productName"
          item-value="id"
        ></s-autocomplete>
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
        <s-multi-select-field
          id="guarantors"
          label="Guarantors"
          v-model="model.guarantors"
          :rules="rules.guarantors"
          :items="controller.profileStore.mini"
          :loading="controller.profileStore.miniLoading"
          item-title="display"
          item-value="id"
          @ok="controller.guarantorsOk"
          :headers="controller.profileNav.menu.miniHeaders"
        ></s-multi-select-field>
      </v-col>
    </template>
  </crud-form>
</template>
