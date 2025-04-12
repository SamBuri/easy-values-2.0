<script setup>
import { ref, watch, onMounted } from "vue";
import { defineReportStore } from "@/reports/ReportStore";
import funcs from "@/utils/funcs";
import {defineTenantStore} from "@/organisation/tenant/TenantStore";

const props = defineProps(["passedData", "accountHeaders", "accountItems", "dialog"]);

const cols = 12;
const sm = 6;
const md = 3;
const lmd = 2;

const accountIdRules = [(v) => !!v || "You must enter account id"];
const branchesRules = [(v) => !!v || "Must select atleast one branch"];
const startDateRules = [(v) => !!v || "Start Date is required"];
const endDateRules = [(v) => !!v || "End Date is required"];


const reportSore = defineReportStore();
const data = props.passedData;
const model = ref(data.model);
const tenantStore = defineTenantStore();

const form = ref(null);

const search = () => {
 
 
  reportSore.getPeriodicReport({ path: model.value.path, body: model.value });
};

const searchData = (e) => {
  e.preventDefault();
  search();
};

onMounted(() => {
   form.value.validate();
  reportSore.periodicReportData = [];
  model.value.branches = tenantStore.getCurrentTenantBranches
  .map(m=>m.id);
});

const totalDebits = ref(0);
const totalCredits = ref(0);
const balance = ref(0);

watch(
  () => reportSore.periodicReportData,
  (newValue) => {
    totalDebits.value = funcs.formatNumber(funcs.sum(newValue, "debit"));
    totalCredits.value = funcs.formatNumber(funcs.sum(newValue, "credit"));
    balance.value = funcs.formatNumber(newValue.length > 0 ? newValue[0].balance : 0);
  }
);

watch(
  () => model.value.accountId,
  (newValue) => {
 
    if (newValue) {
      let selectedAccount = props.accountItems.filter((m) => m.id == newValue);
      if (selectedAccount.length>0) {
        model.value.setData(selectedAccount[0]);
      }
      search();
    }
  },
  { immediate: true }
);

const valid = ref(false);

const dialogOk= (data)=>{
  model.value.setData(data);
}

const clear=()=>model.value.clear();
</script>

<template>
  <v-card flat max-width="1300" class="mx-auto mt-0 pa-1">
    <v-toolbar flat class="ml-4">
        <h2>{{ passedData.menu.title }}</h2>
        <v-spacer> </v-spacer>

        <v-slot name="top-right"></v-slot>
        Returned row {{ reportSore.periodicReportData.length }}
        <export-excel
          :data="reportSore.periodicReportData"
          :columns="passedData.headers"
          :file-name="title"
          :file-type="'xlsx'"
          :sheet-name="passedData.menu.title"
        >
          <v-icon>mdi-microsoftfluid style="background: white;"-excel</v-icon>
        </export-excel>
         <v-btn color="primary" v-if="props.dialog" text @click="$emit('cancel')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      </v-toolbar>


    <v-form v-model="valid" ref="form" @submit="searchData" class="mx-0">
      <v-container  fluid style="background: white;">
        <v-row>
          <v-col :cols="cols" :sm="sm" :md="lmd">
            <v-autocomplete
              label="Branches"
              v-model="model.branches"
              v-on:keyup.enter="search"
              :items="tenantStore.getCurrentTenantBranches"
              :rules="branchesRules"
              item-title="branchName"
              item-value="id"
              multiple
            ></v-autocomplete>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md">

            <s-select-field
              label="Account Id"
              v-model="model.accountId"
              :rules="accountIdRules"
              :counter="20"
              :items="accountItems"
              :headers="accountHeaders"
              @ok="dialogOk"
              @clear="clear"
            ></s-select-field>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="md" compact>
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
                compact
              >
              </s-date-picker>

          </v-col>

          <v-col :cols="cols" :sm="1" :md="1">
            <v-btn
                color="primary"
                text
                type="submit"
                :disabled="!valid || reportSore.periodicReportDataLoading"
                :loading="reportSore.periodicReportDataLoading"
                loading-text="Please Wait..."
              >
                Load
              </v-btn>
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" > Account Name </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
            {{ model.accountName }}
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact> Total Debit </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
            {{ totalDebits }}
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact> Total Credit </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
            {{ totalCredits }}
          </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact> Balance </v-col>

          <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
            {{ balance }}
          </v-col>

          <v-row> <slot name="extra"></slot></v-row>
        </v-row>
      </v-container>
    </v-form>

    <v-row class="mx-1">
      <v-col :cols="cols">
        <s-data-table
          :headers="passedData.headers"
          :items="reportSore.periodicReportData"
          :loading="reportSore.periodicReportDataLoading"
          :hide-default-footer="true"
          dense
        >
        </s-data-table>
      </v-col>
    </v-row>


    <snack-bar />
  </v-card>
</template>
