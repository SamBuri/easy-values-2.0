<script setup>
import tenantGroupController from "./TenantGroupController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = tenantGroupController();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Tenant Group</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="authUrl" label="Auth Url" v-model="model.authUrl" :rules="rules.authUrl"
          :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="realm" label="Realm" v-model="model.realm" :rules="rules.realm" :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="authClientId" label="Auth Client Id" v-model="model.authClientId"
          :rules="rules.authClientId" :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="issuerUrl" label="Issuer Url" v-model="model.issuerUrl" :rules="rules.issuerUrl"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="jwkUrl" label="Jwk Url" v-model="model.jwkUrl" :counter="100"></s-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
