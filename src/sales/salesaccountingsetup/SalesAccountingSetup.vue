<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Accounting Setup</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="salesAccountingSetup.name" :rules="nameRules" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Customer Type" v-model="salesAccountingSetup.customerTypeId" :rules="customerTypeIdRules"
          :counter="100" :items="$store.state.lookup.lookupdata.customerTypes"
          :loading="$store.state.lookup.lookupdata.customerTypesLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item Category" v-model="salesAccountingSetup.itemCategoryId" :rules="itemCategoryIdRules"
          :counter="100" :items="$store.state.items.itemcategory.mini"
          :loading="$store.state.items.itemcategory.miniLoading" item-text="itemCategory" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Sales Account" v-model="salesAccountingSetup.salesAccountId" :rules="salesAccountIdRules"
          :counter="100" :items="$store.state.accounting.account.accountsByAccountType"
          :loading="$store.state.accounting.account.accountsByAccountTypeLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Sales Return Account" v-model="salesAccountingSetup.salesReturnAccountId"
          :rules="salesReturnAccountIdRules" :counter="100" :items="$store.state.accounting.account.contraAccountsByAccountType"
          :loading="$store.state.accounting.account.contraAccountsByAccountTypeLoading" item-text="accountName" item-value="id"></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import salesAccountingSetupModel from "./SalesAccountingSetupModel";
export default {
  components: {},
  name: "SalesAccountingSetup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: salesAccountingSetupModel.path,
    salesAccountingSetup: salesAccountingSetupModel.salesAccountingSetup,
    nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 100 || "Name length must be less or equal to 100",], customerTypeIdRules: [(v) => !!v || "Customer Type is required",
    ], itemCategoryIdRules: [(v) => !!v || "Item Category is required",
    ], salesAccountIdRules: [(v) => !!v || "Sales Account is required",
    ], salesReturnAccountIdRules: [(v) => !!v || "Sales Return Account is required",
    ],
    incomeAccountType: "Income"
  }),
  created() {
    this.$store.dispatch("lookup/lookupdata/getCustomerTypes");
    this.$store.dispatch("items/itemcategory/getMini");
    this.$store.dispatch("accounting/account/getContraAccountsByAccountType",this.incomeAccountType);
    this.$store.dispatch("accounting/account/getAccountsByAccountType", this.incomeAccountType);
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.salesAccountingSetup });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.salesAccountingSetup.id}`, body: this.salesAccountingSetup });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.salesAccountingSetup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.salesAccountingSetup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.salesAccountingSetup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.salesAccountingSetup)
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
