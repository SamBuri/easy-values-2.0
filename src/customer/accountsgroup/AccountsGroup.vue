<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Accounts Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Business Section" v-model="accountsGroup.businessSectionId" :rules="businessSectionIdRules"
          :counter="40" :items="$store.state.lookup.lookupdata.businessSections"
          :loading="$store.state.lookup.lookupdata.businessSectionsLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Receivable Account" v-model="accountsGroup.receivableAccountId" :rules="receivableAccountIdRules"
          :counter="20" :items="$store.state.accounting.account.assetAccounts"
          :loading="$store.state.accounting.account.assetAccountsLoading" item-text="accountName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Discount Account" v-model="accountsGroup.discountAccountId" :rules="discountAccountIdRules"
          :counter="20" :items="$store.state.accounting.account.expenseAccounts"
          :loading="$store.state.accounting.account.expenseAccountsLoading" item-text="accountName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Write Off Account" v-model="accountsGroup.writeOffAccountId" :rules="writeOffAccountIdRules"
          :counter="20" :items="$store.state.accounting.account.expenseAccounts"
          :loading="$store.state.accounting.account.expenseAccountsLoading" item-text="accountName"
          item-value="id"></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Withholding Tax Account" v-model="accountsGroup.withholdingTaxAccountId"
          :rules="withholdingTaxAccountIdRules" :counter="20" :items="$store.state.accounting.account.assetAccounts"
          :loading="$store.state.accounting.account.assetAccountsLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import accountsGroupModel from "./AccountsGroupModel";
export default {
  components: {},
  name: "AccountsGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: accountsGroupModel.path,
    accountsGroup: accountsGroupModel.accountsGroup,
    businessSectionIdRules: [(v) => !!v || "Business Section is required",
    ], receivableAccountIdRules: [(v) => !!v || "Receivable Account is required",
    ], discountAccountIdRules: [(v) => !!v || "Discount Account is required",
    ], writeOffAccountIdRules: [(v) => !!v || "Write Off Account is required",
    ],
    withholdingTaxAccountIdRules: [(v) => !!v || "Withholding Tax Account is required",]
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getBusinessSections");
    this.$store.dispatch("accounting/account/getAssetAccounts");
    this.$store.dispatch("accounting/account/getExpenseAccounts");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.accountsGroup });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.accountsGroup.id}`, body: this.accountsGroup });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.accountsGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.accountsGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.accountsGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.accountsGroup)
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
