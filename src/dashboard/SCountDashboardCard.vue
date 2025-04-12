

<template>
  <v-card color="transparent">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <h2>
        <p>Count: <v-chip :color="color" @click="open">{{ count }}</v-chip></p>
      </h2>
      <h2>
        <p v-if="showSum">
          Value: <v-chip>{{ amount }}</v-chip>
        </p>
      </h2>
      <v-dialog v-model="model" :persistent="true" :max-width="1300">
        <search-mini :mtdsProvided="true" @ok="close" @close="close" :items="items" :headers="headers" />
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import funcs from '../utils/funcs';

// Props
const props = defineProps({
  title: String,
  items: Array,
  toSumField: String,
  headers: Array,
});

// Reactive state
const model = ref(false);

// Computed properties
const count = computed(() => {
  if (!props.items) return 0;
  return props.items.length;
});

const amount = computed(() => {
  if (!props.items || !props.toSumField) return 0;
  return funcs.formatNumber(
    props.items
      .filter(a => a[props.toSumField] >= 0)
      .map(a => a[props.toSumField])
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
});

const createDialog = computed(() => {
  return props.headers && count.value > 0;
});

const color = computed(() => {
  return createDialog.value ? 'primary' : '';
});

const showSum = computed(() => {
  return props.toSumField && props.toSumField.length > 0;
});

// Methods
const open = () => {
  if (props.items.length > 0) {
    model.value = true;
  }
};

const close = () => {
  model.value = false;
};
</script>