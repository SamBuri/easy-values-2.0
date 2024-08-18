<script setup>
import bankTransactionNav from './BankTransactionNav';
import bankTransactionController from "./BankTransactionController";
import searchMenuController from "@/search/SearchMenuController";
const controller= bankTransactionController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= bankTransactionNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
    ]


</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

