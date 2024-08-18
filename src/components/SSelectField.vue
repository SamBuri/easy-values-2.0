<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(['update:modelValue','ok','clear' ]);
const props = defineProps([
  "hint",
  "label",
  "modelValue",
  "rules",
  "items",
  "headers",
]);

const handleChange = (e) => {
  emit("update:modelValue", e);
};

const dialog = ref(false);
const open = () => dialog.value = true;
const close = () => dialog.value = false;
const dialogOk = (data) => {
  emit('ok', data)
  dialog.value = false;
};

watch(()=>props.modelValue, (v)=>{

  let data = props.items.filter(it=>it.id===v);
  if(!data.isEmpty())emit('ok', data[0])
});
</script>
<template>
  <div>
    <v-text-field
      :label="label"
      :persistent-hint="hint"
      :modelValue="modelValue"
      :rules="rules"
      append-icon="mdi-view-list"
      @update:modelValue="handleChange"
      @click:append="open"
    />
    <v-dialog v-model="dialog" :persistent="true" :max-with="600">
      <search-mini
        :mtdsProvided="true"
        @ok="dialogOk"
        @close="close"
        :items="items"
        :headers="headers"
      />
    </v-dialog>
  </div>
</template>
