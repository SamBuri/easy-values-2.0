<template>
  <v-text-field :label="label" :rules="inputRules" :value="formatNumber(value)" @keypress="isNumber($event)"
    @input="handleInput($event)" :disabled="inputDisabled"></v-text-field>
</template>
 
 
<script>
import funcs from "../utils/funcs";
export default {
  name: "SNumberInput",
  props: ["value", "label", "rules", "min", "max", "disabled"],

  data: () => ({
    menu: false,
    // number: 0,
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
      if (input)
        input = input.replace(/[,]/g, "");
      this.$emit("input", input);
    },

    formatNumber(n) {
      if (n == 0) return 0;
      return funcs.formatNumber(n);
    },

    isNumber(event) {
      if (!/\d/.test(event.key) && (event.key !== "." || /\./.test(this.value)))
        return event.preventDefault();
    },
  },
};
</script>