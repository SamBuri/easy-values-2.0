<script setup>
import dailyNav from './DailyNav';
</script>
<template>
  <s-periodic-report maxWidth="1000" :headers="dailyNav.headers" :model="dailyNav.model" title="Daily Expenses"
    passedColumn="amount">
  </s-periodic-report>
</template>