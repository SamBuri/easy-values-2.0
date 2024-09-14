<script setup>
import customerController from "./CustomerController";
import rootOptions from "@/root/RootOptions";
const cols = 12;
const sm = 4;
const md = 4;
rootOptions.maxWidth = 1000;
const controller = customerController();

const model = controller.model;
const rules = controller.rules;
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Customer</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field
          id="profileId"
          label="Profile"
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
          id="customerName"
          label="Customer Name"
          v-model="model.customerName"
          :rules="rules.customerName"
          :counter="50"
        ></s-text-field>
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
        <s-text-field
          id="phoneNo"
          label="Phone No"
          v-model="model.phoneNo"
          :rules="rules.phoneNo"
          :counter="30"
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
        <s-autocomplete
          id="priceGroupId"
          label="Price Group"
          v-model="model.priceGroupId"
          :rules="rules.priceGroupId"
          :items="controller.lookupDataStore.priceGroups"
          :loading="controller.lookupDataStore.priceGroupsLoading"
          item-title="lookupDataName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="defaultSponsorId"
          label="Default Sponsor"
          v-model="model.defaultSponsorId"
          :rules="rules.defaultSponsorId"
          :items="controller.customerStore.mini"
          :loading="controller.customerStore.miniLoading"
          item-title="customerName"
          item-value="id"
        ></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="canSponsor"
          label="Can Sponsor"
          v-model="model.canSponsor"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="sponsorOnly"
          label="Sponsor Only"
          v-model="model.sponsorOnly"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          id="allowCredit"
          label="Allow Credit"
          v-model="model.allowCredit"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          id="creditLimit"
          label="Credit Limit"
          v-model="model.creditLimit"
          :rules="rules.creditLimit"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete
          id="customerAccountsGroupId"
          label="Customer Accounts Group"
          v-model="model.customerAccountsGroupId"
          :rules="rules.customerAccountsGroupId"
          :items="controller.accountsGroupStore.mini"
          :loading="controller.accountsGroupStore.miniLoading"
          item-title="businessSection"
          item-value="id"
        ></s-autocomplete>
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
        <v-checkbox
          id="hidden"
          label="Hidden"
          v-model="model.hidden"
        ></v-checkbox>
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
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-multi-select-field
          id="customerSponsors"
          label="Customer Sponsors"
          v-model="model.customerSponsors"
          :rules="rules.customerSponsors"
          :counter="100"
          @ok="controller.customerSponsorsOk"
          :items="controller.customerStore.mini"
          :headers="controller.customerNav.menu.miniHeaders"

        ></s-multi-select-field>
      </v-col>
    </template>
  </crud-form>
</template>
