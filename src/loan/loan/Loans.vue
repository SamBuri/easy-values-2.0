<template>
  <search :menu="menu" :menuItems ="menuItems"  @itemSelected="itemSelected"></search>
</template>
<script>
import loanNav from './LoanNav';export default {
  name: "Loan",
 data: () => ({
  
     menu: loanNav.menu,
     menuItems: [
      { title: "Add", icon: "mdi-plus" },
     { title: "Re-post", icon: "mdi-send" },
    ],
  
  }),

methods: {
 itemSelected(selectedItem, items) {
      switch (selectedItem) {
        case 0:
          this.saveClicked();
          break;
          
          case 1:
          this.republishClicked(items);
          break;
      }
    },
 },
};
</script>
