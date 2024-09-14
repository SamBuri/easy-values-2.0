<script setup>
import loanTransitionNav from './LoanTransitionNav';
import loanTransitionController from "./LoanTransitionController";
import searchMenuController from "@/search/SearchMenuController";
const controller= loanTransitionController();
const {save, edit, deleteItem, republish}=searchMenuController(controller)
const menu= loanTransitionNav.menu;
const menuItems = [
      { title: "Add", icon: "mdi-plus", click: (options)=>save(options)},
      { title: "Edit", icon: "mdi-pencil",click: (options)=>edit(options) },

    ]


</script>
<template>
  <search :menu="menu" :menuItems ="menuItems"></search>
</template>

