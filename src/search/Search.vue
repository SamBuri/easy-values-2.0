<script setup>
import { onMounted } from "vue";
import SnackBar from "../components/SnackBar.vue";
import searchController from "./SearchController";
import SearchCriteria from "./SearchCriteria.vue";

const props = defineProps(["menu", "menuItems"]);
const emit = defineEmits(["itemSelected"]);

const {
  headers,
  data,
  title,
  width,
  page,
  isBetween,
  formatTableData,
  searchCriterion,
  onRowContextmenu,
  showMenu,
  menuX,
  menuY,
  aggregates,
  showAggregateValue,
  aggregateValue,
  aggregate,
  searchCriteriaDialog,
  openSearchCriteriaDialog,
  closeSearchCriteriaDialog,
  searchCriteriaDialogDone,
  mounted,
  deleteDialog,
  deleteItemConfirm,
  closeDelete,
  searchData,
  toFormatHeaders,
  searchOptions,
  searchStore,
  searchOperations,
  additionalFilters,
  hasNumericHeaders,
  numericHeaders,
  numericHeader,
  editDialog,openEditDialog, closeEditDialog,
  currentItem, contextMenuOption,
  mode,
  buttonLabel,
} = searchController(props.menu, props.menuItems);



onMounted(
  () =>{ mounted()
  // openEditDialog();
  }
  );
</script>


<template>
  <div>
    <v-data-table-server
      :headers="headers"
      :items="data"
      :loading="searchStore.loading"
      :server-items-length="searchStore.numberOfElements"
      :single-select="true"
      @contextmenu:row="onRowContextmenu"
      class="elevation-1"
      fixed-header
      hide-default-footer
      height="520px"
      dense

    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-divider inset vertical></v-divider>
          <v-container>
            <v-row>
              <v-col> </v-col>
              <v-col>
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
              <v-col>
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
                  append-icon="mdi-magnify"
                  label="Value"
                  v-on:keyup.enter="searchData"
                  single-line
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col v-if="isBetween">
                <v-text-field
                  v-model="searchCriterion.value2"
                  append-icon="mdi-magnify"
                  label="Value 2"
                  v-on:keyup.enter="searchData"
                  single-line
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-toolbar flat>
                  <template v-if="additionalFilters > 0">
                    +{{ additionalFilters }}
                  </template>
                  <v-icon @click="openSearchCriteriaDialog">
                    mdi-unfold-more-vertical
                  </v-icon>
                </v-toolbar>
              </v-col>
            </v-row>
          </v-container>

          <v-dialog v-model="deleteDialog" :max-width="500">
            <s-confirm-dialog
              message="Confirm Delete"
              @confirm="deleteItemConfirm"
              @cancel="closeDelete"
              @searchData="searchData"
            />
          </v-dialog>

          <v-dialog
            v-model="editDialog"
            :max-width="width"
            persistent
          >
            <component v-bind:is="menu.component"  :dialog="editDialog" :buttonLabel="buttonLabel" @cancel="closeEditDialog" />
          </v-dialog>

          <v-dialog v-model="searchCriteriaDialog" :max-width="1000">
            <search-criteria
              @close="closeSearchCriteriaDialog"
              @done="searchCriteriaDialogDone"
              :headers="headers"
            />
          </v-dialog>
        </v-toolbar>
      </template>

      <template
        v-for="(header, i) in toFormatHeaders"
        v-slot:[`item.${header.key}`]="{ item }"
      >
        <span :key="i"> {{ formatTableData(header, item, header.key) }} </span>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="saveClicked()"> Add </v-btn>
      </template>

      <template #bottom></template>
    </v-data-table-server>

    <v-menu
      v-model="showMenu"
      :style="{ top: `${menuY}px`, left: `${menuX}px`, position: 'absolute' }"
    >
      <v-list nav dense>
        <!-- <v-list-item-group v-model="selectedItem" color="primary" return-object> -->
          <v-list-item v-for="(item, i) in menuItems" :key="i" @click="item.click(contextMenuOption)">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-title>
          </v-list-item>
        <!-- </v-list-item-group> -->
      </v-list>
    </v-menu>

    <snack-bar />

    <div class="mt-1">
      <v-toolbar class="mt-1 pt-1" small>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="2" sm="2">
                <v-text-field
                  v-model="searchOptions.pageSize"
                  v-on:keyup.enter="searchData"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" sm="6">
                <v-pagination
                  color="primary"
                  v-model="page"
                  :length="searchStore.totalPages"
                  :total-visible="6"
                ></v-pagination>
              </v-col>
              <v-col
                class="subheading primary--text text-darken-1 mt-3 small font-weight-medium"
                cols="12"
                md="3"
                sm="3"
              >
                <v-toolbar flat>
                  {{ searchStore.numberOfElements }} of:
                  {{ searchStore.totalElements }}
                  <export-excel
                    :data="data"
                    :columns="headers"
                    :file-name="title"
                    :file-type="'xlsx'"
                    :sheet-name="title"
                  >
                    <v-icon>mdi-microsoft-excel</v-icon>
                  </export-excel>
                </v-toolbar>
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-title>
      </v-toolbar>

      <v-toolbar>
        <v-toolbar-title>
          <v-container v-if="hasNumericHeaders">
            <v-row>
              <v-col cols="12" md="5" sm="5">
                <v-autocomplete
                  single-line
                  hide-details
                  label="Column"
                  :items="numericHeaders"
                  v-model="numericHeader"
                  item-text="title"
                  item-value="key"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" md="3" sm="3">
                <v-autocomplete
                  hide-details
                  :items="aggregates"
                  v-model="aggregate"
                  item-text="text"
                  item-value="value"
                >
                </v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="4"
                class="primary--text text-darken-1 mt-2 small font-weight-medium"
                v-if="showAggregateValue"
              >
                {{ aggregateValue }}
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-title>
      </v-toolbar>
    </div>
  </div>
</template>
