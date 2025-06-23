<template>
  <s-text-field 
    :id="id" 
    :label="label" 
    :model-value="modelValue"
    :rules="effectiveRules"
    :type="showPassword ? 'text' : 'password'" 
    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
    @click:append-inner="togglePasswordVisibility"
    @update:model-value="updateValue"
    :counter="counter"
  ></s-text-field>

  <v-progress-linear 
    v-if="showStrengthMeter"
    :model-value="strengthScore" 
    :color="strengthColor" 
    height="8"
  ></v-progress-linear>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: 'password'
  },
  label: {
    type: String,
    default: 'Password'
  },
  modelValue: {
    type: String,
    default: ''
  },
  rules: {
    type: Array,
    default: () => []
  },
  username: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  counter: {
    type: [Boolean, Number],
    default: 100
  },
  showStrengthMeter: {
    type: Boolean,
    default: false
  },
  defaultRules: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)
const strengthScore = ref(0)
const strengthColor = ref('red')

const defaultRules = computed(() => [
  (v) => !!v || 'Password is required',
  (v) => (v && v.length >= 8) || `${props.label} must be at least 8 characters`,
  (v) => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase letter',
  (v) => /[a-z]/.test(v) || 'Must contain at least 1 lowercase letter',
  (v) => /\d/.test(v) || 'Must contain at least 1 number',
  (v) => /[!@#$%^&*(),.?":{}|<>]/.test(v) || 'Must contain at least 1 special character',
  (v) => !props.username || v !== props.username || 'Cannot be the same as your username',
  (v) => !props.email || v !== props.email || 'Cannot be the same as your email'
])

const effectiveRules = computed(() => {
  // If rules prop is provided (non-empty array), use it exclusively
  if (props.rules && props.rules.length > 0) {
    return props.rules
  }
  // Otherwise, use default rules if defaultRules is true
  return props.defaultRules ? defaultRules.value : []
})

const updateValue = (value) => {
  emit('update:modelValue', value)
  if (props.showStrengthMeter) {
    checkPasswordStrength(value)
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const checkPasswordStrength = (password) => {
  let score = 0
  
  if (password?.length >= 8) score += 1
  if (password?.length >= 12) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[a-z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  
  strengthScore.value = (score / 6) * 100
  
  if (score <= 2) strengthColor.value = 'red'
  else if (score <= 4) strengthColor.value = 'orange'
  else strengthColor.value = 'green'
}
</script>