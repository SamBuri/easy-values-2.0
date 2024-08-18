<script setup>
import lookupDataController from "./LookupdataController";
import { onMounted, computed } from "vue";
import { defineLookupObjectStore } from "../lookupobject/LookupObjectStore";

const cols = 12;
const sm = 6;
const md = 6;
const controller = lookupDataController();
const rules= controller.rules;
const model = controller.model
// const { rules, model } = lookupDataController();
const lookupObjectStore = defineLookupObjectStore();
onMounted(() => {
  lookupObjectStore.getMini();
});
</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Lookup Data</template>

    <template #form-data="{ isUpdate }">
      <v-col :cols="cols" :sm="sm" :md="md"
        ><v-autocomplete
          label="Lookup Object"
          v-model="model.lookupObject"
          :rules="rules.lookupObject"
          :counter="100"
          required
          :items="lookupObjectStore.mini"
          :loading="lookupObjectStore.miniLoading"
          item-title="objectName"
          item-value="id"
          return-object
        ></v-autocomplete> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-text-field
          label="Lookup Data Name"
          v-model="model.lookupDataName"
          :rules="rules.lookupDataName"
          :counter="100"
          required
        ></v-text-field> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-checkbox
          label="Read Only"
          v-model="model.readOnly"
        ></v-checkbox> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate"
        ><v-checkbox label="Hidden" v-model="model.hidden"></v-checkbox> </v-col
      ><v-col :cols="cols" :sm="sm" :md="md"
        ><v-checkbox label="Default" v-model="model.isDefault"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
