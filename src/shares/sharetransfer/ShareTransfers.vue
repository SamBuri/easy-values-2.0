<script setup>
import shareTransferNav from './ShareTransferNav';
import shareTransferController from "./ShareTransferController";
import searchMenuController from "@/search/SearchMenuController";
const controller= shareTransferController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= shareTransferNav.menu;
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

