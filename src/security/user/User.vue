<script setup>
import { ref, computed } from "vue";
import userController from "./UserController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = userController();
const isUpdate = controller.isUpdate;

const groupValue = computed(() => {
  return isUpdate ? "id" : "name";
});

const model = controller.model;
const rules = controller.rules;

const password = ref('');
const showPassword = ref(false);
const strengthScore = ref(0);

const strengthColor = computed(() => {
  if (strengthScore.value < 30) return 'red';
  if (strengthScore.value < 70) return 'orange';
  return 'green';
});

const strengthMessage = computed(() => {
  if (strengthScore.value < 30) return 'Weak';
  if (strengthScore.value < 70) return 'Moderate';
  return 'Strong';
});

const checkPasswordStrength = () => {
  let score = 0;
  if (!password.value) {
    strengthScore.value = 0;
    return;
  }

  // Length check
  if (password.value.length > 8) score += 25;
  if (password.value.length > 12) score += 25;

  // Complexity checks
  if (/[A-Z]/.test(password.value)) score += 10;
  if (/[0-9]/.test(password.value)) score += 10;
  if (/[^A-Za-z0-9]/.test(password.value)) score += 10;

  // Dedupe score
  const uniqueChars = new Set(password.value.split(''));
  score += (uniqueChars.size / password.value.length) * 20;

  strengthScore.value = Math.min(100, score);

}

const confirmPasswordRules = computed(() => {
  return [
     v => !!v || 'Confirm Password is required',
    v => v === model.value.password || 'Passwords do not match',
   
  ];
});

</script><template>
  <crud-form :controller="controller">
    <template #heading>User</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="firstName" label="First Name" v-model="model.firstName" :rules="rules.firstName"
          :counter="20"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="lastName" label="Last Name" v-model="model.lastName" :rules="rules.lastName"
          :counter="20"></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="email" label="Email" v-model="model.email" :rules="rules.email" :counter="100"></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="username" label="Username" v-model="model.username" :rules="rules.username"
          :disabled="isUpdate" :counter="50"></s-text-field>
      </v-col>
  
      <v-col :cols="cols" :sm="sm" :md="md" v-if="!isUpdate">
        <s-text-field id="password" label="Password" v-model="model.password" :rules="rules.password"
          :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword" @input="checkPasswordStrength"
          :counter="100"></s-text-field>

        <!-- <v-progress-linear :model-value="strengthScore" :color="strengthColor" height="8"></v-progress-linear> -->
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-if="!isUpdate">
        <s-text-field id="confirmPassword" label="Confirm Password" v-model="model.confirmPassword"
          :rules="confirmPasswordRules" :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword" @input="checkPasswordStrength"
          :counter="100"></s-text-field>

        <!-- <v-progress-linear :model-value="strengthScore" :color="strengthColor" height="8"></v-progress-linear> -->
      </v-col>
    

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="defaultBranch" label="Default Branch" v-model="model.defaultBranch"
          :rules="rules.defaultBranchId" :items="controller.branchStore.mini"
          :loading="controller.branchStore.miniLoading" item-title="branchName" item-value="id"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete id="otherBranches" label="Other Branches" v-model="model.otherBranches"
          :rules="rules.otherBranches" :items="controller.branchStore.mini"
          :loading="controller.branchStore.miniLoading" item-title="branchName" item-value="id"
          multiple></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-autocomplete id="groups" label="Groups" v-model="model.groups" :rules="rules.groups"
          :items="controller.groupStore.mini" :loading="controller.groupStore.miniLoading" item-title="name"
          item-value="id" multiple></v-autocomplete>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-else>
        <v-autocomplete id="groups" label="Groups" v-model="model.groups" :rules="rules.groups"
          :items="controller.groupStore.mini" :loading="controller.groupStore.miniLoading" item-title="name"
          item-value="name" multiple></v-autocomplete>
      </v-col>




      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete id="requiredActions" label="Required Actions" v-model="model.requiredActions"
          :rules="rules.requiredActions" :items="controller.requiredActions" item-title="name" item-value="id"
          multiple></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="enabled" label="Enabled" v-model="model.enabled"></v-checkbox>
      </v-col>

   
    </template>
  </crud-form>
</template>
