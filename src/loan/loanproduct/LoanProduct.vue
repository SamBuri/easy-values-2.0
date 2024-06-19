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
    <template slot="heading">Loan Product</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Product Name"
          v-model="loanProduct.productName"
          :rules="productNameRules"
          :counter="40"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Interest Rate"
          v-model="loanProduct.interestRate"
          type="number"
          :rules="interestRateRules"
          :counter="20"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Interest Method"
          v-model="loanProduct.interestMethod"
          :rules="interestMethodRules"
          :counter="20"
          required
          :items="$store.state.loan.interestMethods"
          :loading="$store.state.loan.interestMethodsLoading"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Least Security Scale"
          v-model="loanProduct.leastSecurityScale"
          type="number"
          :rules="leastSecurityScaleRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Interest Period"
          v-model="loanProduct.interestPeriod"
          :rules="interestPeriodRules"
          :counter="100"
          required
          :items="$store.state.loan.period.mini"
          :loading="$store.state.loan.period.miniLoading"
          item-text="periodName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Payment Period"
          v-model="loanProduct.paymentPeriod"
          :rules="paymentPeriodRules"
          :counter="100"
          required
          :items="$store.state.loan.period.mini"
          :loading="$store.state.loan.period.miniLoading"
          item-text="periodName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Max Periods"
          v-model="loanProduct.maxPeriods"
          type="number"
          :rules="maxPeriodsRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Min Amount"
          v-model="loanProduct.minAmount"
          :rules="minAmountRules"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Max Amount"
          v-model="loanProduct.maxAmount"
          type="number"
          :rules="maxAmountRules"
          :counter="100"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Pre Remainder"
          v-model="loanProduct.preRemainder"
          type="number"
          :rules="preRemainderRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Fine Days"
          v-model="loanProduct.fineDays"
          type="number"
          :rules="fineDaysRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Red Flag After"
          v-model="loanProduct.redFlagAfter"
          type="number"
          :rules="redFlagAfterRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Hidden" v-model="loanProduct.hidden"></v-checkbox>
      </v-col>
      <v-col cols="12">
        <crud-table
          title="Loan Product Charges"
          :headers="loanProductChargesNav.menu.editHeaders"
          :items="loanProduct.loanProductCharges"
          :component="loanProductChargesNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanProductModel from "./LoanProductModel";
import CrudForm from "../../components/CrudForm.vue";
import CrudTable from "../../components/CrudTable.vue";
import loanProductChargesNav from "../loanproductcharges/LoanProductChargesNav.js";
export default {
  components: { CrudForm, CrudTable },
  name: "LoanProduct",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: loanProductModel.path,
    loanProduct: loanProductModel.loanProduct,
    loanProductChargesNav: loanProductChargesNav,
    productNameRules: [
      (v) => !!v || "Product Name is required",
      (v) => v.length < 40 || "Product Name length must be less or equal to 40",
    ],
    interestRateRules: [(v) => !!v || "Interest Rate is required"],
    interestMethodRules: [(v) => !!v || "Interest Method is required"],
    leastSecurityScaleRules: [(v) => !!v || "Least Security Scale is required"],
    interestPeriodRules: [(v) => !!v || "Interest Period is required"],
    paymentPeriodRules: [(v) => !!v || "Payment Period is required"],
    maxPeriodsRules: [(v) => !!v || "Max Periods is required"],
    minAmountRules: [(v) => !!v || "Min Amount is required"],
    maxAmountRules: [(v) => !!v || "Max Amount is required"],
    preRemainderRules: [(v) => !!v || "Pre Remainder is required"],
    fineDaysRules: [(v) => !!v || "Fine Days is required"],
    redFlagAfterRules: [(v) => !!v || "Red Flag After is required"],
    loanProductChargesRules: [(v) => !!v || "Loan Product Charges is required"],
  }),
  created() {
    this.$store.dispatch("loan/getInterestMethods");
    this.$store.dispatch("loan/period/getMini");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.loanProduct });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanProduct.id}`,
        body: this.loanProduct,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanProduct = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanProduct.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loanProduct = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit("crudtable/data", Object.assign({}, this.loanProduct));
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
