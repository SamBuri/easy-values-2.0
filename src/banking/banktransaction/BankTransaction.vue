<script setup>
import bankTransactionController from "./BankTransactionController";
import rootOptions from '@/root/RootOptions'
const cols = 12;
const sm = 6;
const md = 6;
rootOptions.maxWidth=1000;
const controller = bankTransactionController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Bank Transaction</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="bankAccountId"
          label="Bank Account"
          v-model="model.bankAccountId"
          :rules="rules.bankAccount"
          :items="controller.bankAccountStore.mini"
          :loading="controller.bankAccountStore.miniLoading"
          item-title="bankAccountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="bankAccountType"
          label="Bank Account Type"
          v-model="model.bankAccountType"
          disabled
        ></s-text-field>
     </v-col>

     <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="currency"
          label="Currency"
          v-model="model.currency"
          disabled
        ></s-text-field>
     </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          :rules="rules.balance"
          :counter="100"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="tranDate"
          label="Tran Date"
          v-model="model.tranDate"
          :rules="rules.tranDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="accountAction"
          label="Account Action"
          v-model="model.accountAction"
          :rules="rules.accountAction"
          :items="controller.lookupStore.accountActions"
          :loading="controller.lookupStore.accountActionsLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="notes"
          label="Notes"
          v-model="model.notes"
          :rules="rules.notes"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
