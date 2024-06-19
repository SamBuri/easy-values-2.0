<template>
  <search :menu="menu" :menuItems ="menuItems"  @itemSelected="itemSelected"></search>
</template>
<script>
import bankAccountNav from './BankAccountNav';export default {
  name: "BankAccount",
 data: () => ({
  
     menu: bankAccountNav.menu,
     menuItems: [
      { title: "Add", icon: "mdi-plus" },
      { title: "Edit", icon: "mdi-pencil" },
      { title: "Delete", icon: "mdi-delete" },
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
