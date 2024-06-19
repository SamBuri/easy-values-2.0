<template>
    <s-count-dashboard-card title="New Receipts" :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">

    </s-count-dashboard-card>
</template>

<script>
import receiptNav from '../sales/receipt/ReceiptNav'
export default {
  name: 'DReceipt',
  props: ["title"],
  data: ()=>({
    toSumField: "amountReceived",
    headers: receiptNav.menu.miniHeaders,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("sales/receipt/getNewReceipts")
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.sales.receipt.newReceipts;
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