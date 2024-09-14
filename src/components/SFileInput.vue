
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: File,  // Rename `value` to `modelValue` for better integration with `v-model`
  label: String,
  disabled: Boolean,
  rules: Array,
});

const emit = defineEmits(['update:modelValue']);  // Emit an update event that `v-model` expects

const internalValue = ref(props.modelValue);
const photoUrl = ref(null);

// Watch for changes in internalValue and update photoUrl
watch(internalValue, (newFile) => {
  if (newFile) {
    photoUrl.value = URL.createObjectURL(newFile);
  } else {
    photoUrl.value = null;
  }
  emit('update:modelValue', newFile);  // Emit the updated file to the parent
});

// Sync internalValue with prop `modelValue` changes
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});
</script>

<template>
  <v-file-input
    v-model="internalValue"
    :label="label"
    prepend-icon="mdi-camera"
    show-size
    accept="image/*"
    :disabled="disabled"
    :rules="rules"
  >
    <template v-slot:selection="{ text }">
      <v-chip small label color="primary">
        {{ text }}
      </v-chip>
      <v-img
        v-if="photoUrl"
        :src="photoUrl"
        max-height="400"
        max-width="400"
      ></v-img>
    </template>
  </v-file-input>
</template>

