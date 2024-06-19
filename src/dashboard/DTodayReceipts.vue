<template>
    <s-count-dashboard-card title="Today's Receipts" :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">

    
    </s-count-dashboard-card>
</template>

<script>
import receiptNav from '../sales/receipt/ReceiptNav'
export default {
  name: 'DTodayReceipt',
  props: ["title"],
  data: ()=>({
    toSumField: "amountReceived",
    headers: receiptNav.menu.miniHeaders,
    dialog: false,

  }),

  created(){
   this.$store.dispatch("sales/receipt/getDailyReceipts")
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.sales.receipt.dailyReceipts;
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