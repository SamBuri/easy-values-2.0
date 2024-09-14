<script setup>
import loanApprovalController from "./LoanApprovalController";
import loanApplicationNav from "@/loan/loanapplication/LoanApplicationNav.js"
import constants from "@/utils/constants";
const cols = 12;
const sm = 6;
const md = 6;
const controller = loanApprovalController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Loan Approval</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="loanApplicationId"
          label="Loan Application"
          v-model="model.loanApplicationId"
          :rules="rules.loanApplicationId"
          :counter="100"
          @ok="controller.loanApplicationIdOk"
          :items="controller.loanApplicationStore.pending"
          :headers="controller.loanApplicationNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="loanApplicationId"
          label="Loan Application"
          v-model="model.loanApplicationId"
          :rules="rules.loanApplicationId"
          :items="controller.loanApplicationStore.pending"
          :loading="controller.loanApplicationStore.pendingLoading"
          item-title="name"
          item-value="id"
        ></s-autocomplete>
      </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="approvalDate"
          label="Approval Date"
          v-model="model.approvalDate"
          :rules="rules.approvalDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="approvedBy"
          label="Approved By"
          v-model="model.approvedBy"
          :rules="rules.approvedBy"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="approvalNotes"
          label="Approval Notes"
          v-model="model.approvalNotes"
          :rules="rules.approvalNotes"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="approvalStatus"
          label="Approval Status"
          v-model="model.approvalStatus"
          :rules="rules.approvalStatus"
          :items="constants.approvalStatuses"
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
        <s-text-field
          id="loanProduct"
          label="Loan Product"
          v-model="model.loanProductName"
          :rules="rules.loanProduct"
          :counter="100"
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
