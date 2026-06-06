<script setup>
import { defineLoanStore } from '@/loan/loan/LoanStore';
import { onMounted, computed } from 'vue';
const loanStore = defineLoanStore();
  onMounted(()=>{
    loanStore.getLoanSummary();
  })

  const dashboardList = computed(()=>loanStore.loanSummary.filter(l=>l.loanStatus=='Completed'));

  const headers = [
    {title: "Product Name", key: "productName", chartLabel: true},
    {title: "Total Principle" , key:"sumPrinciple",isNumeric:true, chartValue: true},
    {title: "Total Balance",  key:"sumBalance",isNumeric:true},
    {title: "Count",  key:"count",isNumeric:true, chartValue: true}
  ];

</script>
<template>
     <s-data-dashboard title="Completed Loan Summary"  :headers="headers" :data="dashboardList" chartWidth="500" chartHeight="500" chartType="pie"></s-data-dashboard>
</template>

<!-- <script>
import funcs from '../utils/funcs'
export default {
  name: 'DCompletedLoanSummary',
  props: ["title"],
  data: () => ({

    headers: [
      {title: "Product Name", key: "productName", chartLabel: true},
      {title: "Total Principle" , key:"sumPrinciple",isNumeric:true, chartValue: true},
      {title: "Total Balance",  key:"sumBalance",isNumeric:true},
      {title: "Count",  key:"count",isNumeric:true, chartValue: true}
    ]

  }),

  created() {

    this.$store.dispatch("loan/loan/getLoanSummary");
  },

  computed: {

    dashboardList() {
      return this.$store.state.loan.loan.loanSummary.filter(l=>l.loanStatus=='Completed');
    },

    count() {
      if (!this.dashboardList) return 0;
      return this.dashboardList.length;
    },

    totalLoans() {
      if (!this.dashboardList) return 0;
      return funcs.formatNumber(this.dashboardList.map((a) => a.sumBalance).map(Number).reduce((a, b) => a + b, 0));
    },


  }
};
</script> -->
