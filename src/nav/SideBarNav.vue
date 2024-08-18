<script setup>
import { ref, computed, watch } from "vue";
import navData from "./NavData";
import { useRouter } from "vue-router";
const items = navData.tree;
const openedInitially = ["sales", "loan"];
const search = ref(null);
const caseSensitive = ref(false);
const filter = computed(() => {
  return caseSensitive
    ? (item, search, textKey) => item[textKey].indexOf(search) > -1
    : undefined;
});

const selected = ref([]);

const router = useRouter();

const cardWith=500;

watch(selected, () => {
  console.log("Selected", selected);
});

const makeParameter = (item) => {
  console.log("Clicked item", item);
  let route = { name: item.route };
  if (item.mode) route.params = { mode: item.mode };

  router.push(route);
};
</script>
<template>
  <v-container fluid>
    <v-row fluid>
      <v-col cols="12">
        <v-card color="primary" :max-width="cardWith">
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
              <v-icon small> mdi-view-dashboard-outline</v-icon>
              <span>Dashboard</span></v-btn
            >
            <br />
            <v-btn @click="$router.push({ name: 'loandashboard' })" text>
              <v-icon small>mdi-desktop-classic</v-icon>
              <span>Loan Dashbord</span></v-btn
            >

            <v-treeview
              :items="items"
              :search="search"
              item-value="id"
              :opened="openedInitially"
              activatable
              open-on-click
              item-disabled="locked"
            >
              <template v-slot:prepend="{ item, open }">
                <template v-if="item.to">
                  <v-icon @click="$router.push(item.to)" v-if="!item.icon">
                    {{ open ? "mdi-folder-open" : "mdi-folder" }}
                  </v-icon>
                  <v-icon @click="$router.push(item.to)" v-else>
                    {{ item.icon }}
                    mdi-folder-open
                  </v-icon>
                </template>

                <template v-else>
                  <v-icon v-if="!item.icon">
                    {{ open ? "mdi-folder-open" : "mdi-folder" }}
                  </v-icon>
                  <v-icon v-else>
                    {{ item.icon }}
                    mdi-folder-open
                  </v-icon>
                </template>
              </template>

              <template v-slot:label="{ item, open }">
                <template v-if="item.route" :to="{ name: item.route }">
                  {{ item.title.toUppperCase() }}</template
                >
                <template v-else="item.route" :to="{ name: item.route }">
                  {{ item.title.toUpperCase() }}</template
                >
              </template>
            </v-treeview>
            <!--
            <v-treeview
              v-model="selected"
              :items="items"
              :opened="openedInitially"
              item-key="title"
              activatable
              open-on-click
              :search="search" :filter="filter"
              selectable
            >
              <template v-slot:prepend="{ item, open }">

                <v-icon v-if="!item.icon">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon v-else>
                  {{ item.icon }}

                </v-icon>
              </template>

              <template v-slot:label="{ item, open }">
                {{ item }}
                <template v-if="item.route" :to="{name: item.route}"> {{ item.title.toUppperCase() }}</template>
                <template v-else="item.route" :to="{name: item.route}"> {{ item.title.toUpperCase() }}</template>
              </template>
            </v-treeview> -->
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
</style>
