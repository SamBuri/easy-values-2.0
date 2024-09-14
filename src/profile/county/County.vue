<script setup>
import countyController from "./CountyController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= countyController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>County</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="districtId" label="District"
          v-model="model.districtId"
 :rules="rules.districtId"
:items="controller.districtStore.mini"
:loading="controller.districtStore.miniLoading"
item-title="districtName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="countyName" label="County Name"
          v-model="model.countyName"
 :rules="rules.countyName"
:counter="100"
></s-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-checkbox id="hidden" label="Hidden"
          v-model="model.hidden"
></v-checkbox>
</v-col>
    </template>
  </crud-form>
</template>

