<template>
    <s-periodic-report 
      :maxWidth="maxWidth" :headers="dailyNav.headers" :model="dailyNav.model" :title="title" :passedColumn="passedColumn">
    </s-periodic-report>
  </template>
  <script>

import dailyNav from './DailyNav';
  export default {
    name: "Daily",
  
    data: () => ({
      cols: 12,
      sm: 6,
      md: 3,
      maxWidth: 1000,
      dailyNav: dailyNav,
      title: "Daily Expenses",
      passedColumn:"amount"
    
      
    
    }),
    created() {

  
    },
    computed: {
     
    },
  
    watch: {
     
    },
  
    methods: { 
       
    },
  };
  </script>
  