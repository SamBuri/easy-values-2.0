<script setup>
import { computed, watch, ref } from "vue";
import searchController from "./SearchController";
import searchModel from "./SearchModel";
const props = defineProps(["headers"]);

const cols = 12;
const sm = 6;
const md = 3;
const {
  searchOptions,
  searchCriterion,
  searchOperators,
  searchOperations,
  isBetween,
} = searchController();

const searchCriteriaHeaders = searchModel.searchCriteriaHeaders;

const someAdded = computed(() => searchOptions.value.searchCriteria.length > 0);

const deleteItem = (item) =>
  (searchOptions.value.searchCriteria =
    searchOptions.value.searchCriteria.filter((it) => it !== item));

const addCriterion = () => {
  let searchCriterionCopy = Object.assign({}, searchCriterion.value);

  if (searchCriterionCopy.key && searchCriterionCopy.value) {
    searchOptions.value.searchCriteria.push(searchCriterionCopy);
  }
};
</script>

<template>
  <v-card class="mx-auto mt-2 pa-1">
    <v-toolbar flat>
      <v-card-title> Set Search Criteria </v-card-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" @submit="(e) => e.preventDefault">
        <v-container>
          <v-row>
            <v-col :cols="cols" :sm="sm" :md="md" v-if="someAdded">
              <v-autocomplete
                label="Join"
                :items="searchOperators"
                v-model="searchCriterion.operator"
              >
              </v-autocomplete>
            </v-col>

            <v-col :cols="cols" :sm="sm" :md="md">
              <v-autocomplete
                label="Column"
                :items="headers"
                v-model="searchCriterion.column"
                item-title="title"
                item-value="key"
                return-object
                single-line
                hide-details
              >
              </v-autocomplete>
            </v-col>
            <v-col :cols="cols" :sm="sm" :md="md">
              <v-autocomplete
                label="Search By"
                v-model="searchCriterion.operationObj"
                :items="searchOperations"
                item-title="text"
                item-value="value"
                return-object
                single-line
                hide-details
              >
              </v-autocomplete>
            </v-col>
            <v-col>
              <v-text-field
                v-model="searchCriterion.value"
                append-icon="mdi-plus-circle"
                label="Value"
                v-on:keyup.enter="addCriterion"
                single-line
                hide-details
                density="compact"
              >
              </v-text-field>
            </v-col>
            <v-col v-if="isBetween" :cols="cols" :sm="sm" :md="md">
              <v-text-field
                v-model="searchCriterion.value2"
                append-icon="mdi-plus-circle"
                label="Value 2"
                v-on:keyup.enter="addCriterion"
                single-line
                hide-details
                density="compact"
              >
              </v-text-field>
            </v-col>

            <v-col :cols="cols" :sm="sm" :md="md">
              <v-btn color="primary" @click="addCriterion()" text> Add </v-btn>
            </v-col>
            <v-col :cols="cols" :sm="cols" :md="cols">
              <v-data-table
                :headers="searchCriteriaHeaders"
                :items="searchOptions.searchCriteria"
                class="elevation-1"
                fixed-header
                height="200px"
                dense
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <slot name="card-actions">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="primary"
          text
          @click="$emit('done', searchController.searchOptions)"
        >
          Done
        </v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>
