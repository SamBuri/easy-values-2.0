<script setup>
import loanTransitionController from "./LoanTransitionController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = loanTransitionController();

const model = controller.model;
const rules = controller.rules;
const toStatuses = controller.toStatuses;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Loan Transition</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="loanId"
          label="Loan Id"
          v-model="model.loanId"
          :rules="rules.loanId"
          :counter="20"
          @ok="controller.loanIdOk"
          :items="controller.loanStore.mini"
          :headers="controller.loanNav.menu.miniHeaders"
        ></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="profileId"
          label="Profile Id"
          v-model="model.profileId"
          :rules="rules.profileId"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="fullName"
          label="Full Name"
          v-model="model.fullName"
          :rules="rules.fullName"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="balance"
          label="Balance"
          v-model="model.balance"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          id="tranDate"
          label="Tran Date"
          v-model="model.tranDate"
          :rules="rules.tranDate"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field
          id="fromStatus"
          label="From Status"
          v-model="model.fromStatus"
          :rules="rules.fromStatus"
          disabled
        ></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="toStatus"
          label="To Status"
          v-model="model.toStatus"
          :rules="rules.toStatus"
          :items="toStatuses"
          :loading="controller.rootlStore.loanStatusesLoading"
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
    </template>
  </crud-form>
</template>
