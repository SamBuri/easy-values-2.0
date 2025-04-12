<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { defineComponentStore } from './ComponentStore';
import { defineTenantStore } from '@/organisation/tenant/TenantStore';
import { defineBranchStore } from '@/organisation/branch/BranchStore';
import SnackBar from "./SnackBar.vue";
import searchModel from "../search/SearchModel";
import funcs from "../utils/funcs";

const props = defineProps({
  maxWidth: Number,
  warn: Boolean,
  warningMsg: String,
  headers: Array,
  items: Array,
  model: Object,
  title: String,
  passedColumn: String,
  chartProvided: Boolean
});

const componentsStore = defineComponentStore();
const tenantStore = defineTenantStore();
const branchStore = defineBranchStore();

// Refs
const valid = ref(false);
const loading = ref(false);
const deleteLoading = ref(false);
const numericHeader = ref('');
const aggregate = ref("Sum");
const aggregateValue = ref(0);
const form = ref(null);

// Constants
const cols = ref(12);
const sm = ref(6);
const md = ref(3);
const chartType = ref('line');
const reverseData = ref(true);
const removeLast = ref(true);
const aggregates = searchModel.aggreagtes;
const branchesRules = [(v) => !!v || "Must select at least one branch"];
const startDateRules = [(v) => !!v || "Start Date is required"];
const endDateRules = [(v) => !!v || "End Date is required"];

// Computed properties
const formWidth = computed(() => props.maxWidth > 0 ? props.maxWidth : 1000);
const data = computed(() => componentsStore.periodicReportData);
const count = computed(() => data.value.length);
const numericHeaders = computed(() => props.headers.filter(h => h.isNumeric));
const showAggregate = computed(() => !!numericHeader.value);
const showAggregateValue = computed(() => showAggregate.value && aggregate.value);
const hasNumericHeaders = computed(() => numericHeaders.value?.length > 0);
const showChart = computed(() => data.value.length > 0 && props.model.drawChart);



// Lifecycle hooks
onMounted(() => {
  
  updateBranches(branchStore.currentBranch?.id);
  form.value.validate();
  search();

  if (props.passedColumn) numericHeader.value = props.passedColumn;

});

// Methods
const searchData = (e) => {
  e?.preventDefault();
  search();
};

const search = () => {

  componentsStore.getPeriodicReport({ path: props.model.path, body: props.model });
};

const updateBranches = (branchId) => {
  props.model.branches = branchId ? [branchId] : [];
};

const numericValues = (fieldName) => 
  data.value
    .filter(a => !a.isTotal)
    .map(a => Number(a[fieldName]));

const sum = (fieldName) => 
  numericValues(fieldName).reduce((acc, val) => acc + val, 0);

const avg = (fieldName) => {
  const values = numericValues(fieldName);
  return values.length ? Math.ceil(sum(fieldName) / values.length) : 0;
};

const max = (fieldName) => 
  Math.max(...numericValues(fieldName));

const min = (fieldName) => 
  Math.min(...numericValues(fieldName));

const setAggregateValue = () => {
  if (!numericHeader.value) return;
  
  const operations = {
    Sum: sum,
    Avg: avg,
    Min: min,
    Max: max
  };
  
  const amount = operations[aggregate.value]?.(numericHeader.value) || 0;
  aggregateValue.value = amount < 0 ? 0 : funcs.formatNumber(amount);
};
// Watchers
watch([aggregate, numericHeader, data], setAggregateValue);
watch(
  () => tenantStore.getCurrentTenantBranches,
  () => updateBranches(branchStore.currentBranch?.id)
);
watch(
  () => branchStore.currentBranch,
  (newBranch) => updateBranches(newBranch?.id)
);
</script>

