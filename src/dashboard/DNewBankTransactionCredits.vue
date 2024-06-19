<template>
    <s-count-dashboard-card title="New Credits"  :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import bankTransactionNav from '../banking/banktransaction/BankTransactionNav'
export default {
  name: 'DNewBankTransactionDebits',
  props: ["title"],
  data: ()=>({
    toSumField: "amount",
    headers: bankTransactionNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("banking/banktransaction/getNewCredits");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.banking.banktransaction.newCredits;
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