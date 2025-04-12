<script setup>
import loanBillDetailNav from '../loan/loanbilldetail/LoanBillDetailNav'
import { onMounted, computed } from 'vue';
import { defineLoanBillDetailStore } from '@/loan/loanbilldetail/LoanBillDetailStore';
const loanBillDetailStore = defineLoanBillDetailStore();
onMounted(() => {
  loanBillDetailStore.getNewLoanBillDetails();
});
const headers = loanBillDetailNav.menu.headers;
const toSumField = "amount";
const dashboardList = computed(() => {
  return loanBillDetailStore.newLoanBillDetails;
});
</script>
<template>
    <s-count-dashboard-card title="New Loan Bills"  :items="dashboardList"  :headers="headers" :toSumField="toSumField">   
    </s-count-dashboard-card>
</template>
