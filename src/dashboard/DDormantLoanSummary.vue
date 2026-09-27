<script setup>
 import { defineLoanStore } from '@/loan/loan/LoanStore';
 import { onMounted, computed } from 'vue';
 const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanSummary();
  })

  const dashboardList = computed(()=>loanStore.loanSummary.filter(l=>l.loanStatus=='Dormant'));

  const headers = [
    {title: "Product Name", key: "productName", chartLabel: true, width: "35%"},
    {title: "Principle", key: "sumPrinciple", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Balance", key: "sumBalance", isNumeric: true, chartValue: true, width: "26%"},
    {title: "Count", key: "count", isNumeric: true, chartValue: true, width: "13%"}
  ];
</script>
<template>
  <s-data-dashboard title="Dormant Loan Summary" :headers="headers" :data="dashboardList" chartType="bar" :tableCols="6" :chartCols="6" />
</template>

<!-- <script>

export default {
  name: 'DDormantLoanSummary',
  props: ["title"],
  data: () => ({

    headers: [
    { text: "Product Name", key: "productName", chartLabel: true },
    { text: "Total Principle", key: "sumPrinciple", isNumeric: true, chartValue: true },
    { text: "Total Balance", key: "sumBalance", isNumeric: true, chartValue: true },
    { text: "Count", key: "count", isNumeric: true, chartValue: true }
    ],


  }),

  created() {

    this.$store.dispatch("loan/loan/getLoanSummary");
  },

  computed: {

    dashboardList() {
      return this.$store.state.loan.loan.loanSummary.filter(l => l.loanStatus == 'Dormant');
    },


  }
};
</script> -->
