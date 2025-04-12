<script setup>
import expenseDetailNav from '../expenses/expensedetail/ExpenseDetailNav'
import { onMounted, computed } from 'vue';
import { defineExpenseDetailStore } from '@/expenses/expensedetail/ExpenseDetailStore';
const expenseDetailStore = defineExpenseDetailStore();
onMounted(() => {
  expenseDetailStore.getNewExpenseDetails();
});
const headers = expenseDetailNav.menu.headers;
const toSumField = "amount";
const dashboardList = computed(() => {
  return expenseDetailStore.newExpenseDetails;
});
</script>
<template>
    <s-count-dashboard-card title="New Expenses"  :items="dashboardList"  :headers="headers" :toSumField="toSumField">
    </s-count-dashboard-card>
</template>
