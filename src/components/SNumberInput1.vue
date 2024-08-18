<template>
  <v-text-field
    :label="label"
    :persistent-hint="hint"
    :modelValue="modelValue"
    @update:modelValue="handleChange"
  />
</template>

<script>
import { ref } from 'vue';
import funcs from '@/utils/funcs';
export default {
  props: {
    label: String,
    type: {
      type: String,
      default: "number",
    },
    hint: String,
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {

    const handleChange=(e)=> {
      console.log('e', e)
       emit('update:modelValue', funcs.formatNumber(e.replace(/[^0-9]/g, '')))
    };

    return {

      handleChange,
    };
  },
};
</script>

