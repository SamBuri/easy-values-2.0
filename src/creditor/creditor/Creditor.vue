<script setup>
import creditorController from "./CreditorController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = creditorController();

const model = controller.model;
const rules = controller.rules;
const isUpdate =  controller.isUpdate
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Creditor</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="profileId"
          label="Profile Id"
          v-model="model.profileId"
          :rules="rules.profileId"
          :counter="20"
          @ok="controller.profileIdOk"
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
          :counter="61"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="phoneNo"
          label="Phone No"
          v-model="model.phoneNo"
          disabled
          :rules="rules.phoneNo"
          :counter="30"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="accountId"
          label="Account"
          v-model="model.accountId"
          :rules="rules.accountId"
          :counter="20"
          @ok="controller.accountIdOk"
          :items="controller.accountStore.liabilityAccounts"
          :headers="controller.accountNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="accountName"
          label="Account Name"
          v-model="model.accountName"
          disabled
          :rules="rules.accountName"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <s-number-input
          id="balance"
          label="Balance"
          v-model="model.balance"
          disabled
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
