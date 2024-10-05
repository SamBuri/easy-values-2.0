<script setup>
import shareholderController from "./ShareholderController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = shareholderController();

const model = controller.model;
const rules = controller.rules;
const isUpdate =controller.isUpdate
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Shareholder</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="idId"
          label="Profile Id"
          v-model="model.idId"
          :rules="rules.idId"
          :counter="20"
          @ok="controller.idIdOk"
          :items="controller.profileStore.mini"
          :headers="controller.profileNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
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
        <s-text-field
          id="phoneNo"
          label="Phone No"
          v-model="model.phoneNo"
          :rules="rules.phoneNo"
          :counter="100"
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="accountId"
          label="Account"
          v-model="model.accountId"
          :rules="rules.accountId"
          :items="controller.accountStore.equityAccounts"
          :loading="controller.accountStore.equityAccountsLoading"
          item-title="accountName"
          item-value="id"
        ></s-autocomplete>
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
