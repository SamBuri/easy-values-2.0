<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { defineReportStore } from "@/reports/ReportStore";
import funcs from "@/utils/funcs";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";

const props = defineProps(["passedData", "accountHeaders", "accountItems"]);

const cols = 12;
const sm = 6;
const md = 3;
const lmd = 2;

// const accountIdRules = [(v) => !!v || "You must enter account id"];
const branchesRules = [(v) => !!v || "Must select atleast one branch"];
const startDateRules = [(v) => !!v || "Start Date is required"];
const endDateRules = [(v) => !!v || "End Date is required"];

const reportSore = defineReportStore();
// const data = props.passedData;
const model = ref(props.passedData.model);
const tenantStore = defineTenantStore();

const search = () => {
  form.value?.validate();
  // model.value.startDate = funcs.formatDate(model.value.startDate);
  // model.value.endDate = funcs.formatDate(model.value.endDate);

  reportSore.getPeriodicReport({ path: model.value.path, body: model.value });
};

const searchData = (e) => {
  e?.preventDefault();
  search();
};

const branches = computed(() => tenantStore.getCurrentTenantBranches);

onMounted(() => {
  model.value.branches = branches.value.map((m) => m.id);
  search();
});

const data = computed(() => reportSore.periodicReportData);

const loading = computed(() => reportSore.periodicReportDataLoading);

const sumCategory = (accountCategoryId) => {
  if (!data.value) return 0;

  return formatNumber(
    data.value
      .filter((a) => a.accountCategoryId === accountCategoryId)
      .map((a) => a.balance)
      .map(Number)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );
};

const sum = (accountType) => {
  if (!data.value) return 0;
  return data.value
    .filter((a) => a.accountType === accountType)
    .map((a) => a.balance)
    .map(Number)
    .reduce((a, b) => a + b, 0);
};

const sumFormatted = (accountType) => {
  return formatNumber(sum(accountType));
};

const formatNumber = (number) => {

  number = parseFloat(number).toFixed(2);
  return funcs.formatNumber(number);
};

const getCategoryName = (id) => {
  let itemcategories = data.value
    .filter((a) => a.accountCategoryId === id)
    .map((a) => a.categoryName);

  return itemcategories[0];
};

const getItemDistinctCategoriesByAccountType = (accountType) => {
  return [
    ...new Set(
      data.value
        .filter((d) => d.accountType === accountType)
        .map((d) => d.accountCategoryId)
    ),
  ];
};

const getItemsByCategoryId = (accountCategoryId) => {
  return data.value.filter((d) => d.accountCategoryId === accountCategoryId);
};

const balance = computed(()=>props.passedData.calBalance(data.value));

const color = computed(()=>props.passedData.color(balance.value))
const valid = ref(false);
const form = ref(null);
const title = props.passedData.menu.title;
</script>
<template>
  <container fluid>
    <v-row>
      <v-toolbar flat class="ml-4">
        <h2>{{ title }}</h2>
        <v-spacer> </v-spacer>

        <v-slot name="top-right"></v-slot>

        Returned row {{ data.length }}

        <export-excel
          :data="data"
          :columns="passedData.headers"
          :file-name="title"
          :file-type="'xlsx'"
          :sheet-name="title"
        >
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>
      </v-toolbar>
    </v-row>

    <v-row >
      <v-col :cols="cols">
        <v-form v-model="valid" ref="form" @submit="searchData" class="mx-0">
          <v-container fluid>
            <v-row>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-autocomplete
                  label="Branches"
                  v-model="model.branches"
                  v-on:keyup.enter="searchData"
                  :items="branches"
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
                >
                </s-date-picker>
              </v-col>

              <v-col :cols="cols" :sm="sm" :md="md">
                <v-btn
                  color="primary"
                  text
                  type="submit"
                  :disabled="!valid || loading"
                  :loading="loading"
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

    <v-row class="mx-1">
      <v-col :cols="cols">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="accountType in model.accountTypes"
            :key="accountType"
          >
            <v-expansion-panel-title class="header-text">
              {{ accountType }} <v-spacer></v-spacer>
              {{ sumFormatted(accountType) }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-div
                v-for="itemCategory in getItemDistinctCategoriesByAccountType(
                  accountType
                )"
                :key="itemCategory"
              >
                <div class="grid-title">
                  <v-toolbar flat>
                    {{ getCategoryName(itemCategory) }}
                    <v-spacer></v-spacer>
                    {{ sumCategory(itemCategory) }}
                  </v-toolbar>
                </div>

                <div
                  class="grid-container"
                  v-for="account in getItemsByCategoryId(itemCategory)"
                  :key="account.accountId"
                >
                  <div class="grid-item">{{ account.accountId }}</div>
                  <div class="grid-item">{{ account.accountName }}</div>
                  <div class="grid-item align-right">
                    {{ formatNumber(account.balance) }}
                  </div>
                </div>
              </v-div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel disabled>
            <v-expansion-panel-title  :color="color">
              {{ model.balanceName }} <v-spacer></v-spacer>
              {{ formatNumber(balance) }}
            </v-expansion-panel-title>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <snack-bar />
  </container>
</template>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

.grid-item {
    background-color: #f2f2f2;
    padding: 5px;
    text-align: left;
}

.align-right {
    text-align: right;
}

.grid-title {
    font-weight: bold;
    text-align: left;
    padding-bottom: 2x;
}

.header-text {
    /* text-align: right; */
    font-weight: bold;
}
</style>


docker build . t samburi/easyvalues:2.0
docker bush samburi/easyvalues:2.0
