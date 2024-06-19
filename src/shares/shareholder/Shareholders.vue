<template>
  <search :menu="menu" :menuItems ="menuItems"  @itemSelected="itemSelected"></search>
</template>
<script>
import shareholderNav from './ShareholderNav';export default {
  name: "Shareholder",
 data: () => ({
  
     menu: shareholderNav.menu,
     menuItems: [
      { title: "Add", icon: "mdi-plus" },
      { title: "Edit", icon: "mdi-pencil" },
      { title: "Delete", icon: "mdi-delete" },
    
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
        
      }
    },
 },
};
</script>
