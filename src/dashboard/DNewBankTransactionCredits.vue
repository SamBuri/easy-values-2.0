<script setup>
import { useNewBankTransactios } from './UseNewAccountTransactions';
const {headers, bankTransactions} = useNewBankTransactios((r)=>r.accountAction=="Credit");
const toSumField = "amount";
</script>
<template>
    <s-count-dashboard-card title="New Credits"  :items="bankTransactions" :toSumField="toSumField" :headers="headers"></s-count-dashboard-card>
    
 
</template>
