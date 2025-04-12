<script setup>
import weeklyNav from './WeeklyNav';
</script>

<template>
  <s-periodic-report maxWidth="1000" :headers="weeklyNav.headers" :model="weeklyNav.model" title="Weekly Loans"
    passedColumn="amount">
  </s-periodic-report>
</template>