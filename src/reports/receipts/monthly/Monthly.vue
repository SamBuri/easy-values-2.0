<template>
    <s-periodic-report 
      :maxWidth="maxWidth" :headers="monthlyNav.headers" :model="monthlyNav.model" :title="title" :passedColumn="passedColumn">
    </s-periodic-report>
  </template>
  <script>

import monthlyNav from '../monthly/MonthlyNav'
  export default {
  
    name: "Monthly",
  
    data: () => ({
      maxWidth: 1000,
      monthlyNav: monthlyNav,
      title: "Monthly Receipts",
      passedColumn:"amount",
      drawChart: true,
    
      
    
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
  