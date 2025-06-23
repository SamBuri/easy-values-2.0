<script setup>

import resetPasswordController from "./ResetPasswordController";
const cols = 12;
const sm = 12;
const md = 12;
const controller = resetPasswordController();

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Reset Password</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-select-field id="userId" label="User Id" v-model="model.userId" :rules="rules.userId" :counter="100"
          @ok="controller.userIdOk" :items="controller.userStore.mini"
          :headers="controller.userNav.menu.miniHeaders"></s-select-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="name" label="Name" v-model="model.name" disabled :rules="rules.name"
          :counter="100"></s-text-field>
      </v-col>
      
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-password-field id="value" label="Password" v-model="model.value" :username="model.username" :email="model.email"
          :counter="100"></s-password-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox id="temporary" label="Temporary" v-model="model.temporary"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
