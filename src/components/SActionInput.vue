<template>

  
<v-container>
<v-row>
    <v-col cols="10" sm="10" md="10">
       <v-text-field
    :label="label"
    :rules="inputRules"
    :value="value"
    @input="handleInput($event)"
    :disabled="inputDisabled"
  ></v-text-field>
   Load
    </v-col>

       <v-col cols="2" sm="2" md="2">
      <v-btn text>
          Load
      </v-btn>
    </v-col>
</v-row>

</v-container>

</template>
 
 
<script>

export default {
  name: "SActionInput",
  props: ["value", "label", "rules", "min", "max", "disabled"],

  data: () => ({
   
  }),

  computed: {
    inputRules() {
      if (this.rules) return this.rules;
      return [];
    },
    inputDisabled() {
      if (!this.disabled) return false;
      return this.disabled;
    },
  },
  watch: {},

  methods: {
    handleInput(input) {
      this.$emit("input", input);
    },

  
  },
};
</script>