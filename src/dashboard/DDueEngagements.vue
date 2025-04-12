<script setup>
  import engagementNav from '../sales/engagement/EngagementNav';
  import { defineEngagementStore } from '@/sales/engagement/EngagementStore';
  import { onMounted } from 'vue';

  const headers =  engagementNav.menu.headers;
  const engegementStore = defineEngagementStore();

 

  onMounted(()=>{
    engegementStore.getDueEngagements();
  })
</script>
<template>
    <s-count-dashboard-card title="Due Engagements"  :items="engegementStore.dueEngagements"  :headers="headers"/>
   
</template>
