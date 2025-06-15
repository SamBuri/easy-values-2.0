<script setup>
import roleNav from './RoleNav';
import roleController from "./RoleController";
import searchMenuController from "@/search/SearchMenuController";
const controller= roleController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= roleNav.menu;
const menuItems = []

    
</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

