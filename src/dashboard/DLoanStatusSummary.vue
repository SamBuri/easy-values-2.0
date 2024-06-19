<template>
    <s-data-dashboard  title="Loan Status" :headers="headers" :data="dashboardList" chartWidth="400" chartHeight="400"> </s-data-dashboard>
  </template>

  <script>

  export default {
    name: 'DLoanStatusSummary',
    props: ["title"],
    data: () => ({

      headers: [
        {title: "Loan Status", key: "loanStatus", chartLabel:true},
        {title: "Total Principle" , key:"principle",isNumeric:true, chartValue: true},
        {title: "Total Balance",  key:"balance",isNumeric:true,  chartValue: true},
        {title: "Count",  key:"count",isNumeric:true,  chartValue: true}
      ]

    }),

    created() {

      this.$store.dispatch("loan/loan/getLoanStatusSummary");
    },

    computed: {

      dashboardList() {
        return this.$store.state.loan.loan.loanStatusSummary;
      },




    }
  };
  </script>
