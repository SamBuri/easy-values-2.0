<script setup>
import yearlyNav from '../yearly/YearlyNav'
</script>
<template>
  <s-periodic-report maxWidth="1000" :headers="yearlyNav.headers" :model="yearlyNav.model" title="Yearly Loan Bills"
    passedColumn="amount">
  </s-periodic-report>
</template>