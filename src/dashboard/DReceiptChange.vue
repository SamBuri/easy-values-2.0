<template>
    <s-count-dashboard-card title="New Change(s) Given" :items="dashboardList" :toSumField="toSumField" :headers="headers"
    @open="open" @close="close" :dialog="dialog">

    </s-count-dashboard-card>
</template>

<script>
import receiptNav from '../sales/receipt/ReceiptNav'
export default {
  name: 'DReceiptDiscount',
  props: ["title"],
  data: ()=>({
    toSumField: "changeGiven",
    headers: receiptNav.menu.miniHeaders,
    dialog: false,

  }),

  created(){
    this.$store.dispatch("sales/receipt/getNewReceipts")
  },

  computed: {
       
       dashboardList(){
         let receipts = this.$store.state.sales.receipt.dashboardList;
         if(receipts){
          return receipts.filter(r=>r.changeGiven>0)
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