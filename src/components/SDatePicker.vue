<script setup>
import funcs from "../utils/funcs";
import { ref, computed, watch } from "vue";

const props = defineProps([
  "modelValue",
  "label",
  "rules",
  "min",
  "max",
  "allowFuture",
  "disabled",
]);
const emit = defineEmits(["update:modelValue"]);

const menu = ref(false);
const location = ref("bottom");
const displayValue = ref("");

// Immediate conversion of initial value
displayValue.value = props.modelValue ? funcs.formatDate(new Date(props.modelValue)) : "";

// Watch for external modelValue changes
watch(() => props.modelValue, (newVal) => {
  const newDate = newVal ? new Date(newVal) : null;
  displayValue.value = newDate ? funcs.formatDate(newDate) : "";
}, { immediate: true });

const modelDate = computed({
  get: () => {
    if (!props.modelValue) return null;
    return typeof props.modelValue === "string" 
      ? new Date(props.modelValue) 
      : props.modelValue;
  },
  set: (newVal) => {
    if (!newVal) {
      emit("update:modelValue", null);
      displayValue.value = "";
      return;
    }
    const formatted = funcs.formatDate(newVal);
    emit("update:modelValue", formatted);
    displayValue.value = formatted;
  }
});

const minDate = computed(() => props.min || "1950-01-01");
const maxDate = computed(() => {
  if (props.max) return props.max;
  const today = new Date();
  return props.allowFuture
    ? funcs.addDays(today, 365 * 20).toISOString().substr(0, 10)
    : today.toISOString().substr(0, 10);
});

const inputRules = computed(() => props.rules || []);
</script>

<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :location="location"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ props: menuProps }">
        <v-text-field
          :model-value="displayValue"
          v-bind="menuProps"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          :rules="inputRules"
          :disabled="disabled"
        />
      </template>

      <v-date-picker
        v-model="modelDate"
        :max="maxDate"
        :min="minDate"
        :disabled="disabled"
        @update:modelValue="menu = false"
      />
    </v-menu>
  </div>
</template>
<!-- <script setup>
import funcs from "../utils/funcs";
import { ref, computed } from "vue";

const props = defineProps([
  "modelValue",
  "label",
  "rules",
  "min",
  "max",
  "allowFuture",
  "disabled",
]);
const emit = defineEmits("update:modelValue");
const menu = ref(false);
const showAdjacentMonths = ref(true);
const location = ref("bottom");
const formattedDate = ref("");

// Convert modelValue to a Date object if it's a string
const modelDate = computed(() => {
  if (typeof props.modelValue === "string") {
    return new Date(props.modelValue);
  }
  return props.modelValue;
});

const minDate = computed(() => {
  if (props.min) {
    return props.min;
  }
  return "1950-01-01";
});

const maxDate = computed(() => {
  if (props.max) {
    return props.max;
  }
  if (props.allowFuture) {
    let today = new Date();
    return funcs
      .addDays(today, 365 * 20)
      .toISOString()
      .substr(0, 10);
  }
  return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
});

const inputRules = computed(() => {
  if (props.rules) return props.rules;
  return [];
});

const formattedDateDisplay = computed(() => {
  if (modelDate.value) {
    return funcs.formatDate(modelDate.value);
  }
  return "";
});

const handleChange = (e) => {
  const formatted = funcs.formatDate(e);
  emit("update:modelValue", formatted); // Emit the formatted date instead of the Date object
  menu.value = false;
};

const formatDate = (e) => {
  return funcs.formatDate(e);
};
</script>

<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :location="location"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-model="formattedDateDisplay"
          v-bind="props"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          :rules="inputRules"
          :disabled="disabled"
        >
        </v-text-field>
      </template>

      <v-date-picker
        :max="maxDate"
        :min="minDate"
        :rules="inputRules"
        :modelValue="modelDate"
        @update:modelValue="handleChange"
        :disabled="disabled"
      >
      </v-date-picker>
    </v-menu>
  </div>
</template> -->