<template>
  <v-container fluid class="mt-0 pt-0">
    <v-row>
      <v-toolbar flat class="px-5">
        <h2>{{ title }}</h2>
        <v-spacer></v-spacer>
        Returned row {{ count }}
        <export-excel 
          :data="data" 
          :columns="headers" 
          :file-name="title" 
          :file-type="'xlsx'" 
          :sheet-name="title"
        >
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>
      </v-toolbar>
    </v-row>

    <!-- Form Row with reduced bottom padding -->
    <v-row class="pt-0 pb-0">  <!-- Changed from pt-0 to pb-1 -->
      <v-col cols="12">
        <v-form v-model="valid" ref="form" @submit="searchData">
          <v-container fluid class="py-0">  <!-- Added py-0 to remove container padding -->
            <v-row justify="start">
              <v-col :cols="cols" :sm="sm" md="4">
                <s-autocomplete 
                  label="Branches" 
                  v-model="model.branches" 
                  v-on:keyup.enter="searchData" 
                  :items="tenantStore.getCurrentTenantBranches"
                  :rules="branchesRules" 
                  item-title="branchName" 
                  item-value="id" 
                  multiple
                ></s-autocomplete>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker 
                  label="Start Date" 
                  v-model="model.startDate" 
                  v-on:keyup.enter="searchData"
                  :rules="startDateRules"
                ></s-date-picker>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker 
                  label="End Date" 
                  v-model="model.endDate" 
                  v-on:keyup.enter="searchData"
                  :rules="endDateRules"
                ></s-date-picker>
              </v-col>
              <v-col :cols="cols" :sm="sm" md="2">
                <v-btn 
                  color="primary" 
                  text 
                  type="submit" 
                  :loading="componentsStore.periodicReportDataLoading" 
                  loading-text="Please Wait..."
                >
                  Load
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <!-- Aggregate Row with reduced top padding -->
    <v-row v-if="(hasNumericHeaders && count)" class="pt-0">  <!-- Added pt-0 -->
      <v-col cols="12">
        <v-container fluid class="py-0">  <!-- Added py-0 -->
          <v-row>
            <v-col cols="12" md="3" sm="5">
              <s-autocomplete 
                single-line 
                hide-details 
                label="Column" 
                :items="numericHeaders" 
                v-model="numericHeader"
                item-text="title" 
                item-value="key"
              ></s-autocomplete>
            </v-col>
            <v-col cols="12" md="2" sm="3">
              <s-autocomplete 
                hide-details 
                :items="aggregates" 
                v-model="aggregate" 
                item-text="title" 
                item-value="key"
              ></s-autocomplete>
            </v-col>
            <v-col 
              cols="12" 
              md="2" 
              sm="4" 
              class="primary--text text-darken-1 mt-2 small font-weight-medium"
              v-if="showAggregateValue"
            >
              {{ aggregateValue }}
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- Table Row -->
    <v-row>
      <v-col cols="12">
        <s-data-table 
          :headers="headers" 
          :items="data" 
          :loading="componentsStore.periodicReportDataLoading" 
          :hide-default-footer="true" 
          dense
        ></s-data-table>
      </v-col>
    </v-row>

    <snack-bar />
  </v-container>
</template>

<!-- <template>
  <v-container fluid class="mt-0 pt-0">
    <v-row>
      <v-toolbar flat class="px-5">
        <h2>{{ title }}</h2>
        <v-spacer></v-spacer>
        Returned row {{ count }}
        <export-excel 
          :data="data" 
          :columns="headers" 
          :file-name="title" 
          :file-type="'xlsx'" 
          :sheet-name="title"
        >
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>
      </v-toolbar>
    </v-row>

   
    <v-row class="pt-0">
      <v-col cols="12">
        <v-form v-model="valid" ref="form" @submit="searchData">
          <v-container fluid>
            <v-row>
              <v-col :cols="cols" :sm="sm" md="4">
                <v-autocomplete 
                  label="Branches" 
                  v-model="model.branches" 
                  v-on:keyup.enter="searchData" 
                  :items="tenantStore.getCurrentTenantBranches"
                  :rules="branchesRules" 
                  item-title="branchName" 
                  item-value="id" 
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker 
                  label="Start Date" 
                  v-model="model.startDate" 
                  v-on:keyup.enter="searchData"
                  :rules="startDateRules"
                ></s-date-picker>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker 
                  label="End Date" 
                  v-model="model.endDate" 
                  v-on:keyup.enter="searchData"
                  :rules="endDateRules"
                ></s-date-picker>
              </v-col>
              <v-col :cols="cols" :sm="sm" md="2">
                <v-btn 
                  color="primary" 
                  text 
                  type="submit" 
                  :loading="componentsStore.periodicReportDataLoading" 
                  loading-text="Please Wait..."
                >
                  Load
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <v-row v-if="(hasNumericHeaders && count)">
      <v-col cols="12">
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3" sm="5">
              <v-autocomplete 
                single-line 
                hide-details 
                label="Column" 
                :items="numericHeaders" 
                v-model="numericHeader"
                item-text="title" 
                item-value="key"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2" sm="3">
              <v-autocomplete 
                hide-details 
                :items="aggregates" 
                v-model="aggregate" 
                item-text="title" 
                item-value="key"
              ></v-autocomplete>
            </v-col>
            <v-col 
              cols="12" 
              md="2" 
              sm="4" 
              class="primary--text text-darken-1 mt-2 small font-weight-medium"
              v-if="showAggregateValue"
            >
              {{ aggregateValue }}
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

  
    <v-row>
      <v-col cols="12">
        <s-data-table 
          :headers="headers" 
          :items="data" 
          :loading="componentsStore.periodicReportDataLoading" 
          :hide-default-footer="true" 
          dense
        ></s-data-table>
      </v-col>
    </v-row>

    <snack-bar />
  </v-container>
</template> -->
