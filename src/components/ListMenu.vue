<template>
  <v-list-group :value="false">
    <template v-slot:activator>
      <v-list-item-title>{{ menuname }}</v-list-item-title>
    </template>
    <template v-if="menus">
      <v-list-group
        :value="false"
        no-action
        sub-group
        v-for="([group, path], k) in menus"
        :key="k"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ group }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in submenus"
          :key="i"
          :to="{ name: path, params: { mode: i } }"
          @click="showMenu = false"
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </template>
    <template v-else>
      <v-list-item v-for="([title, icon], i) in submenus" :key="i"
      :to="{ name: path, params: { mode: i } }">
        <v-list-item-title v-text="title"></v-list-item-title>

        <v-list-item-icon>
          <v-icon v-text="icon"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </template>
  </v-list-group>
</template>

<script>
export default {
  props: { menuname: String, menus: Array, submenus: Array, path: String },
  data: () => ({}),
};
</script>