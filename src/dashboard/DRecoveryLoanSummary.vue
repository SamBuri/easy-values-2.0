<script setup>
import { defineLoanStore } from '@/loan/loan/LoanStore';
import { onMounted, computed } from 'vue';
const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanSummary();
  })
 
  const dashboardList = computed(()=>loanStore.loanSummary.filter(l=>l.loanStatus=='Recovery'));
 
  const headers = [
    {title: "Product Name", key: "productName", chartLabel:true},
    {title: "Total Principle" , key:"sumPrinciple",isNumeric:true, chartValue: true},
    {title: "Total Balance",  key:"sumBalance",isNumeric:true,  chartValue: true},
    {title: "Count",  key:"count",isNumeric:true,  chartValue: true}
  ];

</script>
<template>
     <s-data-dashboard  title="Recovery Loan Summary" :headers="headers" :data="dashboardList"> </s-data-dashboard>
</template>
