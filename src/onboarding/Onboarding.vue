<script setup>
import { ref, computed } from "vue";
import onboardingController from "./OnboardingController";
import rootOptions from "@/root/RootOptions";
import { defineRootStore } from "saburi-vue-utils";

rootOptions.maxWidth = 900;
const controller = onboardingController();
const model = controller.model;
const rules = controller.rules;
const step = controller.step;
const rootStore = defineRootStore();
const validCompany = ref(false);
const validBranches = computed(() => Array.isArray(model.value.branches) && model.value.branches.length > 0);
const valid = computed(() => step.value === 1 ? validCompany.value : validBranches.value);
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Create Company</template>
    <template #form-data>
      <v-window v-model="step" class="flex-grow-1">
        <v-window-item :value="1">
          <v-form v-model="validCompany">
            <v-container><h3 class="text-h6 mb-4">Company Information</h3><v-row>
              <v-col cols="12" md="6"><s-text-field label="Company Name" v-model="model.companyName" :rules="rules.required" /></v-col>
              <v-col cols="12" md="6"><s-autocomplete label="Organisation Type" v-model="model.organisationType" :items="controller.organisationStore.organisationTypes" :rules="rules.required" /></v-col>
              <v-col cols="12" md="6"><s-autocomplete label="Business Type" v-model="model.businessType" :items="controller.organisationStore.businessTypes" /></v-col>
              <v-col cols="12" md="6"><s-autocomplete label="Dev Config" v-model="model.devConfigId" :items="controller.devConfigStore.mini" item-title="devName" item-value="id" :rules="rules.required" /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Realm (optional)" v-model="model.realm" hint="Defaults to application configuration" persistent-hint /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Initial Role (optional)" v-model="model.requestedRoleName" hint="Defaults to SUPER_ADMIN or Admin" persistent-hint /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Address" v-model="model.address" /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Phone No" v-model="model.phoneNo" /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Email" v-model="model.email" :rules="rules.email" /></v-col>
              <v-col cols="12" md="6"><s-text-field label="Website" v-model="model.website" /></v-col>
              <v-col cols="12"><s-text-field label="Tag Line" v-model="model.tagLine" /></v-col>
            </v-row></v-container>
          </v-form>
        </v-window-item>
        <v-window-item :value="2"><v-container><h3 class="text-h6 mb-4">Branches</h3><crud-table title="Branches" :headers="controller.branchNav.menu.editHeaders" :items="model.branches" :component="controller.branchNav.menu.component" maxWidth="700px" /></v-container></v-window-item>
      </v-window>
    </template>
    <template #left-actions><v-btn v-if="step > 1" variant="text" @click="step--">Back</v-btn></template>
    <template #card-actions>
      <v-btn v-if="step < 2" color="primary" @click="step++" :disabled="!valid">Next</v-btn>
      <v-btn v-else color="success" :disabled="!valid" :loading="rootStore.loading" @click="controller.save">Create Company & Add User</v-btn>
    </template>
  </crud-form>
</template>
