<script setup>
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
</template>

<!-- <script setup>
import funcs from '../utils/funcs';
import { ref, computed } from 'vue';
  const props =  defineProps(["modelValue", "label", "rules", "min", "max", "allowFuture", "disabled"])
  const emit= defineEmits('update:modelValue');
  const menu =  ref(false);
  const showAdjacentMonths=ref(true)
     const location= ref("bottom");
     const formatedDate = ref('');




    const minDate=computed(() =>{
      if (props.min) {
        return props.min;
      }
      return "1950-01-01";
    });

    const maxDate=computed(() =>{
      if (props.max) {
        return props.max;
      }
      if (props.allowFuture) {
        let today = new Date();
        return funcs.addDays(today, (365 * 20)).toISOString()
          .substr(0, 10);

      }
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    });

   const inputRules= computed(()  =>{
      if (props.rules) return props.rules;
      return [];
    });

    const formattedDate= computed(()=>{
      return funcs.formatDate(props.modelValue);
    });

    const handleChange=(e)=> {
       emit('update:modelValue', e)
       menu.value = false;


    };


    const formatDate=(e)=> {
     funcs.formatDate(e);
    };

</script>

<template>
  <div class="text-center">

    <v-menu v-model="menu" :location="location" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y>
      <template v-slot:activator="{ props }">
        <v-text-field  v-model="formattedDate"
          v-bind="props" :label="label" prepend-icon="mdi-calendar" readonly :rules="inputRules" :disabled="disabled"

        >

        </v-text-field>
      </template>

    <v-date-picker :max="maxDate" :min="minDate" :rules="inputRules" :modelValue="modelValue"
      @update:modelValue="handleChange" :disabled="disabled"></v-date-picker>
    </v-menu>
  </div>
</template>





 -->
