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
    <template slot="heading">Measure Group</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Measure Group Name"
          v-model="measureGroup.measureGroupName"
          :rules="measureGroupNameRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Measure Relation"
          :headers="measureRelationNav.menu.editHeaders"
          :items="measureGroup.measureRelation"
          :component="measureRelationNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import measureGroupModel from "./MeasureGroupModel";
import CrudForm from "../../components/CrudForm.vue";
import CrudTable from "../../components/CrudTable.vue";
import measureRelationNav from "../measurerelation/MeasureRelationNav.js";
export default {
  components: { CrudForm, CrudTable },
  name: "MeasureGroup",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: measureGroupModel.path,
    measureGroup: measureGroupModel.measureGroup,
    measureRelationNav: measureRelationNav,
    measureGroupNameRules: [
      (v) => !!v || "Measure Group Name is required",
      (v) =>
        v.length < 100 ||
        "Measure Group Name length must be less or equal to 100",
    ],
  }),
  created() {},
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.measureGroup,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.measureGroup.id}`,
        body: this.measureGroup,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.measureGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.measureGroup.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.measureGroup = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit(
      //   "crudtable/data",
      //   Object.assign({}, this.measureGroup)
      // );
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },
  },
};
</script>
