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
    <template slot="heading">Loan Bill Details</template>

    <template slot="form-data">
      
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Item"
          v-model="loanBillDetails.item"
          :rules="itemIdRules"
          :counter="100"
          required
          :items="$store.state.lookup.item.mini"
          :loading="$store.state.lookup.item.miniLoading"
          item-text="itemName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Charge"
          v-model="loanBillDetails.charge"
          type="number"
          :rules="chargeRules"
          :counter="100"
          required
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Determining Method"
          v-model="loanBillDetails.determiningMethod"
          :rules="determiningMethodRules"
          :counter="100"
          required
          :items="$store.state.loan.determiningMethods"
          :loading="$store.state.loan.determiningMethodsLoading"
          return-object
        ></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanBillDetailsModel from "./LoanBillDetailsModel";
import CrudForm from "../../components/CrudForm.vue";
import SNumberInput from '../../components/SNumberInput.vue';
export default {
  components: { CrudForm, SNumberInput },
  name: "LoanBillDetails",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: loanBillDetailsModel.path,
    loanBillDetails: loanBillDetailsModel.loanBillDetails,
    loanBillRules: [(v) => !!v || "Loan Bill is required"],
    itemIdRules: [(v) => !!v || "Item is required"],
    chargeRules: [(v) => !!v || "Charge is required"],
    determiningMethodRules: [(v) => !!v || "Determining Method is required"],
  }),
  created() {
    this.$store.dispatch("loan/loanbill/getMini");
    this.$store.dispatch("lookup/item/getMini");
    this.$store.dispatch("loan/getDeterminingMethods");
  },
  computed: {},

  watch: {},

  methods: {
    save() {
       this.setItemData();
      this.$store.dispatch("post", {
        path: this.path,
        body: this.loanBillDetails,
      });
    },
    update() {
       this.setItemData();
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanBillDetails.id}`,
        body: this.loanBillDetails,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanBillDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanBillDetails.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loanBillDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.setItemData();
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanBillDetails)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setItemData(){
       this.loanBillDetails.itemId = this.loanBillDetails.item.id;
      this.loanBillDetails.itemName = this.loanBillDetails.item.itemName;
    },
    getFormData() {
      var data = new FormData();
      data.append("loanBill", this.loanBillDetails.loanBill);
      data.append("itemId", this.loanBillDetails.itemId);
      data.append("charge", this.loanBillDetails.charge);
      data.append("determiningMethod", this.loanBillDetails.determiningMethod);

      return data;
    },
  },
};
</script>
