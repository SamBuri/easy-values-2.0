<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Business Section Account</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="businessSectionAccount.name" :rules="nameRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Business Section" v-model="businessSectionAccount.businessSectionId"
          :rules="businessSectionIdRules" :counter="100" :items="$store.state.lookup.lookupdata.businessSections"
          :loading="$store.state.lookup.lookupdata.businessSectionsLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item Category" v-model="businessSectionAccount.itemCategoryId" :rules="itemCategoryIdRules"
          :counter="100" :items="$store.state.lookup.itemcategory.mini"
          :loading="$store.state.lookup.itemcategory.miniLoading" item-text="itemCategory" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Sales Account" v-model="businessSectionAccount.salesAccount" :rules="salesAccountRules"
          :counter="100" :items="$store.state.accounting.account.incomeAccounts"
          :loading="$store.state.accounting.account.incomeAccountsLoading" item-text="accountName" item-value="id"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Expense Account" v-model="businessSectionAccount.expenseAccount" :rules="expenseAccountRules"
          :counter="100" :items="$store.state.accounting.account.expenseAccounts"
          :loading="$store.state.accounting.account.expenseAccountsLoading" item-text="accountName" item-value="id"
          return-object></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import businessSectionAccountModel from "./BusinessSectionAccountModel";
export default {
  components: {},
  name: "BusinessSectionAccount",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: businessSectionAccountModel.path,
    businessSectionAccount: businessSectionAccountModel.businessSectionAccount,
    nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",], businessSectionIdRules: [(v) => !!v || "Business Section is required",
    ], itemCategoryIdRules: [(v) => !!v || "Item Category is required",
    ], salesAccountRules: [(v) => !!v || "Sales Account is required",
    ], expenseAccountRules: [(v) => !!v || "Expense Account is required",
    ],
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getBusinessSections");
    this.$store.dispatch("lookup/itemcategory/getMini");
    this.$store.dispatch("accounting/account/getMini");
    this.$store.dispatch("accounting/account/getIncomeAccounts");
    this.$store.dispatch("accounting/account/getExpenseAccounts");
  
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.businessSectionAccount });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.businessSectionAccount.id}`, body: this.businessSectionAccount });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.businessSectionAccount = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.businessSectionAccount.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.businessSectionAccount = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.businessSectionAccount)
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
