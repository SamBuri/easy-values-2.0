<script setup>
import permsissionController from "./PermsissionController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= permsissionController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Permission</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="name" label="Name"
          v-model="model.name"
 :rules="rules.name"
:counter="40"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="composite" label="Composite"
          v-model="model.composite"
></v-checkbox>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="clientRole" label="Client Role"
          v-model="model.clientRole"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

