<script setup>
import { defineLoanStore } from '@/loan/loan/LoanStore';
import { onMounted, computed } from 'vue';
const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanSummary();
  })
 
  const dashboardList = computed(()=>loanStore.loanSummary.filter(l=>l.loanStatus=='Recovery'));
 
  const headers = [
    {title: "Product Name", key: "productName", chartLabel: true, width: "35%"},
    {title: "Principle", key: "sumPrinciple", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Balance", key: "sumBalance", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Count", key: "count", isNumeric: true, chartValue: true, width: "13%"}
  ];

</script>
<template>
  <s-data-dashboard title="Recovery Loan Summary" :headers="headers" :data="dashboardList" chartType="bar" :tableCols="6" :chartCols="6" />
</template>
