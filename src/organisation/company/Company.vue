<script setup>
import { ref, watch, onMounted } from 'vue';
import companyController from "./CompanyController";
import rootOptions from '@/root/RootOptions';
import { defineOrganisationSettingStore } from "../organisationsetting/OrganisationSettingStore";
import organisationSettingController from "../organisationsetting/OrganisationSettingController";

const props = defineProps({
  companyId: [String, Number],
});

const cols = 12;
const sm = 6;
const md = 6;
rootOptions.maxWidth = 1000;
const controller = companyController();

watch(
  () => props.companyId,
  async (newId) => {
    if (newId) {
      if (typeof controller.load === 'function') {
        await controller.load(newId);
      } else {
        const data = await controller.getData(newId);
        if (data) controller.setData(data);
      }
    }
  },
  { immediate: true }
);

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;

const settingStore = defineOrganisationSettingStore();
const orgSettingCtrl = organisationSettingController();
const orgSettings = ref([]);
const orgSettingsLoading = ref(false);
const savingSetting = ref({});

const loadOrgSettings = async (orgId) => {
  if (!orgId) {
    orgSettings.value = [];
    return;
  }
  orgSettingsLoading.value = true;
  try {
    const res = await settingStore.getResolvedSettings(orgId);
    orgSettings.value = res || [];
  } catch (e) {
    console.error("Failed to load organisation settings for org:", orgId, e);
  } finally {
    orgSettingsLoading.value = false;
  }
};

const saveSettingOverride = async (setting) => {
  if (!model.id) return;
  savingSetting.value[setting.propertyName] = true;
  try {
    orgSettingCtrl.model.companyId = String(model.id);
    orgSettingCtrl.model.settingId = setting.settingId;
    orgSettingCtrl.model.propertyValue = String(setting.propertyValue);

    if (setting.overrideId) {
      orgSettingCtrl.setButtonText("Update");
      orgSettingCtrl.model.id = setting.overrideId;
    } else {
      orgSettingCtrl.setButtonText("Save");
      orgSettingCtrl.model.id = "";
    }

    orgSettingCtrl.rootState.valid = true;
    orgSettingCtrl.editClicked(async () => {
      await loadOrgSettings(model.id);
    });
  } finally {
    savingSetting.value[setting.propertyName] = false;
  }
};

watch(
  () => model.id,
  (newId) => {
    if (newId) {
      loadOrgSettings(newId);
    } else {
      orgSettings.value = [];
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (model.id) {
    loadOrgSettings(model.id);
  }
});
</script>

<template>
  <crud-form :controller="controller">
    <template #heading>Company</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-file-input id="logo" label="Logo" v-model="model.logo"></s-file-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="companyName" label="Company Name" v-model="model.companyName" :rules="rules.companyName"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="organisationType" label="Organisation Type" v-model="model.organisationType" :items="controller.configStore.organisationTypes" :loading="controller.configStore.organisationTypesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="businessType" label="Business Type" v-model="model.businessType" :rules="rules.businessType"
          :items="controller.organisationStore.businessTypes"
          :loading="controller.organisationStore.businessTypesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="address" label="Address" v-model="model.address" :rules="rules.address"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="phoneNo" label="Phone No" v-model="model.phoneNo" :rules="rules.phoneNo"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="devConfigId" label="Dev Config" v-model="model.devConfigId" :rules="rules.devConfigId"
          :items="controller.devConfigStore.mini" item-title="devName" item-value="id"
          :loading="controller.devConfigStore.miniLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="email" label="Email" v-model="model.email" :rules="rules.email" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="website" label="Website" v-model="model.website" :rules="rules.website"
          :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="tagLine" label="Tag Line" v-model="model.tagLine" :rules="rules.tagLine"
          :counter="40"></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled"></v-checkbox>
      </v-col>
      
      <v-col cols="12">
        <crud-table title="Branches" :headers="controller.branchNav.menu.editHeaders" :items="model.branches"
          :component="controller.branchNav.menu.component" maxWidth="700px" />
      </v-col>

      <!-- Organisation Settings Collapsible Panel -->
      <v-col cols="12" v-if="model.id && orgSettings.length > 0">
        <v-expansion-panels class="mb-4">
          <v-expansion-panel elevation="1" rounded="lg">
            <v-expansion-panel-title class="font-weight-bold text-subtitle-1">
              <v-icon class="mr-2" color="primary">mdi-office-building-cog</v-icon>
              Organisation Settings
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pt-4">
              <p class="text-body-2 text-medium-emphasis mb-4">
                Configure specific settings for this organisation. Changes made here will override system defaults.
              </p>

              <v-row v-for="setting in orgSettings" :key="setting.propertyName" align="center" class="mb-3 border-bottom pb-3">
                <v-col cols="12" sm="4">
                  <div class="font-weight-bold text-subtitle-2">{{ setting.description || setting.propertyName }}</div>
                  <div v-if="setting.description" class="text-caption text-medium-emphasis">{{ setting.propertyName }}</div>
                </v-col>

                <v-col cols="12" sm="6">
                  <!-- BOOLEAN -->
                  <v-switch
                    v-if="setting.type === 'BOOLEAN'"
                    v-model="setting.propertyValue"
                    true-value="true"
                    false-value="false"
                    color="primary"
                    hide-details
                    density="compact"
                  ></v-switch>

                  <!-- DATE -->
                  <s-date-picker
                    v-else-if="setting.type === 'DATE'"
                    v-model="setting.propertyValue"
                    variant="outlined"
                    density="compact"
                    hide-details
                  ></s-date-picker>

                  <!-- LIST / Autocomplete -->
                  <s-autocomplete
                    v-else-if="setting.type === 'LIST'"
                    v-model="setting.propertyValue"
                    :items="setting.options || []"
                    item-title="title"
                    item-value="id"
                    variant="outlined"
                    density="compact"
                    hide-details
                  ></s-autocomplete>

                  <!-- INTEGER / DECIMAL / STRING / Default -->
                  <s-text-field
                    v-else
                    v-model="setting.propertyValue"
                    variant="outlined"
                    density="compact"
                    hide-details
                  ></s-text-field>
                </v-col>

                <v-col cols="12" sm="2" class="text-right">
                  <v-btn
                    color="primary"
                    variant="tonal"
                    density="comfortable"
                    size="small"
                    :loading="savingSetting[setting.propertyName]"
                    @click="saveSettingOverride(setting)"
                  >
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </template>
  </crud-form>
</template>

<style scoped>
.border-bottom {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity, 0.08));
}
</style>
