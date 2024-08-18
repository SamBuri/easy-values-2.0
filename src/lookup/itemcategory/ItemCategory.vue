<script setup>
import itemCategoryController from "./ItemCategoryController";
const cols = 12;
const sm = 6;
const md = 6;

const controller= itemCategoryController();

const model =  controller.model;
const rules= controller.rules;
// const lookupStore =  controller.lookupStore

</script>
<template>
  <crud-form :controller="controller">
    <template #heading>Item Category</template>

    <template #form-data ="{ isUpdate }">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Item Category"
          v-model="model.itemCategory"
          :rules="rules.itemCategory"
          :counter="40"
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Item Group"
          v-model="model.itemGroup"
          :rules="rules.itemGroup"
          :counter="100"
          :items="controller.lookupStore.itemCategoryGroups"
          :loading="controller.lookupStore.itemCategoryGroupsLoading"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Billable"
          v-model="model.billable"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Expensable"
          v-model="model.expensable"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Hidden" v-model="model.hidden"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<!-- <script>
import itemCategoryModel from "./ItemCategoryModel";
export default {
  components: {},
  name: "ItemCategory",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: itemCategoryModel.path,
    itemCategory: itemCategoryModel.itemCategory,
    itemCategoryRules: [(v) => !!v || "Item Category is required",
    (v) => v.length < 40 || "Item Category length must be less or equal to 40",], itemGroupRules: [(v) => !!v || "Item Group is required",
    ],
  }),
  created() {
    this.$store.dispatch("lookup/getItemCategoryGroups");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.itemCategory });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.itemCategory.id}`, body: this.itemCategory });
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
    }, setDialog(obj) {
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
  }
};
</script> -->
