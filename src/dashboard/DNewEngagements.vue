<script setup>
  import engagementNav from '../sales/engagement/EngagementNav';
  import { defineEngagementStore } from '@/sales/engagement/EngagementStore';
  import { onMounted,ref } from 'vue';

  const headers =  engagementNav.menu.headers;
  const dialog = ref(false)
  const engegementStore = defineEngagementStore();


  onMounted(()=>{
    engegementStore.getNewEngagements();
  })
</script>

<template>
  <s-count-dashboard-card title="New Engagements"  :items="engegementStore.newEngagements"  :headers="headers">
  </s-count-dashboard-card>
</template>

