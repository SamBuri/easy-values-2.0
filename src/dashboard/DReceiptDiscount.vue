<script setup>

import { useNewReceipts } from './UseNewRecipt';
const {headers, receipts} = useNewReceipts((r)=>r.discount>0);

const toSumField = "discount";
</script>

<template>
    <s-count-dashboard-card title="New Discount(s)" :items="receipts" :toSumField="toSumField" :headers="headers" >

    </s-count-dashboard-card>
</template>

<!-- <script>
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
</script> -->