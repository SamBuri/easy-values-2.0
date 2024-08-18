<script setup>
import customerSponsorNav from './CustomerSponsorNav';
import customerSponsorController from "./CustomerSponsorController";
import searchMenuController from "@/search/SearchMenuController";
const controller= customerSponsorController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= customerSponsorNav.menu;
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

