<template>
  <v-file-input
    :label="label"
    prepend-icon="mdi-camera"
    show-size
    accept="image/*"
    :value="value"
    @input="handleInput($event)"
    @change="onPhotoFileChange"
    :disabled="disabled"
    :rules="rules"
  >
    <template v-slot:selection="{ text }">
      <v-chip small label color="primary">
        {{ text }}
      </v-chip>
      <v-img
        max-height="200"
        max-width="200"
        v-if="photoUrl"
        :src="photoUrl"
      ></v-img>
    </template>
    ></v-file-input
  >
</template>

<script>

export default {
  name: "SFileInput",
  props: ["value", "label", "disabled", "rules"],
  data: () => ({
    photoUrl: null,
  }),
  computed: {
   
  },
  watch: {
    value(){
      console.log("Value", this.value);
      if (this.value) {
        this.photoUrl = URL.createObjectURL(this.value);
      } else {
        this.photoUrl = null;
      
      }
  },
  
  },
  methods: {
    onPhotoFileChange(e) {
      this.$emit("input", e);
    },
    handleInput(value){
      this.$emit("input", value);
    },
    
   
  },
};
</script>