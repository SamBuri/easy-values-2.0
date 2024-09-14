<script setup>
import accountsGroupNav from './AccountsGroupNav';
import accountsGroupController from "./AccountsGroupController";
import searchMenuController from "@/search/SearchMenuController";
const controller= accountsGroupController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= accountsGroupNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },
      { title: "Delete", icon: "mdi-delete",click:(options)=>deleteItem(options) },
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
    ]

    
</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

