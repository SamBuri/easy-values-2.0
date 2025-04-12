<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(['update:modelValue', 'ok', 'clear']);
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
  // For multiple selection, we need to add the new item to the existing selections
  const currentValue = Array.isArray(props.modelValue) ? props.modelValue : [];
  
  // Check if the item is already selected
  if (!currentValue.includes(data.id)) {
    const newValue = [...currentValue, data.id];
    handleChange(newValue);
    emit('ok', data);
  }
  
  dialog.value = false;
};

watch(() => props.modelValue, (v) => {
  if (Array.isArray(v)) {
    const selectedItems = props.items.filter(it => v.includes(it.id));
    selectedItems.forEach(item => emit('ok', item));
  } else {
    let data = props.items.filter(it => it.id === v);
    if (data.length > 0) emit('ok', data[0]);
  }
});
</script>

<template>
  <div>
    <s-autocomplete 
      :label="label" 
      :items="items" 
      item-value="id" 
      item-title="display" 
      :persistent-hint="hint"
      :modelValue="modelValue" 
      :rules="rules" 
      append-icon="mdi-view-list" 
      @update:modelValue="handleChange"
      @click:append="open" 
      multiple 
      chips
      closable-chips
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
<!-- <script setup>
import { ref, watch } from "vue";
const emit = defineEmits(['update:modelValue', 'ok', 'clear']);
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
  handleChange(data.id);
  emit('ok', data)
  dialog.value = false;
};

watch(() => props.modelValue, (v) => {

  let data = props.items.filter(it => it.id === v);
  if (!data.isEmpty()) emit('ok', data[0])
});
</script>
<template>
  <div>

    <s-autocomplete :label="label" :items="items" item-value="id" item-title="display" :persistent-hint="hint"
      :modelValue="modelValue" :rules="rules" append-icon="mdi-view-list" @update:modelValue="handleChange"
      @click:append="open" multiple />
    <v-dialog v-model="dialog" :persistent="true" :max-with="600">
      <search-mini :mtdsProvided="true" @ok="dialogOk" @close="close" :items="items" :headers="headers" />
    </v-dialog>
  </div>
</template> -->
