<template>
  <container fluid class="mt-0 pt-0">
    <v-row>
      <v-toolbar flat>
        <h2> {{ title }}</h2>
        <v-spacer> </v-spacer>

        <v-slot name="top-right"></v-slot>
        Returned row {{ count }}

        <export-excel :data="data" :columns="headers" :file-name="title" :file-type="'xlsx'" :sheet-name="title">
          <v-icon>mdi-microsoft-excel</v-icon>
        </export-excel>

      </v-toolbar>
    </v-row>
    <v-row class="pt-0">

      <v-col col="10">
        <v-form v-model="valid" ref="form" @submit="searchData">
          <v-container fluid>
            <v-row>
              <v-col :cols="cols" :sm="sm" md="4">
                <v-select label="Branches" v-model="model.branches" v-on:keyup.enter="searchData" :items="branches"
                  :rules="branchesRules" item-text="branchName" item-value="id" multiple></v-select>
              </v-col>
              <v-col :cols="cols" :sm="sm" :md="md">
                <s-date-picker label="Start Date" v-model="model.startDate" v-on:keyup.enter="searchData"
                  :rules="startDateRules"></s-date-picker>
              </v-col>

              <v-col :cols="cols" :sm="sm" :md="md">

                <s-date-picker label="End Date" v-model="model.endDate" v-on:keyup.enter="searchData"
                  :rules="endDateRules">
                </s-date-picker>

                <!-- <v-col :cols="cols" :sm="sm" md="2"></v-col> -->
              </v-col>

              <v-col :cols="cols" :sm="sm" md="2">
                <v-btn color="primary" text type="submit" :loading="loading" loading-text="Please Wait...">
                  Load
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col col="2" v-if="(hasNumericHeaders && count)">
        <v-container>
          <v-row>
            <v-col cols="12" md="5" sm="5">
              <v-select single-line hide-details label="Column" :items="numericHeaders" v-model="numericHeader"
                item-text="text" item-value="value"></v-select>
            </v-col>

            <v-col cols="12" md="3" sm="3">
              <v-select hide-details :items="aggregates" v-model="aggregate" item-text="text" item-value="value">
              </v-select>
            </v-col>


            <v-col cols="12" md="4" sm="4" class="primary--text text-darken-1 mt-2 small font-weight-medium"
              v-if="showAggregateValue">
              {{ aggregateValue }}
            </v-col>


          </v-row>
        </v-container>

      </v-col>
    </v-row>


    <v-row>
      <v-col :cols="cols">
        <s-data-table :headers="headers" :items="data" :loading="loading" :hide-default-footer="true" dense>
        </s-data-table>
      </v-col>
    </v-row>

    <!-- <v-row>

      <v-spacer></v-spacer>
      <v-radio-group row v-model="chartType" v-if="showChart">
        <v-radio label="Line" value="line"></v-radio>
        <v-radio label="Bar" value="bar"></v-radio>
        <v-radio label="Pie" value="pie"></v-radio>
      </v-radio-group>

    </v-row> -->

    <!-- <div v-if="showChart">
      <template v-if="provided">
          <v-slot name="chart"></v-slot>
      </template>
    <template v-else>
      <s-data-chart :data="data" :headers="headers" :chart-type="chartType" :reverse-data="reverseData"
        :remove-last="removeLast"></s-data-chart>
    </template>
     
    </div> -->



    <snack-bar />
  </container>
</template>
  
<script>

