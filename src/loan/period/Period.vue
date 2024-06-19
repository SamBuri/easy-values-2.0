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
    <template slot="heading">Period</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Period Name"
          v-model="period.periodName"
          :rules="periodNameRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Days"
          v-model="period.days"
          type="number"
          :rules="daysRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import periodModel from "./PeriodModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "Period",
  data: () => ({
    cols: 12,
    sm: 12,
    md: 6,
    maxWidth: 700,
    path: periodModel.path,
    period: periodModel.period,
    periodNameRules: [
      (v) => !!v || "Period Name is required",
      (v) => v.length < 40 || "Period Name length must be less or equal to 40",
    ],
    daysRules: [(v) => !!v || "Days is required"],
  }),
  created() {},
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.period });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.period.id}`,
        body: this.period,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.period = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.period.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.period = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit("crudtable/data", Object.assign({}, this.period));
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
