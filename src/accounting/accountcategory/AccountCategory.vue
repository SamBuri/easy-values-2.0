<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Account Category</template>

    <template slot="form-data" slot-scope="{isUpdate}">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Account Type" v-model="accountCategory.accountType" :rules="accountTypeRules" :counter="100"
          :items="$store.state.lookup.accountTypes" :loading="$store.state.lookup.accountTypesLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Parent Category Id" v-model="accountCategory.parentCategoryId" :counter="100"
          :items="$store.state.accounting.accountcategory.accountCategoriesByAccountType"
          :loading="$store.state.accounting.accountcategory.accountCategoriesByAccountTypeLoading"
          item-text="categoryName" item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Category Name" v-model="accountCategory.categoryName" :rules="categoryNameRules"
          :counter="40"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Read Only" v-model="accountCategory.readOnly"></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="accountCategory.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import accountCategoryModel from "./AccountCategoryModel";
export default {
  components: {},
  name: "AccountCategory",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: accountCategoryModel.path,
    accountCategory: accountCategoryModel.accountCategory,
    accountTypeRules: [(v) => !!v || "Account Type is required",
    ], parentCategoryIdRules: [(v) => !!v || "Parent Category Id is required",
    ], categoryNameRules: [(v) => !!v || "Category Name is required",
    (v) => v.length < 40 || "Category Name length must be less or equal to 40",],
  }),
  created() {
    this.$store.dispatch("lookup/getAccountTypes");

  },
  computed: {

    accountType() {
      return this.accountCategory.accountType;
    },


  },

  watch: {
    accountType() {
      if (this.accountType) {
        this.$store.dispatch("accounting/accountcategory/getAccountCategoriesByAccountType", this.accountType);
      }
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.accountCategory });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.accountCategory.id}`, body: this.accountCategory });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.accountCategory = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.accountCategory.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.accountCategory = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.accountCategory)
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
