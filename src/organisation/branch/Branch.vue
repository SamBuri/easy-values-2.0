<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Branch</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Company" v-model="branch.company" :rules="companyRules" :counter="100"
          :items="$store.state.organisation.company.mini" :loading="$store.state.organisation.company.miniLoading"
          item-text="companyName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Branch Name" v-model="branch.branchName" :rules="branchNameRules"
          :counter="50"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Address" v-model="branch.address" :rules="addressRules" :counter="200" rows="1"
          auto-grow></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Phone No" v-model="branch.phoneNo" :rules="phoneNoRules" :counter="30"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Email" v-model="branch.email" :rules="emailRules" :counter="50"></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import branchModel from "./BranchModel";
export default {
  components: {},
  name: "Branch",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 800,
    path: branchModel.path,
    branch: branchModel.branch,
    companyRules: [(v) => !!v || "Company is required",
    ], branchNameRules: [(v) => !!v || "Branch Name is required",
    (v) => v.length < 50 || "Branch Name length must be less or equal to 50",], addressRules: [(v) => !!v || "Address is required",
    (v) => v.length < 200 || "Address length must be less or equal to 200",], phoneNoRules: [(v) => !!v || "Phone No is required",
    (v) => v.length < 30 || "Phone No length must be less or equal to 30",], emailRules: [(v) => !!v || "Email is required",
    (v) => v.length < 50 || "Email length must be less or equal to 50",],
  }),
  created() {
    this.$store.dispatch("organisation/company/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.branch });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.branch.id}`, body: this.branch });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.branch = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.branch.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.branch = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.branch)
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
