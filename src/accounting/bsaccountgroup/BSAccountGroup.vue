<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">BS Account Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Business Section" v-model="bSAccountGroup.businessSectionId" :rules="businessSectionIdRules"
          :counter="20" :items="$store.state.lookup.lookupdata.businessSections"
          :loading="$store.state.lookup.lookupdata.businessSectionsLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Asset Account" v-model="bSAccountGroup.assetAccount" :rules="assetAccountRules" :counter="20"
          :items="$store.state.accounting.account.assetAccounts" :loading="$store.state.accounting.account.assetAccountsLoading"
          item-text="accountName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Equity Account" v-model="bSAccountGroup.equityAccount" :rules="equityAccountRules" :counter="20"
          :items="$store.state.accounting.account.equityAccounts" :loading="$store.state.accounting.account.equityAccountsLoading"
          item-text="accountName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Liability Account" v-model="bSAccountGroup.liabilityAccount" :rules="liabilityAccountRules"
          :counter="20" :items="$store.state.accounting.account.liabilityAccounts"
          :loading="$store.state.accounting.account.liabilityAccountsLoading" item-text="accountName" item-value="id"
          return-object></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import bSAccountGroupModel from "./BSAccountGroupModel";
export default {
  components: {},
  name: "BSAccountGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: bSAccountGroupModel.path,
    bSAccountGroup: bSAccountGroupModel.bSAccountGroup,
    businessSectionIdRules: [(v) => !!v || "Business Section is required",
    ], assetAccountRules: [(v) => !!v || "Asset Account is required",
    ], equityAccountRules: [(v) => !!v || "Equity Account is required",
    ], liabilityAccountRules: [(v) => !!v || "Liability Account is required",
    ],
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getBusinessSections");
    this.$store.dispatch("accounting/account/getAssetAccounts");
    this.$store.dispatch("accounting/account/getEquityAccounts");
    this.$store.dispatch("accounting/account/getLiabilityAccounts");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.bSAccountGroup });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.bSAccountGroup.id}`, body: this.bSAccountGroup });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.bSAccountGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.bSAccountGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.bSAccountGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.bSAccountGroup)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  }
};
</script>
