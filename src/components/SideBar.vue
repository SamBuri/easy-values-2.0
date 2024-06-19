<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto primary"  max-width="500">
          <v-sheet class="pa-1 white lighten-2">
            <v-text-field v-model="search" label="Search" dark flat solo-inverted hide-details clearable
              clear-icon="mdi-close-circle-outline"></v-text-field>
          </v-sheet>
          <v-card-text class="pa-1 py-1">
            <v-btn @click="goDashboard" text> <v-icon small> mdi-view-dashboard-outline</v-icon> <span>Dashboard</span></v-btn>
            <v-btn @click="goLoanDashboard" text> <v-icon small>mdi-desktop-classic</v-icon> <span>Loan Dashbord</span></v-btn>
            <v-treeview activatable dense hoverable color="warning" item-disabled="locked" return-object
              :active.sync="active" :items="items" :search="search" :filter="filter" :open.sync="open"
              @update:active="configureRoute">
              <!-- <template v-slot:prepend="{ item }">
              
              <v-icon
                v-if="item.children"
                v-text="
                  `mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`
                "
              ></v-icon>
              
            </template> -->
            </v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import items from "./NavData";
import searchModel from '../search/SearchModel';
import storeFuncs from '../utils/storeFuncs'
export default {
  name: "SideBar",
  data: () => ({
    model: 0,
    active: [],
    items,
    open: ["root"],
    search: null,
    caseSensitive: false,
    clicked: false,
  }),
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
    selected() {
      return this.active.length
        ? {
          name: this.active[0].name,
          component: this.active[0].component,
          path: this.active[0].path,
          headers: this.active[0].headers,
        }
        : undefined;
    },
  },
  methods: {
    goLoanDashboard() {
      this.$router.push({ name: 'loandashboard' });
    },

    goDashboard() {
      this.$router.push({ name: 'dashboard' });
    },
    emitToParent() {
      this.$emit("childToParent", this.selected);
    },

    configureRoute() {
      if (!this.active.length) return;

      var sel = this.active[0];
      console.log("Selected Menu", sel);
      if (sel.path && sel.headers) {
        var selected = {
          name: sel.name,
          component: sel.component,
          path: sel.path,
          width: sel.width ? sel.width : "500px",
          headers: sel.headers,
        };
        if (this.$store.state.search.path !== sel.path) {
          this.$store.commit("search/currentPage", 1);
        }
      
        
        let searchOptions = searchModel.searchOptions;
        if(storeFuncs.hasBranches){
          searchOptions.searchCriteria = [storeFuncs.getCurrentBranchCriterion()];
          // searchOptions.searchCriteria.push(storeFuncs.getCurrentBranchCriterion());
          this.$store.commit("search/searchOptions", searchOptions);
        }
        this.$store.commit("search/selected", selected);
        this.$store.dispatch("search/getSearchData");

        var action = this.$route.params.action;

        if (action !== sel.path) {
          this.$router.push({ name: "search", params: { action: sel.path } });
        }

      } else {

        if (sel.route) {
          if (sel.mode>=0) {
            this.$router.push({ name: sel.route, params: { mode: sel.mode } });
          } else {
            this.$router.push({ name: sel.route });
          }
        }

      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.v-btn {
  text-transform: none;
}
</style>