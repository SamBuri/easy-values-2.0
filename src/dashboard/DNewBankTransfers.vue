<script setup>
import bankTransfersNav from '../banking/banktransfer/BankTransferNav'
import { onMounted, computed } from 'vue';
import { defineBankTransferStore } from '@/banking/banktransfer/BankTransferStore';
const bankTransferStore = defineBankTransferStore();
onMounted(() => {
  bankTransferStore.getNewBankTransfers();
});
const headers = bankTransfersNav.menu.headers;
const toSumField = "amount";
const dashboardList = computed(() => {
  return bankTransferStore.newBankTransfers;
});
</script>
<template>
    <s-count-dashboard-card title="New Bank Transfers"  :items="dashboardList"  :headers="headers" :toSumField="toSumField"
    >
    </s-count-dashboard-card>
</template>

