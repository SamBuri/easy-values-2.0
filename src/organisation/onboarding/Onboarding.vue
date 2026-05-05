<script setup>
import { ref, computed, watch } from 'vue';
import onboardingController from "./OnboardingController";
import rootOptions from '@/root/RootOptions';
import { defineRootStore } from "@/root/RootStore";

const cols = 12;
const sm = 6;
const md = 6;
rootOptions.maxWidth = 900;

const controller = onboardingController();
const rootStore = defineRootStore();
const model = controller.model;
const rules = controller.rules;
const step = controller.step;
const rootState = controller.rootState;

// Per-step validation states
const valid1 = ref(false);
const valid2 = computed(() => model.value.branches.length > 0);
const valid3 = ref(false);
const valid4 = ref(false);

const isCurrentStepValid = computed(() => {
  if (step.value === 1) return valid1.value;
  if (step.value === 2) return valid2.value;
  if (step.value === 3) return valid3.value;
  if (step.value === 4) return valid4.value;
  return false;
});

watch(() => model.useExistingTenant, (val) => {
  if (val) {
    model.useExistingTenantGroup = false;
    model.tenantGroupId = null;
    model.hostname = "";
  } else {
    model.hostname = window.location.hostname;
  }
});

</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Client Onboarding Wizard</template>

    <template #form-data>
      <v-window v-model="step" class="flex-grow-1">
        <!-- Step 1: Company Information -->
        <v-window-item :value="1">
          <v-form v-model="valid1">
            <v-container>
              <h3 class="text-h6 mb-4">Step 1: Company Information</h3>
              <v-row>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Company Name" v-model="model.companyName" :rules="rules.required" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-autocomplete label="Business Type" v-model="model.businessType"
                    :items="controller.organisationStore.businessTypes" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Address" v-model="model.address" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Phone No" v-model="model.phoneNo" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Email" v-model="model.email" :rules="rules.email" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-autocomplete label="Dev Config" v-model="model.devConfigId" :rules="rules.required"
                    :items="controller.devConfigStore.mini" item-title="devName" item-value="id" />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-window-item>

        <!-- Step 2: Branches -->
        <v-window-item :value="2">
          <v-container>
            <h3 class="text-h6 mb-4">Step 2: Branches</h3>
            <v-row>
               <v-col cols="12">
                <crud-table title="Branches" :headers="controller.branchNav.menu.editHeaders" :items="model.branches"
                  :component="controller.branchNav.menu.component" maxWidth="700px" />
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <!-- Step 3: Admin User -->
        <v-window-item :value="3">
          <v-form v-model="valid3">
            <v-container>
              <h3 class="text-h6 mb-4">Step 3: Admin Account</h3>
              <v-row>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Admin Username" v-model="model.adminUsername" :rules="rules.required" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Admin Email" v-model="model.adminEmail" :rules="[...rules.required, ...rules.email]" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-password-field label="Password" v-model="model.adminPassword" type="password" :rules="rules.required" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="First Name" v-model="model.adminFirstName" />
                </v-col>
                <v-col :cols="cols" :sm="sm" :md="md">
                  <s-text-field label="Last Name" v-model="model.adminLastName" />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-window-item>

        <!-- Step 4: Tenancy & Infrastructure -->
        <v-window-item :value="4">
          <v-form v-model="valid4">
            <v-container>
              <h3 class="text-h6 mb-4">Step 4: Tenancy Setup</h3>
              <v-row>
                <v-col cols="12">
                   <v-checkbox label="Use Existing Tenant (Shared Host)" v-model="model.useExistingTenant" />
                </v-col>

                <v-col :cols="cols" :sm="sm" :md="md" v-if="model.useExistingTenant">
                  <s-autocomplete label="Tenant" v-model="model.tenantId"
                    :items="controller.tenantStore.mini" item-title="host" item-value="id" :rules="rules.required" />
                </v-col>

                <template v-if="!model.useExistingTenant">
                  <v-col :cols="cols">
                     <v-checkbox label="Use Existing Tenant Group (Shared Realm)" v-model="model.useExistingTenantGroup" />
                  </v-col>

                  <v-col :cols="cols"  v-if="model.useExistingTenantGroup">
                    <s-autocomplete label="Tenant Group" v-model="model.tenantGroupId"
                      :items="controller.tenantGroupStore.mini" item-title="realm" item-value="id" :rules="rules.required" />
                  </v-col>
                  <v-col :cols="cols"  v-else>
                    <s-text-field label="Target Realm" v-model="model.targetRealm" :rules="rules.required"
                      hint="New realm name" persistent-hint />
                  </v-col>

                  <v-col :cols="cols">
                    <s-text-field label="Hostname" v-model="model.hostname" :rules="rules.required"
                      hint="Domain or IP where client will access the app" persistent-hint />
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </v-form>
        </v-window-item>
      </v-window>
    </template>

    <template #left-actions>
      <v-btn v-if="step > 1" variant="text" @click="step--">Back</v-btn>
    </template>

    <template #card-actions>
      <v-btn v-if="step < 4" color="primary" @click="step++" :disabled="!isCurrentStepValid">Next</v-btn>
      <v-btn v-else color="success" :disabled="!isCurrentStepValid" :loading="rootStore.loading" @click="controller.save">Finish & Onboard</v-btn>
    </template>

  </crud-form>
</template>
