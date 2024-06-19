<template>
  <div class="text-center">
    <v-menu
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-link
          dark
          v-bind="attrs"
          v-on="on"
          text
        >
          {{menuname}} <v-icon>mdi-menu-down</v-icon>
        </v-link>
      </template>

      <!-- <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
      <slot/>
    
    </v-menu>
  </div>
</template>

<script>
  export default {
      props:{menuname: String, items: Array},
    data: () => ({
      // offset: true,
    }),
  }
</script>