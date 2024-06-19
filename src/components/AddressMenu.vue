<template>
<list-menu-crud menuname="Address" :menus="menus" />
</template>

<script>
import ListMenuCrud from '../components/ListMenuCrud.vue'

export default {
  components: { ListMenuCrud },
  data: () => ({
      
    menus: [
      ["Country", "country"],
      ["District", "district"],
      ["Sub County", "subcounty"],
      ["Parish", "parish"],
      ["Village", "village"],
    ],
  }),

};
</script>