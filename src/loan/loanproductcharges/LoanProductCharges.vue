<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Loan Product Charges</template>

    <template slot="form-data">
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item" v-model="loanProductCharges.itemObj" :rules="itemIdRules" :counter="20"
          :items="$store.state.lookup.item.mini" :loading="$store.state.lookup.item.miniLoading" item-text="itemName"
          item-value="id"
          return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Determining Method" v-model="loanProductCharges.determiningMethod"
          :rules="determiningMethodRules" :counter="20" :items="$store.state.loan.determiningMethods"
          :loading="$store.state.loan.determiningMethodsLoading" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Quantity" v-model="loanProductCharges.quantity" :rules="quantityRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Cost" v-model="loanProductCharges.unitCost"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="loanProductCharges.unitPrice" :rules="unitPriceRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="loanProductCharges.amount" :rules="amountRules" :disabled="true"
          :counter="100"></s-number-input>
      </v-col>
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Recurrent" v-model="loanProductCharges.recurrent"></v-checkbox>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanProductChargesModel from "./LoanProductChargesModel";
export default {
  components: {},
  name: "LoanProductCharges",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: loanProductChargesModel.path,
    loanProductCharges: loanProductChargesModel.loanProductCharges,
    loanProductRules: [(v) => !!v || "Loan Product is required",
    ], itemIdRules: [(v) => !!v || "tem Id is required",
    ], determiningMethodRules: [(v) => !!v || "Determining Method is required",
    ], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitCostRules: [(v) => !!v || "Unit Cost is required",
    ], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ], chargeRules: [(v) => !!v || "Charge is required",
    ],
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
    quantity(){
      return this.loanProductCharges.quantity;
    },

    unitPrice(){
      return this.loanProductCharges.unitPrice;
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

    quantity(){
      this.setAmount();
    },

    unitPrice(){
      this.setAmount();
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.loanProductCharges });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.loanProductCharges.id}`, body: this.loanProductCharges });
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
    }, setDialog(obj) {
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

    setAmount(){
      this.loanProductCharges.amount= this.quantity*this.unitPrice;
    }
  }
};
</script>
