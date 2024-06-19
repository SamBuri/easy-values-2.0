<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Expense Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item Category" v-model="expenseGroup.itemCategoryId" :rules="itemCategoryIdRules" :counter="20"
          :items="$store.state.lookup.itemcategory.expensableItemCategories" :loading="$store.state.lookup.itemcategory.expensableItemCategoriesLoading"
          item-text="itemCategory" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Gl Account" v-model="expenseGroup.glAccountId" :rules="glAccountIdRules" :counter="100"
          :items="$store.state.accounting.account.expenseAccounts" :loading="$store.state.accounting.account.expenseAccountsLoading"
          item-text="accountName" item-value="id"></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Monthly Budget" v-model="expenseGroup.monthlyBudget" :rules="monthlyBudgetRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Alert Percent" v-model="expenseGroup.alertPercent" :rules="alertPercentRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Enforce Budget" v-model="expenseGroup.enforceBudget"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import expenseGroupModel from "./ExpenseGroupModel";
export default {
  components: {},
  name: "ExpenseGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 1000,
    path: expenseGroupModel.path,
    expenseGroup: expenseGroupModel.expenseGroup,
    itemCategoryIdRules: [(v) => !!v || "Item Category is required",
    ], glAccountIdRules: [(v) => !!v || "Gl Account is required",
    ], monthlyBudgetRules: [(v) => !!v || "Monthly Budget is required",
    ], alertPercentRules: [(v) => !!v || "Alert Percent is required",
    (v) => v.length <4|| "Length can't be greater than 3",
    (v) => v<101|| "Percent can't be greater than 100",
    ],
  }),
  created() {
    this.$store.dispatch("lookup/itemcategory/getExpensableItemCategories");
    this.$store.dispatch("accounting/account/getExpenseAccounts");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.expenseGroup });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.expenseGroup.id}`, body: this.expenseGroup });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.expenseGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.expenseGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.expenseGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.expenseGroup)
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



