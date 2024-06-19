<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    @done="done"
    @updateCrudTableDialog="updateCrudTableDialog"
    @resetCrudTableDialog="resetCrudTableDialog"
    :path="path"
    :maxWidth="maxWidth"
   
  >
    <template slot="heading">Item Category</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Item Category"
          v-model="itemCategory.itemCategory"
          :rules="itemCategoryRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Item Group"
          v-model="itemCategory.itemGroup"
          :rules="itemGroupRules"
          :counter="100"
          required
          :items="$store.state.lookup.itemCategoryGroups"
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import itemCategoryModel from "./ItemCategoryModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "ItemCategory",
  data: () => ({
    cols: 12,
    sm: 12,
    md: 12,
    maxWidth: 700,
    path: itemCategoryModel.path,
    itemCategory: itemCategoryModel.itemCategory,
    itemCategoryRules: [
      (v) => !!v || "Item Category is required",
      (v) =>
        v.length < 40 || "Item Category length must be less or equal to 40",
    ],
    itemGroupRules: [(v) => !!v || "Item Group is required"],
  }),
  created() {
    this.$store.dispatch("lookup/getItemCategoryGroups");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.itemCategory,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.itemCategory.id}`,
        body: this.itemCategory,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.itemCategory = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.itemCategory.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.itemCategory = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.itemCategory)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  },
};
</script>
