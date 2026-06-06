<template>
<div>
  <div v-if="menus">
      <list-menu :menuname="menuname" :menus="menus" :submenus="cruds"/>
      </div>
      <div v-else>
          <list-menu :menuname="menuname" :path="path" :submenus="cruds"/>
      </div>
</div>
</template>

<script>
import cruds from "../utils/MenuOptions";

export default {
  props:{menuname: String, menus: Array,  path: String},
    data: () => ({
    cruds,
  }),

};
</script>