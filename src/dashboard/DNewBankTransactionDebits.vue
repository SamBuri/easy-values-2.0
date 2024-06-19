<template>
    <s-count-dashboard-card title="New Debits"  :items="dashboardList" :toSumField="toSumField" :headers="headers"
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
    dialog: false

  }),

  created(){
    
      this.$store.dispatch("banking/banktransaction/getNewDebits");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.banking.banktransaction.newDebits;
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