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
    <template slot="heading">Financial Period</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Description"
          v-model="financialPeriod.description"
          :rules="descriptionRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              label="Start Date"
              v-model="financialPeriod.startDate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="financialPeriod.startDate"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker> </v-menu
      ></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              label="End Date"
              v-model="financialPeriod.endDate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="financialPeriod.endDate"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker> </v-menu
      ></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Active"
          v-model="financialPeriod.active"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import financialPeriodModel from "./FinancialPeriodModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "FinancialPeriod",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: financialPeriodModel.path,
    financialPeriod: financialPeriodModel.financialPeriod,
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        v.length < 100 || "Description length must be less or equal to 100",
    ],
  }),
  created() {},
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.financialPeriod,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.financialPeriod.id}`,
        body: this.financialPeriod,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.financialPeriod = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.financialPeriod.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.financialPeriod = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.financialPeriod)
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
