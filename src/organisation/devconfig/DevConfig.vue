<script setup>
import devConfigController from "./DevConfigController";
const cols = 12;
const sm = 6;
const md = 6;
const controller = devConfigController();
const isUpdate = controller.isUpdate;

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Dev Config</template>

    <template #form-data>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="devName" label="Dev Name" v-model="model.devName" :rules="rules.devName"
          :counter="10"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="dbType" label="Db Type" v-model="model.dbType" :rules="rules.dbType"
          :items="controller.organisationStore.dbTypes"
          :loading="controller.organisationStore.dbTypesLoading"></s-autocomplete>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="dbUsername" label="Db Username" v-model="model.dbUsername" :rules="rules.dbUsername"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="dbPassword" label="Db Password" v-model="model.dbPassword" :rules="rules.dbPassword"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="dbPort" label="Db Port" v-model="model.dbPort" :rules="rules.dbPort"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="dbHost" label="Db Host" v-model="model.dbHost" :rules="rules.dbHost"
          :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="dbDriverClassName" label="Db Driver Class Name" v-model="model.dbDriverClassName"
          :rules="rules.dbDriverClassName" :counter="100"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
