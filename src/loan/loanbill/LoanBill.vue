<script setup>
import loanBillController from "./LoanBillController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1200;
const controller = loanBillController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Loan Bill</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="loanId"
          label="Loan"
          v-model="model.loanId"
          :rules="rules.loanId"
          :counter="100"
          @ok="controller.loanIdOk"
          :items="controller.loanStore.mini"
          :headers="controller.loanNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="name"
          label="Name"
          v-model="model.name"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="billDate"
          label="Bill Date"
          v-model="model.billDate"
          :rules="rules.billDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          disabled
        ></s-number-input>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Loan Bill Details"
          :headers="controller.loanBillDetailNav.menu.editHeaders"
          :items="model.loanBillDetails"
          :component="controller.loanBillDetailNav.menu.component"
          maxWidth="700px"
          @after="controller.billDetailsChanged"
        />
      </v-col>
    </template>
  </crud-form>
</template>
