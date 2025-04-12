<script setup>
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore";
import { watch, onMounted, computed } from "vue";
import bankAccountNav from "@/banking/bankaccount/BankAccountNav";

const bankaccountStore = defineBankAccountStore();
const props = defineProps(["label", "rules", "modelValue", "returnsObject" ]);
const emit = defineEmits(["update:modelValue"]);

onMounted(async () => {
  await bankaccountStore.getMini();
  if (bankaccountStore.mini.length > 0 && !props.modelValue && bankaccountStore.defaultBankAccount) {
    emit("update:modelValue", bankaccountStore.defaultBankAccount.id);
  }
});

const items = computed(() => bankaccountStore.mini);

watch(items, (newValue) => {
  if (newValue.length > 0 && !props.modelValue && bankaccountStore.defaultBankAccount) {
    emit("update:modelValue", bankaccountStore.defaultBankAccount.id);
  }
});

const handleUpdate = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <s-single-select-field
    :items="items"
    :headers="bankAccountNav.menu.miniHeaders"
    :loading="bankaccountStore.miniLoading"
     display="bankAccountName"
    :label="label"
    :rules="rules"
    :modelValue="props.modelValue"
    @update:modelValue="handleUpdate"
    :returns-object="returnsObject"
  />
</template>
