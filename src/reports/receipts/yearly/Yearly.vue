<template>
    <s-periodic-report 
      :maxWidth="maxWidth" :headers="yearlyNav.headers" :model="yearlyNav.model" :title="title" :passedColumn="passedColumn">
    </s-periodic-report>
  </template>
  <script>

import yearlyNav from '../yearly/YearlyNav'
  export default {
  
    name: "Yearly",
  
    data: () => ({
      maxWidth: 1000,
      yearlyNav: yearlyNav,
      title: "Yearly Receipts",
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
  