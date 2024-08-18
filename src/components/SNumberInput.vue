<template>
  <v-text-field
    :label="label"
    v-model="displayValue"
    @blur="formatValue"
    @focus="unformatValue"
    :rules="rules"
    :required="required"
  ></v-text-field>
</template>

<script>
import { ref, watch } from "vue";
export default {

  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    rules: {
      type: Array,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const displayValue = ref("");

    const formatNumber = (num) => {
      if(!num)return 0;
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const unformatNumber = (str) => {
      return str?str.replace(/,/g, ""):0;
    };

    const formatValue = () => {
      displayValue.value = formatNumber(props.modelValue);
    };

    const unformatValue = () => {
      displayValue.value = props.modelValue.toString();
    };

    watch(displayValue, (newValue) => {
      const unformatted = unformatNumber(newValue);
      const numericValue = isNaN(unformatted) ? 0 : parseFloat(unformatted);
      emit("update:modelValue", numericValue);
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        displayValue.value = formatNumber(newValue);
      },
      { immediate: true }
    );

    return {
      displayValue,
      formatValue,
      unformatValue,
    };
  }
  };


</script>
