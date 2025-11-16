<script setup>
import realmAccessController from "./RealmAccessController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = realmAccessController();

const model = controller.model;
const rules = controller.rules;
const isUpdate = controller.isUpdate;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Realm Access</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="url" label="Url" v-model="model.url" :rules="rules.url" :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="authUrl" label="Auth Url" v-model="model.authUrl" :rules="rules.authUrl"
          :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="realm" label="Realm" v-model="model.realm" :rules="rules.realm" :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="issuerUrl" label="Issuer Url" v-model="model.issuerUrl" :rules="rules.issuerUrl"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="jwkUrl" label="Jwk Url" v-model="model.jwkUrl" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="implicitClientId" label="Implicit Client Id" v-model="model.implicitClientId"
          :rules="rules.implicitClientId" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-textarea id="implicitClientSecret" label="Implicit Client Secret" v-model="model.implicitClientSecret"
          :rules="rules.implicitClientSecret" :counter="200" rows="1" auto-grow></s-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
