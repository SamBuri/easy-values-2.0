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
    <template slot="heading">Loan Approval</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Loan Application"
          v-model="loanApproval.loanApplication"
          :rules="loanApplicationRules"
          :counter="100"
          required
          :items="$store.state.loan.loanapplication.pending"
          :loading="$store.state.loan.loanapplication.pendingLoading"
          item-text="name"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        
            <s-date-picker
              label="Approval Date"
              v-model="loanApproval.approvalDate"
              :rules="approvalDateRules"
            ></s-date-picker>
            </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Approved By"
          v-model="loanApproval.approvedBy"
          :rules="approvedByRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Approval Notes"
          v-model="loanApproval.approvalNotes"
          :rules="approvalNotesRules"
          :counter="200"
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Approval Status"
          v-model="loanApproval.approvalStatus"
          :rules="approvalStatusRules"
          :counter="100"
          required
          :items="approvalActions"
        ></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount"
          v-model="loanApproval.amount"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Collateral Category"
          v-model="loanApproval.collateralCategory"
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Collateral Desc"
          v-model="loanApproval.collateralDesc"
           disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Estimated Collateral Value"
          v-model="loanApproval.estimatedCollateralValue"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Loan Product Name"
          v-model="loanApproval.loanProductName"
          disabled
        ></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanApprovalModel from "./LoanApprovalModel";
import CrudForm from "../../components/CrudForm.vue";
import constants from "../../utils/constants";
import SDatePicker from '../../components/SDatePicker.vue';
import SNumberInput from '../../components/SNumberInput.vue';

export default {
  components: { CrudForm, SDatePicker, SNumberInput },
  name: "LoanApproval",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: loanApprovalModel.path,
    loanApproval: loanApprovalModel.loanApproval,
    loanApplicationRules: [(v) => !!v || "Loan Application is required"],
    approvalDateRules: [(v) => !!v || "Approval Date is required"],
    approvedByRules: [
      (v) => !!v || "Approved By is required",
      (v) =>
        v.length < 100 || "Approved By length must be less or equal to 100",
    ],
    approvalNotesRules: [
      (v) =>
        v.length < 200 || "Approval Notes length must be less or equal to 200",
    ],
    approvalStatusRules: [(v) => !!v || "Approval Status is required"],

    approvalActions: constants.approvalStatuses,
    menu: false,
  }),
  created() {
    this.$store.dispatch("loan/loanapplication/getPending");
    this.$store.dispatch("lookup/getRequestStatuses");
  },
  computed: {
    loanApplication() {
      return this.loanApproval.loanApplication;
    },
  },

  watch: {
    loanApplication() {
      if(this.loanApplication){
        let loanApp = this.loanApplication;
        this.loanApproval.loanProductName = loanApp.productName;
        this.loanApproval.amount = loanApp.amount;
        this.loanApproval.collateralCategory = loanApp.collateralCategory;
        this.loanApproval.collateralDesc = loanApp.collateralDesc
        this.loanApproval.estimatedCollateralValue = loanApp.estimatedCollateralValue;
        this.loanApproval.loanProductName = loanApp.loanProduct.productName;

      }
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.loanApproval,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanApproval.id}`,
        body: this.loanApproval,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanApproval = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanApproval.clear();
      this.$store.dispatch("loan/loanapplication/getPending");
      this.$store.dispatch("loan/loanapplication/getApproved");
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loanApproval = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanApproval)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    getFormData() {
      var data = new FormData();
      data.append("loanApplication", this.loanApproval.loanApplication);
      data.append("approvalDate", this.loanApproval.approvalDate);
      data.append("approvedBy", this.loanApproval.approvedBy);
      data.append("approvalNotes", this.loanApproval.approvalNotes);
      data.append("approvalStatus", this.loanApproval.approvalStatus);

      return data;
    },
  },
};
</script>
