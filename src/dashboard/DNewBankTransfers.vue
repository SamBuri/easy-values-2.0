<template>
    <s-count-dashboard-card title="New Bank Transfers"  :items="dashboardList"  :headers="headers" :toSumField="toSumField"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import bankTransfersNav from '../banking/banktransfer/BankTransferNav'
export default {
  name: 'DNewBankTransfers',
  props: ["title"],
  data: ()=>({
    toSumField: "amount",
    headers: bankTransfersNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("banking/banktransfer/getNewBankTransfers");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.banking.banktransfer.newBankTransfers;
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