<script setup>
import { ref, watch, onMounted } from "vue";
import { defineReportStore } from "@/reports/ReportStore";
import funcs from "@/utils/funcs";
import {defineTenantStore} from "@/organisation/tenant/TenantStore";

const props = defineProps(["passedData", "accountHeaders", "accountItems"]);

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

const search = () => {
  form.value.validate();
  // model.value.startDate = funcs.formatDate(model.value.startDate);
  // model.value.endDate = funcs.formatDate(model.value.endDate);

  reportSore.getPeriodicReport({ path: model.value.path, body: model.value });
};

const searchData = (e) => {
  e.preventDefault();
  search();
};

onMounted(() => {
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

const valid = ref(false);
const form = ref(null);
const dialogOk= (data)=>{
  model.value.setData(data);
}

const clear=()=>model.value.clear();
</script>

<template>
  <container>
    <v-row>
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
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>
      </v-toolbar>
    </v-row>

    <v-form v-model="valid" ref="form" @submit="searchData" class="mx-0">
      <v-container fluid>
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
  </container>
</template>

<!--
<script>
import SnackBar from "./SnackBar.vue";
export default {
  name: "SLedger",
  props: [
    "maxWidth",
    "headers",
    "items",
    "model",
    "title",
    "accountHeaders",
    "accountItems",
  ],
  components: {
    SnackBar,
  },
  data: () => ({
    valid: false,
    mode: 0,
    accountIdRules: [(v) => !!v || "You must enter account id"],
    branchesRules: [(v) => !!v || "Must select atleast one branch"],
    startDateRules: [(v) => !!v || "Start Date is required"],
    endDateRules: [(v) => !!v || "End Date is required"],

    mtdsProvided: true,
    accountIdDialog: false,

    cols: 12,
    sm: 6,
    md: 3,
    lmd: 2,
  }),

  computed: {
    accountId() {
      return this.model.accountId;
    },

    formWidth() {
      return this.maxWidth > 0 ? this.maxWidth : 1000;
    },

    data() {
      return this.$store.state.components.periodicReportData;
    },

    loading() {
      return this.$store.state.components.periodicReportDataLoading;
    },

    count() {
      return this.data.length;
    },

    totalDebits() {
      return this.sum("debit");
    },

    totalCredits() {
      return this.sum("credit");
    },

    balance() {
      if (this.data.length > 0) {
        return this.data[0].balance;
      }
      return 0;
    },

    tenant() {
      return this.$store.state.security.user.tenant;
    },
    branches() {
      if (this.tenant) {
        return this.tenant.company.branches;
      }
      return [];
    },
    currentBranch() {
      return this.$store.state.security.user.currentBranch;
    },
  },

  watch: {
    accountId() {
      this.$store.commit("components/periodicReportData", []);
      if (this.accountId) {
        this.$emit("accountIdChanged", this.accountId);
        this.search();
      }
    },
    // branches() {
    //     this.model.branches = [];
    //     if (this.currentBranch) {
    //         this.model.branches.push(this.currentBranch.id);
    //     }
    // },

    // currentBranch() {
    //     this.model.branches = [];
    //     if (this.currentBranch) {
    //         this.model.branches.push(this.currentBranch.id);
    //     }
    // },
  },

  mounted() {
    // this.setBranch();
    this.clear();
    this.$refs.form.validate();
    if (this.accountId.length > 0) {
      this.search();
    }
  },

  methods: {
    searchData(e) {
      e.preventDefault();
      this.search();
    },

    search() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$store.dispatch("components/getPeriodicReport", {
          path: this.model.path,
          body: this.model,
        });
      }
    },

    setBranch() {
      this.model.branches = [];
      if (this.currentBranch) {
        this.model.branches.push(this.currentBranch.id);
      }
    },

    sum(fieldName) {
      if (!this.data) return 0;

      return this.data
        .filter((a) => !a.isTotal)
        .map((a) => a[fieldName])
        .map(Number)
        .reduce((a, b) => a + b, 0);
    },

    appendIconCallback() {
      this.accountIdDialog = true;
    },

    accountIdOk(data) {
      this.$emit("setAccountIdData", data);
    },

    accountIdClose() {
      this.accountIdDialog = false;
    },

    clear() {
      this.$store.commit("components/periodicReportData", []);
    },
  },
};
</script>
<style>
.bold-text {
  font-weight: bold;
}
</style> -->
