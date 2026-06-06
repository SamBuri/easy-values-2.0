<script setup>
import invoiceNav from './InvoiceNav';
import invoiceController from "./InvoiceController";
import { searchMenuController } from "saburi-vue-utils";
const controller= invoiceController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= invoiceNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
    ]

    
</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

