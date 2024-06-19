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

        <v-form v-model="valid" ref="form" @submit="searchData">
            <v-container fluid>
                <v-row>
                    <v-col :cols="cols" :sm="sm" :md="md">
                        <v-select label="Branches" v-model="model.branches" v-on:keyup.enter="search" :items="branches"
                            :rules="branchesRules" item-text="branchName" item-value="id" multiple compact></v-select>
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="md">
                        <v-text-field label="Account Id" v-model="model.accountId" :rules="accountIdRules"
                            append-icon="mdi-view-list" @click:append="appendIconCallback" v-on:keyup.enter="searchData" compact>
                        </v-text-field>
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="md" compact>
                        <s-date-picker label="Start Date" v-model="model.startDate" v-on:keyup.enter="searchData"
                            :rules="startDateRules"></s-date-picker>
                    </v-col>



                    <v-col :cols="cols" :sm="sm" :md="md">
                        <v-toolbar flat>
                            <s-date-picker label="End Date" v-model="model.endDate" v-on:keyup.enter="searchData"
                                :rules="endDateRules" compact>
                            </s-date-picker>
                            <v-btn color="primary" text type="submit" :disabled="!valid" :loading="loading"
                                loading-text="Please Wait...">
                                Load
                            </v-btn>
                        </v-toolbar>
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact>
                       Account Name
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
                        {{model.accountName}}
                    </v-col>
                   
                    <v-col :cols="cols" :sm="sm" :md="lmd" compact>
                       Total Debit
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
                        {{totalDebits}}
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact>
                      Total Credit
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
                        {{totalCredits}}
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact>
                       Balance
                    </v-col>

                    <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
                        {{balance}}
                    </v-col>
                   <v-cols :cols="cols" :sm="cols" md="8">
                  
                </v-cols>
                <v-row>  <slot name="extra"></slot></v-row>

                </v-row>
                <v-dialog v-model="accountIdDialog" persistent :max-with="600">
                    <search-mini :mtdsProvided="mtdsProvided" @ok="accountIdOk" @close="accountIdClose"
                        :items="accountItems" :headers="accountHeaders" />
                </v-dialog>
            </v-container>
        </v-form>

        <v-row>
            <v-col :cols="cols">
                <s-data-table :headers="headers" :items="data" :loading="loading" :hide-default-footer="true" dense>
                </s-data-table>
            </v-col>
        </v-row>

        <v-row>
            <v-spacer></v-spacer>
            <v-btn color="primary" text :loading="loading" :disabled="!valid && loading">
            </v-btn>
        </v-row>

        <!-- <slot name="card-actions" :valid="valid">
        
      </slot> -->

        <snack-bar />
    </container>
</template>
    
<script>

import SnackBar from "./SnackBar.vue";
export default {
    name: "SLedger",
    props: ["maxWidth", "headers", "items", "model", "title", "accountHeaders", "accountItems"],
    components: {
        SnackBar,
    },
    data: () => ({

        valid: false,
        mode: 0,
        deleteLoading: false,
        accountIdRules: [(v) => !!v || "You must enter account id"],
        branchesRules: [(v) => !!v || "Must select atleast one branch"],
        startDateRules: [(v) => !!v || "Start Date is required"],
        endDateRules: [(v) => !!v || "End Date is required"],

        mtdsProvided: true,
        accountIdDialog: false,

        cols: 12,
        sm: 6,
        md: 3,
        lmd: 2

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
                return this.data[0].balance
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
            this.$store.commit("components/periodicReportData", [])
            if (this.accountId){
               
                this.$emit("accountIdChanged", this.accountId);
                this.search()
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
        this.$refs.form.validate()
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

                this.$store.dispatch("components/getPeriodicReport", { path: this.model.path, body: this.model });
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
               .filter(a=>!a.isTotal)
                .map((a) => a[fieldName])
                .map(Number)
                .reduce((a, b) => a + b, 0);


        },



        appendIconCallback() {
            this.accountIdDialog = true
        },


        accountIdOk(data) {
            this.$emit("setAccountIdData", data);

        },

        accountIdClose() {
            this.accountIdDialog = false;
        },

        clear(){
            this.$store.commit("components/periodicReportData", [])
            
        }


    },
};
</script>
<style>
   .bold-text{
    font-weight: bold;
   }
</style>
  
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
  
  