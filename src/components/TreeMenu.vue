<template>
  <div class="text-center">
    <v-menu bottom offset-y :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on, attrs }">
        <v-link dark v-bind="attrs" v-on="on" text>
          Menu <v-icon>mdi-menu-down</v-icon>
        </v-link>
      </template>
      <v-card class="mx-auto" max-width="500">
        <!-- <v-sheet class="pa-1 primary lighten-2">
        </v-sheet> -->
        <v-card-text class="pa-1 py-1">
          <v-treeview
            activatable
            dense
            hoverable
            color="warning"
            item-disabled="locked"
            return-object
            :active.sync="active"
            :items="items"
            :filter="filter"
            :open.sync="open"
            @update:active="configureRoute"
          >
            <template v-slot:prepend="{ item }">
              <v-icon
                v-if="item.children"
                v-text="
                  `mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`
                "
              ></v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import items from "./NavData";
export default {
  name: "TreeMenu",
  data: () => ({
    closeOnContentClick: false,
    model: 0,
    active: [],
    items,
    open: [1, 2],
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
            to: this.active[0].to,
            headers: this.active[0].headers,
          }
        : undefined;
    },
  },
  methods: {
    emitToParent() {
      this.$emit("childToParent", this.selected);
    },

    configureRoute() {
      if (!this.active.length) return;
      var sel = this.active[0];
      if (sel.to && sel.headers) {
        var selected = {
          name: sel.name,
          component: sel.component,
          to: sel.to,
          headers: sel.headers,
        };
        if(this.$store.state.search.to!==sel.to){
          this.$store.commit("search/currentPage", 1);
        }
        this.$store.commit("search/selected", selected);
        this.$store.dispatch("search/getData");

        var action = this.$route.params.action

        if (action!== sel.to) {
          this.$router.push({ name: 'search', params: { action: sel.to } })
         
        }
       
      }
    },
  },
};
</script>