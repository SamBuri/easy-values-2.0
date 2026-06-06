<script setup>
import creditorNav from './CreditorNav';
import creditorController from "./CreditorController";
import { searchMenuController } from "saburi-vue-utils";
const controller= creditorController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= creditorNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },

    ]


</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

