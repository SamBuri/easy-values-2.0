<script setup>
import userController from "./UserController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = userController();

const model = controller.model;
const rules = controller.rules;
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
        <s-text-field id="username" label="Username" v-model="model.username" :rules="rules.username"
          :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="password" label="Password" v-model="model.password" :rules="rules.password"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="email" label="Email" v-model="model.email" :rules="rules.email" :counter="100"></s-text-field>
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
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete id="groups" label="Groups" v-model="model.groups" :rules="rules.groups"
          :items="controller.groupStore.mini" :loading="controller.groupStore.miniLoading" item-title="name"
          item-value="name" multiple></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-autocomplete id="requiredActions" label="Required Actions" v-model="model.requiredActions"
          :rules="rules.requiredActions" :items="controller.requiredActions"
           item-title="name" item-value="id"
          multiple></v-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="enabled" label="Enabled" v-model="model.enabled"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
