<template>
  <div class="text-center">
    <v-link dark ref="act" @click="openMenu">
      Setup <v-icon>mdi-menu-down</v-icon></v-link
    >
    <v-menu
      bottom
      offset-y
      :close-on-content-click="closeOnContentClick"
      v-model="showMenu"
      :position-x="menuX"
      :position-y="menuY"
      
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-link dark v-bind="attrs" v-on="on" text>
          Setup <v-icon>mdi-menu-down</v-icon>
        </v-link>
      </template> -->
      <v-card class="mx-auto" width="200">
        <v-list dense>
          <!-- <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item> -->

          <!-- <v-list-group :value="true" prepend-icon="mdi-account-circle"> -->
          <!-- <list-menu-crud menuname="Table" path="table" /> -->
          <list-menu-crud menuname="Orgnisation" :menus="organisationList" />

          <list-menu-crud menuname="Lookup Data" path="lookupdata" />
          <v-divider horizontal />
          <list-menu-crud menuname="Address" :menus="addressList" />
          <v-divider horizontal />
          <list-menu-crud menuname="Accounts" :menus="AccountsList" />
          <v-divider horizontal />
          <list-menu-crud menuname="Customer" :menus="customerList" />
          <v-divider horizontal />
          
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import addressList from "../address/AddresssList.js";
import AccountsList from "../accounts/AccountsList";
import ListMenuCrud from "./ListMenuCrud.vue";
import customerList from "../customer/CustomerList.js";
import organisationList from '../organisation/OrganisationList';
export default {
  components: { ListMenuCrud },
  data: () => ({
    closeOnContentClick: false,
    closeOnClick: true,
    showMenu: false,
    menuX: 0,
    menuY: 0,
    organisationList,
    addressList,
    AccountsList,
    customerList,
    table: [],
    cruds: [
      ["New", "mdi-plus-outline"],
      ["Edit", "mdi-update"],
    ],
  }),

  methods: {
    getTo(page, action) {
      return page + "/" + action;
    },
    openMenu() {
      this.menuX = this.$refs.act.getBoundingClientRect().x;
      this.menuY = this.$refs.act.getBoundingClientRect().bottom;
      this.showMenu = true;
    },
  },
};
</script>