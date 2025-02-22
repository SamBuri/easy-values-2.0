<script setup>
import { onMounted } from "vue";
import ledgerNav from './LedgerNav'
import creditorNav from "../creditor/CreditorNav";
import { defineCreditorStore } from "../creditor/CreditorStore";
const creditorStore =  defineCreditorStore();

onMounted(() => {
  creditorStore.getMini();
});
</script>

<template>
  <s-ledger :passedData="ledgerNav"
    :accountItems="creditorStore.mini"
    :accountHeaders = creditorNav.menu.miniHeaders>
  </s-ledger>
</template>
