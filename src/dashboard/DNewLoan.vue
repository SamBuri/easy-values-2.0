<template>
    <s-count-dashboard-card title="New Loans"  :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import loanNav from '../loan/loan/LoanNav'
export default {
  name: 'DNewLoan',
  props: ["title"],
  data: ()=>({
    toSumField: "principle",
    headers: loanNav.menu.midHeaders,
    dialog: false

  }),

  created(){
    
      this.$store.dispatch("loan/loan/getNewLoans");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.loan.loan.newLoans;
       },

     
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>