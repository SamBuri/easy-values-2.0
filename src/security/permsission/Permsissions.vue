<script setup>
import permsissionNav from './PermsissionNav';
import permsissionController from "./PermsissionController";
import searchMenuController from "@/search/SearchMenuController";
const controller= permsissionController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= permsissionNav.menu;
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

