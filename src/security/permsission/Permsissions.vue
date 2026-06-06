<script setup>
import permsissionNav from './PermsissionNav';
import permsissionController from "./PermsissionController";
import { searchMenuController } from "saburi-vue-utils";
const controller= permsissionController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= permsissionNav.menu;
const menuItems = []

    
</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

