<template>
    <s-data-dashboard  title="Dormant Loan Summary" :headers="headers" :data="dashboardList"> </s-data-dashboard>
  </template>

<script>

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
</script>
