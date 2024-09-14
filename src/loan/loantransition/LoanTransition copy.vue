<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth"  @componentDataChanged="componentDataChanged">
    <template slot="heading">Loan Transition</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Loan Id" v-model="loanTransition.loanId" :rules="loanIdRules" :counter="20"
          append-icon="mdi-view-list" @click:append="appendIconCallback"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Profile Id" v-model="loanTransition.profileId" :rules="profileIdRules" :counter="20"
          disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Full Name" v-model="loanTransition.fullName" :rules="fullNameRules" :counter="100"
          disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Tran Date" v-model="loanTransition.tranDate" :rules="tranDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="From Status" v-model="loanTransition.fromStatus" :rules="fromStatusRules" :counter="20"
          :items="loanStatuses" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="To Status" v-model="loanTransition.toStatus" :rules="toStatusRules" :counter="20"
          :items="toStatuses" :loading="$store.state.loan.loanStatusesLoading" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Notes" v-model="loanTransition.notes" :rules="notesRules" :counter="200" rows="1"
          auto-grow></v-textarea>
      </v-col>

    </template>
  </crud-form>
</template>
<script>
import loanTransitionModel from "./LoanTransitionModel";
import loanNav from "../loan/LoanNav";

export default {
  components: {},
  name: "LoanTransition",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: loanTransitionModel.path,
    loanTransition: loanTransitionModel.loanTransition,
    loanIdRules: [(v) => !!v || "Loan Id is required",
    (v) => v.length < 20 || "Loan Id length must be less or equal to 20",], profileIdRules: [(v) => !!v || "Profile Id is required",
    (v) => v.length < 20 || "Profile Id length must be less or equal to 20",], fullNameRules: [(v) => !!v || "Full Name is required",
    (v) => v.length < 100 || "Full Name length must be less or equal to 100",], tranDateRules: [(v) => !!v || "Tran Date is required",
    ], fromStatusRules: [(v) => !!v || "From Status is required",
    ], toStatusRules: [(v) => !!v || "To Status is required",
    ], notesRules: [(v) => !!v || "Notes is required",
    (v) => v.length < 200 || "Notes length must be less or equal to 200",], 
  }),
  created() {
    this.$store.dispatch("loan/getLoanStatuses");
  },
  computed: {
    loanStatuses() {
      return this.$store.state.loan.loanStatuses.filter(l => l !== 'Completed');
    },
    toStatuses() {
      let fromStatus = this.loanTransition.fromStatus;
      if (fromStatus) return this.loanStatuses.filter(l => l !== fromStatus);
      return this.loanStatuses;
    },

    loanId() {
      return this.loanTransition.loanId;
    },

    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    searchedObject() {
      return this.$store.state.obj;
    },
  },

  watch: {

    loanId() {
      this.$store.commit("obj", null);
      if (!this.loanId) return;

      if (this.loanId) {
        this.$store.dispatch("get", `${loanNav.menu.path}/${this.loanId}`);
      }
    },

    selectedData() {
      let selectedData = this.selectedData;
      if (selectedData) {
        this.loanTransition.loanId = selectedData.id;
      }
    },

    searchedObject() {

      this.loanTransition.fullName = "";
      let selectedData = this.$store.state.obj;
      if (selectedData) {
        // this.loanBill.loan = { id: selectedData.id, balance: selectedData.balance };
        this.loanTransition.profileId = selectedData.loanApplication.applicantId
        this.loanTransition.fullName = selectedData.loanApplication.name;
        this.loanTransition.fromStatus = selectedData.loanStatus;

      }
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.loanTransition });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.loanTransition.id}`, body: this.loanTransition });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanTransition = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanTransition.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.loanTransition = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanTransition)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    appendIconCallback() {
      let miniSelected = { path: loanNav.menu.path, name: loanNav.menu.name, headers: loanNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);

    },

    componentDataChanged(data){
      this.$nextTick(()=>{
        this.loanTransition.loanId = data.obj.id;
      })
    
    }
    
  }
};
</script>
