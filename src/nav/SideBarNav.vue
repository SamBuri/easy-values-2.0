<!-- 
<script setup>
import { ref, computed, watch } from "vue";
import navData from "./NavData";
import { useRouter } from "vue-router";

const items = navData.tree;
const openedInitially = ["sales", "loan"];
const search = ref(null);
const caseSensitive = ref(false);
const filter = computed(() => {
  return caseSensitive.value
    ? (item, search, textKey) => item[textKey].indexOf(search) > -1
    : undefined;
});

const active = ref([])
const selected = ref([]);
const router = useRouter();
const cardWidth = 700;

watch(selected, (newValue, oldValue) => {
  console.log("selected", newValue);
});

const handleItemClick = (item) => {
  if (item.to) {
    router.push(item.to);
  }
};
</script>

<template>
  <v-container fluid>
    <v-row fluid>
      <v-col cols="12">
        <v-card color="primary" :max-width="cardWidth">
          <v-sheet class="pa-1 white lighten-2">
            <v-text-field v-model="search" label="Search" dark flat solo-inverted hide-details clearable
              clear-icon="mdi-close-circle-outline"></v-text-field>
          </v-sheet>
          <v-card-text class="pa-1 py-1">
            <v-btn @click="$router.push({ name: 'dashboard' })" text>
              <v-icon small> mdi-view-dashboard-outline</v-icon>
              <span>Dashboard</span>
            </v-btn>
            <br />
            <v-btn @click="$router.push({ name: 'loandashboard' })" text>
              <v-icon small>mdi-desktop-classic</v-icon>
              <span>Loan Dashbord</span></v-btn
            >

            <v-treeview :items="items" :search="search" item-value="id" 
              :opened="openedInitially" activatable
              open-on-click item-disabled="locked" 
              @update:active="handleItemClick"
              v-model:selected="selected"
              v-model:activated="active"
              item-props
              fluid
              >
              <template v-slot:prepend="{ item, isOpen } " >
               <v-icon v-if="item.icon" :icon="item.icon" @click="handleItemClick(item)"></v-icon>
              </template>

              <template v-slot:title="{ item }">
               
                <span @click="handleItemClick(item)">
                  {{ item.title?item.title.toUpperCase():item.title }}
                </span>
              </template>
            </v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}

html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style> -->

<script setup>
import { ref, computed, watch } from "vue";
import navData from "./NavData";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/authstore";


const items = navData.tree;
const openedInitially = ["sales", "loan"];
const search = ref(null);
const caseSensitive = ref(false);
// const filter = computed(() => {
//   return caseSensitive.value
//     ? (item, search, textKey) => item[textKey].indexOf(search) > -1
//     : undefined;
// });

const filter = computed(() => {
  return (item, searchTerm, textKey) => {
    const itemText = item[textKey];
    const searchText = searchTerm || '';
    return caseSensitive.value
      ? itemText.indexOf(searchText) > -1
      : itemText.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  };
});

const active = ref([]);
const selected = ref([]);
const router = useRouter();
const cardWidth = ref(800);

watch(selected, (newValue, oldValue) => {
  console.log("selected", newValue);
});

const handleItemClick = (item) => {
  if (item.to) {
    router.push(item.to);
  }
 
};

const onTreeviewError = (error) => {
  console.error("Treeview error:", error);
};

const authStore = useAuthStore();
</script>

<template>
  <v-container fluid>
    <v-row fluid>
      <v-col cols="12">
        <v-card color="primary"  :width="cardWidth">
          <v-sheet class="pa-1 white lighten-2">
            <v-text-field 
              v-model="search" 
              label="Search" 
              dark 
              flat 
              solo-inverted 
              hide-details 
              clearable
              clear-icon="mdi-close-circle-outline"
            ></v-text-field>
          </v-sheet>
          <v-card-text class="pa-1 py-1">
            <v-btn @click="$router.push({ name: 'dashboard' })" text>
              <v-icon small>mdi-view-dashboard-outline</v-icon>
              <span>Dashboard</span>
            </v-btn>
            <br />
            <v-btn @click="$router.push({ name: 'loandashboard' })" text>
              <v-icon small>mdi-desktop-classic</v-icon>
              <span>Loan Dashboard</span>
            </v-btn>

          

            <v-treeview 
            :filter="filter"
              :items="items" 
              :search="search" 
              item-value="id"
              :open="openedInitially"
              activatable
              open-on-click 
              item-disabled="locked"
              @update:active="handleItemClick"
              v-model:selected="selected"
              v-model:active="active"
              item-props
              fluid
              v-on:error="onTreeviewError"
            >
              <template v-slot:prepend="{ item, isOpen }">
                <v-icon 
                  v-if="item.icon" 
                  :icon="item.icon" 
                  @click="handleItemClick(item)"
                ></v-icon>
              </template>

              <template v-slot:title="{ item }">
                <span @click="handleItemClick(item)">
                  {{ item.title ? item.title.toUpperCase() : item.title }}
                </span>
              </template>
            </v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn {
  text-transform: none;
}

html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}

/* Remove treeview indentation */
.v-treeview .v-treeview-node__level {
  width: 0 !important;
}

.v-treeview .v-treeview-node__content {
  padding-left: 8px !important;
}
</style>