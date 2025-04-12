<script setup>

import { useNewReceipts } from './UseNewRecipt';
const {headers, receipts} = useNewReceipts((r)=>r.changeGiven>0);

const toSumField = "changeGiven";
</script>
<template>
    <s-count-dashboard-card title="New Change(s) Given" :items="receipts" :toSumField="toSumField" :headers="headers">

    </s-count-dashboard-card>
</template>

