<script setup>
import itemCategoryController from "./ItemCategoryController";
import searchMenuController from "@/search/SearchMenuController";
import itemCategoryNav from "./ItemCategoryNav";
const controller= itemCategoryController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= itemCategoryNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },
      { title: "Delete", icon: "mdi-delete",click:(options)=>deleteItem(options) },
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
    ]
</script>

<template>
  <search :menu="menu" :menuItems ="menuItems"  @itemSelected="itemSelected"></search>
</template>
<!-- <script>
import itemCategoryNav from './ItemCategoryNav';export default {
  name: "ItemCategory",
 data: () => ({

     menu: itemCategoryNav.menu,
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
</script> -->
