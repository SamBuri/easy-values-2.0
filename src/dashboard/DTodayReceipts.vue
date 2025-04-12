<script setup>
import receiptNav from '../sales/receipt/ReceiptNav'
import { onMounted, computed } from 'vue';
import { defineReceiptStore } from '@/sales/receipt/ReceiptStore';
const receiptStore = defineReceiptStore();

onMounted(() => {
  receiptStore.getTodayReceipts();
});
const headers = receiptNav.menu.miniHeaders;
const toSumField = "amountReceived";
</script>
<template>
    <s-count-dashboard-card title="Today's Receipts" :items="receiptStore.todayReceipts" :toSumField="toSumField" :headers="headers">

    
    </s-count-dashboard-card>
</template>
