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
    <template slot="heading">Measure Relation</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Measure Name"
          v-model="measureRelation.measureName"
          :rules="measureNameRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Measure Size"
          v-model="measureRelation.measureSize"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Basic"
          v-model="measureRelation.basic"
        ></v-checkbox>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Default Usage"
          v-model="measureRelation.defaultUsage"
          :counter="100"
          :items="$store.state.lookup.unitMeasureUsages"
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import measureRelationModel from "./MeasureRelationModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "MeasureRelation",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: measureRelationModel.path,
    measureRelation: measureRelationModel.measureRelation,
  
    measureNameRules: [
      (v) => !!v || "Measure Name is required",
      (v) =>
        v.length < 100 || "Measure Name length must be less or equal to 100",
    ],
   
  }),
  created() {
   this.$store.dispatch("lookup/getUnitMeasureUsages");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.measureRelation,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.measureRelation.id}`,
        body: this.measureRelation,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.measureRelation = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.measureRelation.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.measureRelation = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.measureRelation)
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
