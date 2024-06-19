

<template>
   <s-statement :title="title" :model="model" :headers="headers" :data="data" :loading="loading" 
   :accountTypes="accountTypes" :balanceName="balanceName" :balance="balance"></s-statement>
</template>
    
<script>


import balanceSheetNav from './BalanceSheetNav'

export default {
    name: "BalanceSheet",
     components: {

    },
    data: () => ({
        title: "Balance Sheet",
        model: balanceSheetNav.model,
        headers: balanceSheetNav.headers,
        accountTypes: ['Asset', "Liability", "Equity"],
        balanceName:  "Balance"
        

    }),


    computed: {

       
        data() {
         return this.$store.state.components.periodicReportData
         .filter(a=>a.accountType==='Asset'||a.accountType==='Liability'||a.accountType==='Equity');
        },
        loading() {
            return this.$store.state.components.periodicReportDataLoading;
        },

        balance(){
            return this.sum("Liability") +this.sum("Equity")-  this.sum("Asset");
        }

        
    },

    watch: {

        
    },


    mounted() {
       
    },

    methods: {


        sum(accountType) {
            if (!this.data) return 0;

            return this.data
                .filter(a => a.accountType === accountType)
                .map((a) => a.balance)
                .map(Number)
                .reduce((a, b) => a + b, 0);


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
