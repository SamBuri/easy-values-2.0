<template>
    <s-count-dashboard-card title="New Expenses"  :items="dashboardList"  :headers="headers" :toSumField="toSumField"
    @open="open" @close="close" :dialog="dialog">
    </s-count-dashboard-card>
</template>

<script>
import expenseDetailNav from '../expenses/expensedetail/ExpenseDetailNav'
export default {
  name: 'DNewExpenseDetails',
  props: ["title"],
  data: ()=>({
    toSumField: "amount",
    headers: expenseDetailNav.menu.headers,
    dialog: false,

  }),

  created(){
    
      this.$store.dispatch("expenses/expensedetail/getNewExpenseDetails");
  },

  computed: {
       
       dashboardList(){
         return this.$store.state.expenses.expensedetail.newExpenseDetails;
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