<script setup>
import tenantController from "./TenantController";
const cols = 12;
const sm = 12;
const md = 12;
const controller = tenantController();
const isUpdate = controller.isUpdate;

const model = controller.model;
const rules = controller.rules;
</script><template>
  <crud-form :controller="controller">
    <template #heading>Tenant</template>

    <template #form-data>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-text-field id="host" label="Host" v-model="model.host" :rules="rules.host" :counter="50"></s-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-autocomplete id="tenantGroupId" label="Tenant Group" v-model="model.tenantGroupId"
          :items="controller.tenantGroupStore.mini" item-title="realm" item-value="id" :rules="rules.tenantGroupId" />
      </v-col>
    </template>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox id="disabled" label="Disabled" v-model="model.disabled" />
      </v-col>
  </crud-form>
</template>
