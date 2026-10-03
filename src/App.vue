<template>
  <s-main-component
    app-title="Easy Values"
    brand-title="EASY VALUES"
    brand-icon="mdi-finance"
    :nav-items="navData.tree"
    :drawer-width="300"
    :enable-simulation="false"
    footer-text="© Powered by Capidattex Consults Ltd"
    :show-footer="true"
  />
</template>

<script setup>
import navData from './nav/NavData';
</script>

<style>
/* Theme-aware alternating table row background */
.v-table .v-table__wrapper > table > tbody > tr:nth-of-type(even) {
  background-color: rgba(var(--v-theme-on-surface), 0.02);
}

.v-table .v-table__wrapper > table > tbody > tr:nth-of-type(odd) {
  background-color: rgba(var(--v-theme-on-surface), 0.04);
}

.v-table .v-table__wrapper > table > tbody > tr:hover {
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
}

.v-data-table-header th {
  font-weight: 600 !important;
}
</style>
