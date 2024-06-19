<template>
 <v-card color="transparent">
     <v-card-title>{{title}}</v-card-title>
     <v-card-text class="font-size"><slot name="text"></slot></v-card-text>
 </v-card>

</template>

<script>
export default {
  name: 'SDashboardCard',
  props: ["title"],
  methods: {
    
    viewClicked() {
            this.$store.commit("search/miniSelected", { path: "", headers: this.headers, name: "", });
            this.$store.commit("search/miniData", this.dueToday);
            this.$store.commit("search/miniDialog", true);
        },
  }
};
</script>