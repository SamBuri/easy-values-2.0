<script setup>
 import { defineLoanStore } from '@/loan/loan/LoanStore';
 import { onMounted, computed } from 'vue';
 const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanStatusSummary();
  })

  const dashboardList = computed(()=>loanStore.loanStatusSummary);

  const headers = [
    {title: "Loan Status", key: "loanStatus", chartLabel: true, width: "35%"},
    {title: "Principle", key: "principle", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Balance", key: "balance", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Count", key: "count", isNumeric: true, chartValue: true, width: "13%"}
  ];


</script>

<template>
  <s-data-dashboard title="Loan Status" :headers="headers" :data="dashboardList" chartType="bar" :tableCols="6" :chartCols="6" />
</template>

