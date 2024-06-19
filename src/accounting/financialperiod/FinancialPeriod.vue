<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Financial Period</template>

    <template slot="form-data" slot-scope="{ isUpdate }">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="financialPeriod.name" :rules="nameRules"
          :counter="50"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Start Date" v-model="financialPeriod.startDate" :rules="startDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="End Date" v-model="financialPeriod.endDate" :rules="endDateRules"
          :allowFuture="true" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md" v-if="isUpdate">
        <v-checkbox label="Active" v-model="financialPeriod.active" :disabled="!isUpdate"></v-checkbox>
      </v-col>

    </template>
  </crud-form>
</template>
<script>
import financialPeriodModel from "./FinancialPeriodModel";
export default {
  components: {},
  name: "FinancialPeriod",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: financialPeriodModel.path,
    financialPeriod: financialPeriodModel.financialPeriod,
    nameRules: [(v) => !!v || "Name is required",
    (v) => v.length < 50 || "Name length must be less or equal to 50",],
    startDateRules: [(v) => !!v || "Start Date is required",
    ], endDateRules: [(v) => !!v || "End Date is required",
    ],
  }),
  created() { },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.financialPeriod });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.financialPeriod.id}`, body: this.financialPeriod });
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
    }, setDialog(obj) {
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
  }
};
</script>
