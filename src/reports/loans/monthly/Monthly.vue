<script setup>
import monthlyNav from '../monthly/MonthlyNav'
</script>
<template>
  <keep-alive>
    <s-periodic-report 
      maxWidth="1000" :headers="monthlyNav.headers" :model="monthlyNav.model" title="Monthly Loans" passedColumn="amount">
    </s-periodic-report>
  </keep-alive>
  </template>
 

 
 