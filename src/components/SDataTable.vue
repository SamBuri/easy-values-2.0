<script setup>
import { ref, computed } from 'vue';
import funcs from "../utils/funcs";

const props = defineProps({
  headers: Array,
  items: Array,
  loading: Boolean,
  title: String,
  hideDefaultFooter: Boolean,
  search: String,
  itemPerPage: Number
});

// Refs
const menuItems = ref([
  { title: "Add", icon: "mdi-plus" },
  { title: "Edit", icon: "mdi-pencil" },
  { title: "Delete", icon: "mdi-delete" }
]);
const menuX = ref(0);
const menuY = ref(0);
const showMenu = ref(false);
const closeOnClick = ref(true);
const selectedItem = ref({});
const alignments = ref(["start", "center", "end"]);
const dialogDelete = ref(false);
const defaultItem = ref({});

// Computed properties
const dataLoading = computed(() => props.loading || false);
const hideFooter = computed(() => props.hideDefaultFooter || false);
const pageItems = computed(() => {
  if (hideFooter.value) {
    return -1;
  } else {
    return props.itemPerPage || 20;
  }
});

const toFormatHeaders = computed(() => {
  return props.headers.filter(
    h => h.isNumeric === true || h.isDate === true || h.isDateTime === true
  );
});

const processedItems = computed(() => {
  let allItems = [...props.items];
  
  if (props.headers.filter(h => h.isNumeric).length === 0) return allItems;
  
  if (props.items.length > 1) {
    let totalRow = funcs.getTotalRow(props.headers, props.items);
    
    // Check if the last item is already the total row
    if (!allItems[allItems.length - 1]?.isTotal) {
      console.log("Executing all items", totalRow);
      allItems.push(totalRow);
    }
  }
  
  return allItems;
});

// Methods
const formatTableData = (header, item, value) => {
  return funcs.formatTableData(header, item, value);
};

const rowClass = (item) => {
  if (item.isTotal) {
    return "highlight-row";
  }
};
</script>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="processedItems"
      :loading="dataLoading"
      :hide-default-footer="hideFooter"
      :items-per-page="pageItems"
      :single-select="true"
      class="elevation-1"
      dense
      :search="search"
      :row-class="rowClass"
    >
      <template v-slot:top v-if="title">
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
      </template>

      <template
        v-for="(header, i) in toFormatHeaders"
        v-slot:[`item.${header.key}`]="{ item }"
      >
        <span :key="i"> {{ formatTableData(header, item, header.key) }} </span>
      </template>
    </v-data-table>

    <snack-bar />
  </div>
</template>

<style>
.highlight-row {
  background-color: yellow;
}
</style>