import SnackBar from "./SnackBar.vue";
import searchModel from "../search/SearchModel";
import funcs from "../utils/funcs";
export default {
  name: "SPeriodicReport",
  props: ["maxWidth", "warn", "warningMsg", "headers", "items", "model", "title", "passedColumn", "chartProvided"],
  components: {
    SnackBar
  },
  data: () => ({

    valid: false, mode: 0,
    loading: false,
    deleteLoading: false,
    branchesRules: [(v) => !!v || "Must select atleast one branch"],
    startDateRules: [(v) => !!v || "Start Date is required"],
    endDateRules: [(v) => !!v || "End Date is required"],


    aggregates: searchModel.aggreagtes,
    numericHeader: '',
    aggregate: "Sum",
    aggregateValue: 0,


    cols: 12,
    sm: 6,
    md: 3,
    chartType: 'line',
    reverseData: true,
    removeLast: true,

  }),


  computed: {

    formWidth() {
      return this.maxWidth > 0 ? this.maxWidth : 1000;
    },


    data() {
      return this.$store.state.components.periodicReportData;
    },

    // chartData() {
    //             let data = this.data;
    //             let length = data.length;
    //             if (length > 1) {
    //                 data.pop();
    //             }
    //             if (this.reverseData)
    //                 data.reverse();

    //             return data;

    //     },

    count() {
      return this.data.length;
    },

    numericHeaders() {
      return this.headers.filter(h => h.isNumeric === true);
    },

    showAggregate() {
      if (this.numericHeader) { return true }
      return false;
    },

    showAggregateValue() {
      return this.showAggregate && this.aggregate;
    },

    hasNumericHeaders() {
      if (!this.numericHeaders) return false;
      return this.numericHeaders.length > 0
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

    loading() {
      return this.$store.state.components.periodicReportDataLoading;
    },



    showChart() {
      return this.data.length > 0 && this.model.drawChart;
    }




  },

  watch: {

    aggregate() {
      this.setAggregateValue();

    },

    numericHeader() {
      this.setAggregateValue();

    },

    data() {
      this.setAggregateValue();
    },
    branches() {
      this.model.branches = [];
      if (this.currentBranch) {
        this.model.branches.push(this.currentBranch.id);
      }
    },

    currentBranch() {
      this.model.branches = [];
      if (this.currentBranch) {
        this.model.branches.push(this.currentBranch.id);
      }
    },

  },


  mounted() {
    this.setBranch();
    this.search();
    if (this.passedColumn) {
      this.numericHeader = this.passedColumn;
    }


  },

  methods: {

    searchData(e) {
      e.preventDefault();
      this.search();
    },

    search() {
      this.$refs.form.validate();
      if (!this.valid) return;
      this.$store.dispatch("components/getPeriodicReport", { path: this.model.path, body: this.model });
    },

    setBranch() {
      this.model.branches = [];
      if (this.currentBranch) {
        this.model.branches.push(this.currentBranch.id);
      }
    },



    numericValues(fieldName) {
      return this.data
        .filter(a => !a.isTotal)
        .map((a) => a[fieldName])
        .map(Number);
    },

    sum(fieldName) {
      return funcs.sum(this.data, fieldName);
    },

    avg(fieldName) {
      let sum = this.sum(fieldName);
      let avLength = this.data.filter(a => !a.isTotal).length;
      return Math.ceil(sum / avLength);


    },

    max(fieldName) {
      return Math.max(...this.numericValues(fieldName))
    },

    min(fieldName) {
      return Math.min(...this.numericValues(fieldName))
    },

    setAggregateValue() {
      let amount = 0;
      if (this.numericHeader) {
        switch (this.aggregate) {
          case 'Sum':
            amount = this.sum(this.numericHeader);
            break;

          case 'Avg':
            amount = this.avg(this.numericHeader);
            break;

          case 'Min':
            amount = this.min(this.numericHeader);
            break;

          case 'Max':
            amount = this.max(this.numericHeader);
            break;
        }

        this.aggregateValue = amount < 0 ? 0 : funcs.formatNumber(amount);

      }

    },








  },
};
</script>

kubectl scale deployment banking --replicas=0
kubectl scale deployment banking --replicas=1

kubectl scale deployment customer --replicas=0
kubectl scale deployment customer --replicas=1

kubectl scale deployment items --replicas=0
kubectl scale deployment items --replicas=1

kubectl scale deployment loan --replicas=0
kubectl scale deployment loan --replicas=1

kubectl scale deployment lookup --replicas=0
kubectl scale deployment lookup --replicas=1

kubectl scale deployment profile --replicas=0
kubectl scale deployment profile --replicas=1

kubectl scale deployment sales --replicas=0
kubectl scale deployment sales --replicas=1

kubectl scale deployment servicegateway --replicas=0
kubectl scale deployment servicegateway --replicas=1

kubectl scale deployment banking --replicas=0
kubectl scale deployment banking --replicas=1
kubectl scale deployment banking --replicas=0
kubectl scale deployment banking --replicas=1


source ~/.bash_profile
mvn compile jib:build

