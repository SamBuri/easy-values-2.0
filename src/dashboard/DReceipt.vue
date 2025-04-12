<script setup>

import { useNewReceipts } from './UseNewRecipt';
const {headers, receipts} = useNewReceipts((r)=>true);

const toSumField = "amountReceived";
</script>
<template>
    <s-count-dashboard-card title="New Receipts" :items="receipts" :toSumField="toSumField" :headers="headers">

    </s-count-dashboard-card>
</template>
