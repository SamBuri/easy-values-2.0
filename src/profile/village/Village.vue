<script setup>
import villageController from "./VillageController";
const cols = 12;
const sm = 6;
 const md = 6;
const controller= villageController();

const model =  controller.model;
const rules= controller.rules;
</script><template>
  <crud-form
    :controller="controller"
>
    <template #heading>Village</template>

    <template #form-data>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="countryId" label="Country"
          v-model="model.countryId"
 :rules="rules.countryId"
:items="controller.countryStore.mini"
:loading="controller.countryStore.miniLoading"
item-title="countryName"
          item-value="id"
          ></s-autocomplete>
</v-col>
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
<s-autocomplete id="subCountyId" label="Sub County"
          v-model="model.subCountyId"
 :rules="rules.subCountyId"
:items="controller.subCountyStore.mini"
:loading="controller.subCountyStore.miniLoading"
item-title="subCountyName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-autocomplete id="parishId" label="Parish"
          v-model="model.parishId"
 :rules="rules.parishId"
:items="controller.parishStore.mini"
:loading="controller.parishStore.miniLoading"
item-title="parishName"
          item-value="id"
          ></s-autocomplete>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-text-field
 id="villageName" label="Village Name"
          v-model="model.villageName"
 :rules="rules.villageName"
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

