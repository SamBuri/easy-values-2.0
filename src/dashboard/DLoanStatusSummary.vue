<script setup>
 import { defineLoanStore } from '@/loan/loan/LoanStore';
 import { onMounted, computed } from 'vue';
 const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanStatusSummary();
  })

  const dashboardList = computed(()=>loanStore.loanStatusSummary);

  const headers = [
    {title: "Loan Status", key: "loanStatus", chartLabel:true},
    {title: "Total Principle" , key:"principle",isNumeric:true, chartValue: true},
    {title: "Total Balance",  key:"balance",isNumeric:true,  chartValue: true},
    {title: "Count",  key:"count",isNumeric:true,  chartValue: true}
  ];


</script>

<template>
    <s-data-dashboard  title="Loan Status" :headers="headers" :data="dashboardList" chartWidth="400" chartHeight="400" chartType="pie"> </s-data-dashboard>
  </template>

