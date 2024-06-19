<template>
    <s-count-dashboard-card title="New Discount(s)" :items="dashboardList" :toSumField="toSumField" :headers="headers"  @open="open" @close="close" :dialog="dialog">

    </s-count-dashboard-card>
</template>

<script>
import receiptNav from '../sales/receipt/ReceiptNav'
export default {
  name: 'DReceiptDiscount',
  props: ["title"],
  data: ()=>({
    toSumField: "discount",
    headers: receiptNav.menu.miniHeaders,
    dialog: false

  }),

  created(){
    
    this.$store.dispatch("sales/receipt/getNewReceipts")
  },

  computed: {
       
       dashboardList(){
         let receipts = this.$store.state.sales.receipt.newReceipts;
         if(receipts){
          return receipts.filter(r=>r.discount>0)
         }
         return [];
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