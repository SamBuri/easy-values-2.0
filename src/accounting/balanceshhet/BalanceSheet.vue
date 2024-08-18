
<script setup>
import balanceSheetNav from './BalanceSheetNav'
</script>
<template>
   <s-statement :passedData="balanceSheetNav"></s-statement>
</template>

<script>


// import balanceSheetNav from './BalanceSheetNav'

// export default {
//     name: "BalanceSheet",
//      components: {

//     },
//     data: () => ({
//         title: "Balance Sheet",
//         model: balanceSheetNav.model,
//         headers: balanceSheetNav.headers,
//         accountTypes: ['Asset', "Liability", "Equity"],
//         balanceName:  "Balance"


//     }),


//     computed: {


//         data() {
//          return this.$store.state.components.periodicReportData
//          .filter(a=>a.accountType==='Asset'||a.accountType==='Liability'||a.accountType==='Equity');
//         },
//         loading() {
//             return this.$store.state.components.periodicReportDataLoading;
//         },

//         balance(){
//             return this.sum("Liability") +this.sum("Equity")-  this.sum("Asset");
//         }


//     },

//     watch: {


//     },


//     mounted() {

//     },

//     methods: {


//         sum(accountType) {
//             if (!this.data) return 0;

//             return this.data
//                 .filter(a => a.accountType === accountType)
//                 .map((a) => a.balance)
//                 .map(Number)
//                 .reduce((a, b) => a + b, 0);


//         },







//     },
// };
// </script>


