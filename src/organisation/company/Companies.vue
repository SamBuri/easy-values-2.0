<script setup>
import companyNav from './CompanyNav';
import companyController from "./CompanyController";
import searchMenuController from "@/search/SearchMenuController";
const controller= companyController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= companyNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },
      { title: "Delete", icon: "mdi-delete",click:(options)=>deleteItem(options) },
      { title: "Re-post", icon: "mdi-send",click: (options)=>republish(options) },
      { title: "Reset Onboarding", icon: "mdi-refresh", click: (options)=>controller.resetOnboarding(options.item) },
    ]

    
</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

