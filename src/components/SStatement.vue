

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
            <v-col :cols="cols">
                <v-form v-model="valid" ref="form" @submit="searchData">
                    <v-container fluid>
                        <v-row>
                            <v-col :cols="cols" :sm="sm" :md="md">
                                <v-select label="Branches" v-model="model.branches" v-on:keyup.enter="searchData"
                                    :items="branches" :rules="branchesRules" item-text="branchName" item-value="id"
                                    multiple></v-select>
                            </v-col>


                            <v-col :cols="cols" :sm="sm" :md="md">
                                <s-date-picker label="Start Date" v-model="model.startDate" v-on:keyup.enter="searchData"
                                    :rules="startDateRules"></s-date-picker>
                            </v-col>



                            <v-col :cols="cols" :sm="sm" :md="md">

                                <s-date-picker label="End Date" v-model="model.endDate" v-on:keyup.enter="searchData"
                                    :rules="endDateRules">
                                </s-date-picker>
                            </v-col>

                            <v-col :cols="cols" :sm="sm" :md="md">

                                <v-btn color="primary" text type="submit" :disabled="!valid" :loading="loading"
                                    loading-text="Please Wait...">
                                    Load
                                </v-btn>
                            </v-col>



                        </v-row>

                    </v-container>
                </v-form>
            </v-col>
        </v-row>


        <v-row>
            <v-col :cols="cols">
                <v-expansion-panels>
                    <v-expansion-panel v-for="(accountType) in accountTypes" :key="accountType">
                        <v-expansion-panel-header class="header-text">
                            {{ accountType }} <v-spacer></v-spacer> {{ sumFormatted(accountType) }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>

                            <v-div v-for="(itemCategory) in getItemDistinctCategoriesByAccountType(accountType)"
                                :key="itemCategory">


                                <div class="grid-title">
                                    <v-toolbar flat>
                                        {{ getCategoryName(itemCategory) }}
                                        <v-spacer></v-spacer>
                                        {{ sumCategory(itemCategory) }}
                                    </v-toolbar>

                                </div>

                                <div class="grid-container" v-for="(account) in getItemsByCategoryId(itemCategory)"
                                    :key="account.accountId">
                                    <div class="grid-item">{{ account.accountId }}</div>
                                    <div class="grid-item">{{ account.accountName }}</div>
                                    <div class="grid-item align-right">{{ formatNumber(account.balance) }}</div>

                                </div>

                            </v-div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel disabled>
                        <v-expansion-panel-header class="primary--text">
                            {{ balanceName }} <v-spacer></v-spacer> {{ formatNumber(balance) }}
                        </v-expansion-panel-header>

                    </v-expansion-panel>
                </v-expansion-panels>

            </v-col>

        </v-row>

        <v-row>
            <v-spacer></v-spacer>
            <v-btn color="primary" text :loading="loading" :disabled="!valid && loading">
            </v-btn>
        </v-row>

        <snack-bar />
    </container>
</template>
    
<script>


import funcs from '../utils/funcs';

export default {
    name: "SStatement",
    props: ["model", "headers", "data", "loading", "title", "accountTypes", "balanceName", 'balance'],
    components: {

    },
    data: () => ({

        valid: false,
        deleteLoading: false,
        branchesRules: [(v) => !!v || "Must select atleast one branch"],
        startDateRules: [(v) => !!v || "Start Date is required"],
        endDateRules: [(v) => !!v || "End Date is required"],


        cols: 12,
        sm: 6,
        md: 3,


    }),


    computed: {
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

       

        count() {
            return this.data.length;
        },






    },

    watch: {

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




        sum(accountType) {
            if (!this.data) return 0;
            return this.data
                .filter(a => a.accountType === accountType)
                .map((a) => a.balance)
                .map(Number)
                .reduce((a, b) => a + b, 0).toFixed(2);


        },



        sumFormatted(accountType) {
            return funcs.formatNumber(this.sum(accountType));
        },

        formatNumber(number) {
            number = number.toFixed(2);
            return funcs.formatNumber(number);
        },

        sumCategory(accountCategoryId) {
            if (!this.data) return 0;

            return funcs.formatNumber(this.data
                .filter(a => a.accountCategoryId === accountCategoryId)
                .map((a) => a.balance)
                .map(Number)
                .reduce((a, b) => a + b, 0).toFixed(2));


        },

        getCategoryName(id) {
            let itemcategories = this.data
                .filter(a => a.accountCategoryId === id)
                .map(a => a.categoryName);

            return itemcategories[0];
        },

        avg(fieldName) {
            let sum = this.sum(fieldName);
            let avLength = this.data.filter(a => !a.isTotal).length;
            return Math.ceil(sum / avLength);


        },

        getItemCategoriesByAccountType(accountType) {
            return this.data.filter(d => d.accountType === accountType);
        },

        getItemDistinctCategoriesByAccountType(accountType) {
            return [...new Set(this.data.filter(d => d.accountType === accountType).map(d => d.accountCategoryId))];
        },

        getItemsByCategoryId(accountCategoryId) {
            return this.data.filter(d => d.accountCategoryId === accountCategoryId);
        },




    },
};
</script>

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
