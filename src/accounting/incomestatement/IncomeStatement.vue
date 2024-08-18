<script setup>
import incomeStatementNav from './IncomeStatementNav'

</script>

<template>
   <s-statement :passedData="incomeStatementNav" :balance="balance"></s-statement>
</template>
<!--
<script>


import incomeStatementNav from './IncomeStatementNav'

export default {
    name: "AccountStatement",
     components: {

    },
    data: () => ({
        title: "Income Statement",
        model: incomeStatementNav.model,
        headers: incomeStatementNav.headers,
        accountTypes: ['Income', "Expense"],
        balanceName: "Profit",


    }),


    computed: {


        data() {
         return this.$store.state.components.periodicReportData.filter(a=>a.accountType==='Income'||a.accountType==='Expense');
        },
        loading() {
            return this.$store.state.components.periodicReportDataLoading;
        },

        balance(){
            return this.sum("Income") -  this.sum("Expense");
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
</script> -->

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
