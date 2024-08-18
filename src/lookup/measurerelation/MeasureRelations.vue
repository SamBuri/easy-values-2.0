<script setup>
import measureRelationNav from './MeasureRelationNav';
import measureRelationController from "./MeasureRelationController";
import searchMenuController from "@/search/SearchMenuController";
const controller= measureRelationController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= measureRelationNav.menu;
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

