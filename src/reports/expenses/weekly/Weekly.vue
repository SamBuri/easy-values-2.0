<template>
    <s-periodic-report 
      :maxWidth="maxWidth" :headers="weeklyNav.headers" :model="weeklyNav.model" :title="title" :passedColumn="passedColumn">
    </s-periodic-report>
  </template>
  <script>

import weeklyNav from './WeeklyNav';
  export default {
  
    name: "weekly",
  
    data: () => ({
      maxWidth: 1000,
      weeklyNav: weeklyNav,
      title: "Weekly Expenses",
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
  