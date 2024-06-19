<template>
  <search :menu="menu" :menuItems ="menuItems"  @itemSelected="itemSelected"></search>
</template>
<script>
import loanBillDetailNav from './LoanBillDetailNav';export default {
  name: "LoanBillDetail",
 data: () => ({
  
     menu: loanBillDetailNav.menu,
     menuItems: [],
  
  }),

methods: {
 itemSelected(selectedItem, items) {
      switch (selectedItem) {
        case 0:
          this.saveClicked();
          break;
        case 1:
          this.editClicked(items);
          break;
        case 2:
          this.dialogDelete = true;
          break;
          case 3:
          this.republishClicked(items);
          break;
      }
    },
 },
};
</script>
