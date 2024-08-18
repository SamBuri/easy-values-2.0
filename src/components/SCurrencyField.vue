<script setup>
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import { watch, onMounted, computed } from "vue";

const currencyStore = defineCurrencyStore();
const props = defineProps(["label", "rules", "modelValue", "returnsObject"]);
const emit = defineEmits(["update:modelValue"]);

onMounted(async () => {
  await currencyStore.getMini();
  if (currencyStore.mini.length > 0 && !props.modelValue) {
    emit("update:modelValue", currencyStore.defaultCurrency.id);
  }
});

const items = computed(() => currencyStore.mini);

watch(items, (newValue) => {
  if (newValue.length > 0 && !props.modelValue) {
    emit("update:modelValue", currencyStore.defaultCurrency.id);
  }
});

const handleUpdate = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <s-autocomplete
    :items="items"
    :loading="currencyStore.miniLoading"
    item-title="currency"
    item-value="id"
    :label="label"
    :rules="rules"
    :modelValue="props.modelValue"
    @update:modelValue="handleUpdate"
    :returns-object="returnsObject"
  />
</template>
