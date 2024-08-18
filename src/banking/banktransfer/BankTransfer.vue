<script setup>
import bankTransferController from "./BankTransferController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = bankTransferController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Bank Transfer</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="transferDate"
          label="Transfer Date"
          v-model="model.transferDate"
          :rules="rules.transferDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="fromAccount"
          label="From Account"
          v-model="model.fromAccountId"
          :rules="rules.fromAccountId"
          :items="controller.bankAccountStore.mini"
          :loading="controller.bankAccountStore.miniLoading"
          item-title="bankAccountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="fromAccountType"
          label="From Account Type"
          v-model="model.fromAccountType"
          disabled
        ></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="fromBalance"
          label="From Balance"
          v-model="model.fromBalance"
          disabled
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="fromCurrency"
          label="Currency"
          v-model="model.fromCurrency"
          disabled
        ></s-text-field>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="fromCurrencyId"
          label="From Currency"
          v-model="model.fromCurrencyId"
          :rules="rules.fromCurrencyId"
          :items="controller.currencyStore.mini"
          :loading="controller.currencyStore.miniLoading"
          item-title="currencyName"
          item-value="id"
        ></s-autocomplete>
      </v-col> -->
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="toAccountType"
          label="To Account Type"
          v-model="model.toAccountType"
          :rules="rules.toAccountType"
          :items="controller.lookupStore.bankAccountTypes"
          :loading="controller.lookupStore.bankAccountTypesLoading"
        ></s-autocomplete>
      </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="toAccountId"
          label="To Account"
          v-model="model.toAccountId"
          :rules="rules.toAccountId"
          :items="controller.bankAccountStore.mini"
          :loading="controller.bankAccountStore.miniLoading"
          item-title="bankAccountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="toAccountType"
          label="To Account Type"
          v-model="model.toAccountType"
          disabled
        ></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="toBalance"
          label="To Balance"
          v-model="model.toBalance"
          disabled
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="toCurrency"
          label="To Currency"
          v-model="model.toCurrency"
          disabled
        ></s-text-field>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="toCurrencyId"
          label="To Currency"
          v-model="model.toCurrencyId"
          :rules="rules.toCurrencyId"
          :items="controller.currencyStore.mini"
          :loading="controller.currencyStore.miniLoading"
          item-title="currencyName"
          item-value="id"
        ></s-autocomplete>
      </v-col> -->

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="exchangeRate"
          label="Exchange Rate"
          v-model="model.exchangeRate"
          :rules="rules.exchangeRate"
          :counter="100"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amountTendered"
          label="Amount Tendered"
          v-model="model.amountTendered"
          :rules="rules.amountTendered"
          :counter="100"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="amount"
          label="Amount"
          v-model="model.amount"
          :rules="rules.amount"
          :counter="100"
          disabled
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="transferCharge"
          label="Transfer Charge"
          v-model="model.transferCharge"
          :rules="rules.transferCharge"
          :counter="100"
        ></s-number-input>
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
        <s-text-field
          id="referenceNo"
          label="Reference No"
          v-model="model.referenceNo"
          :rules="rules.referenceNo"
          :counter="100"
        ></s-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
