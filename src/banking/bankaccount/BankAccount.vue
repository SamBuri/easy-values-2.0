<script setup>
import bankAccountController from "./BankAccountController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = bankAccountController();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Bank Account</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="bankAccountName"
          label="Bank Account Name"
          v-model="model.bankAccountName"
          :rules="rules.bankAccountName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="bankAccountType"
          label="Bank Account Type"
          v-model="model.bankAccountType"
          :rules="rules.bankAccountType"
          :counter="100"
          :items="controller.bankingStore.bankAccountTypes"
          :loading="controller.bankingStore.bankAccountTypesLoading"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="accountNo"
          label="Account No"
          v-model="model.accountNo"
          :rules="rules.accountNo"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="bankName"
          label="Bank Name"
          v-model="model.bankName"
          :rules="rules.bankName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="branchName"
          label="Branch Name"
          v-model="model.branchName"
          :rules="rules.branchName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-currency-field
          id="currencyId"
          label="Currency"
          v-model="model.currencyId"
          :rules="rules.currencyId"
        ></s-currency-field>
      </v-col>

      <!-- :items="controller.currencyStore.mini"
          :loading="controller.currencyStore.miniLoading"
          item-title="currency"
          item-value="id" -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="glAccountId"
          label="Gl Account"
          v-model="model.glAccountId"
          :rules="rules.glAccountId"
          :counter="20"
          :items="controller.accountStore.assetAccounts"
          :loading="controller.accountStore.assetAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="chargesGlAccountId"
          label="Charges Gl Account"
          v-model="model.chargesGlAccountId"
          :rules="rules.chargesGlAccountId"
          :counter="20"
          :items="controller.accountStore.expenseAccounts"
          :loading="controller.accountStore.expenseAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="phoneNo"
          label="Phone No"
          v-model="model.phoneNo"
          :rules="rules.phoneNo"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="email"
          label="Email"
          v-model="model.email"
          :rules="rules.email"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea
          id="address"
          label="Address"
          v-model="model.address"
          :rules="rules.address"
          :counter="200"
          rows="1"
          auto-grow
        ></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="isDefault"
          label="Is Default"
          v-model="model.isDefault"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          disabled
          :rules="rules.balance"
          :counter="100"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
