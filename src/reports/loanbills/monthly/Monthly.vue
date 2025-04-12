<script setup>
import monthlyNav from '../monthly/MonthlyNav'
</script>
<template>
  <s-periodic-report maxWidth="1000" :headers="monthlyNav.headers" :model="monthlyNav.model" title="Monthly Loan Bills"
    passedColumn="amount">
  </s-periodic-report>
</template>
