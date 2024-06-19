<template>
  <div class="text-center">
    <v-chip
      v-if="chip"
      class="ma-2"
      close
      :color="color"
      @click:close="chip = false"
      rounded="pill"
    > 
      {{ message }}
     
    </v-chip>
  </div>
</template>

<script>
export default {
  // props: {color: String, message: String},
  data() {
    return {
       chip: true,
    };
  },

  computed: {
    snackModel() {
      return this.model;
    },
    results() {
      return this.$store.state.results;
    },
    success() {
      return this.results ? this.results.success : true;
    },
    message() {
      return this.results ? this.results.message : "No Message yet";
    },

    color() {
      return this.success ? "blue" : "red";
    },

    
    
  },
  watch:{
    results() {
     if(this.results){
       this.chip = this.results.show;
     }
    },
  }
};
</script>