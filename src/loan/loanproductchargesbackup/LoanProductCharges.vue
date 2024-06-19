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
    <template slot="heading">Loan Product Charges</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Item"
          v-model="loanProductCharges.itemObj"
          :rules="itemIdRules"
          :counter="20"
          required
          :items="$store.state.lookup.item.mini"
          :loading="$store.state.lookup.item.miniLoading"
          item-text="itemName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Determining Method"
          v-model="loanProductCharges.determiningMethod"
          :rules="determiningMethodRules"
          :counter="20"
          required
          :items="$store.state.loan.determiningMethods"
          :loading="$store.state.loan.determiningMethodsLoading"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Charge"
          v-model="loanProductCharges.charge"
          type="number"
          :rules="chargeRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox
          label="Re-current"
          v-model="loanProductCharges.recurrent"
        ></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanProductChargesModel from "./LoanProductChargesModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "LoanProductCharges",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 6,
    maxWidth: 700,
    path: loanProductChargesModel.path,
    loanProductCharges: loanProductChargesModel.loanProductCharges,
    loanProductRules: [(v) => !!v || "Loan Product is required"],
    itemIdRules: [(v) => !!v || "tem Id is required"],
    determiningMethodRules: [(v) => !!v || "Determining Method is required"],
    chargeRules: [(v) => !!v || "Charge is required"],
  }),
  created() {
    this.$store.dispatch("loan/loanproduct/getMini");
    this.$store.dispatch("lookup/item/getMini");
    this.$store.dispatch("loan/getDeterminingMethods");
  },
  computed: {
    itemObj() {
      return this.loanProductCharges.itemObj;
    },
  },

  watch: {
    itemObj() {
      if (this.itemObj) {
        this.loanProductCharges.itemId = this.itemObj.id;
        this.loanProductCharges.itemName = this.itemObj.itemName;
      } else {
        this.loanProductCharges.itemId = "";
        this.loanProductCharges.itemName ="";
      }
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.loanProductCharges,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanProductCharges.id}`,
        body: this.loanProductCharges,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanProductCharges = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanProductCharges.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.loanProductCharges = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanProductCharges)
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
