<script setup>
import subCountyController from "./SubCountyController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= subCountyController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Sub County</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="countyId" label="County"
          v-model="model.countyId"
 :rules="rules.countyId"
:items="controller.countyStore.mini"
:loading="controller.countyStore.miniLoading"
item-title="countyName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="subCountyName" label="Sub County Name"
          v-model="model.subCountyName"
 :rules="rules.subCountyName"
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

