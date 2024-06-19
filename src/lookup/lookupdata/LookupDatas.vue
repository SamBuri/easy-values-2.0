<template>
  <search
    :menu="menu"
    :menuItems="menuItems"
    @itemSelected="itemSelected"
  ></search>
</template>
<script setup>
import lookupDataNav from "./LookupDataNav";
import lookupDataController from "./LookupdataController";
import searchMenuController from "@/search/SearchMenuController";
const controller= lookupDataController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= lookupDataNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },
      { title: "Delete", icon: "mdi-delete",click:(options)=>deleteItem(options) },
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
    ]

    const selectedItem= (item)=>{

    }
</script>
<!-- <script>
import lookupDataNav from "./LookupDataNav";
export default {
  name: "LookupData",
  data: () => ({
    menu: lookupDataNav.menu,
    menuItems: [
      { title: "Add", icon: "mdi-plus",},
      { title: "Edit", icon: "mdi-pencil", },
      { title: "Delete", icon: "mdi-delete", },
      { title: "Re-post", icon: "mdi-send", },
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
