<template>
    <s-count-dashboard-card title="New Loan Bills"  :items="dashboardList"  :headers="headers" :toSumField="toSumField"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import loanBillDetailNav from '../loan/loanbilldetail/LoanBillDetailNav'
export default {
  name: 'DNewLoanBillDetails',
  props: ["title"],
  data: ()=>({
    toSumField: "amount",
    headers: loanBillDetailNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("loan/loanbilldetail/getNewLoanBillDetails");
  },

  computed: {
       
       dashboardList(){
         let lbd = this.$store.state.loan.loanbilldetail.newLoanBillDetails;
         console.log("Loan Bill Details", lbd);
         return lbd;
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