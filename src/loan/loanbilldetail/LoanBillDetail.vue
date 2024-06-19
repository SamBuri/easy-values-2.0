<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Loan Bill Details</template>

    <template slot="form-data">

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item" v-model="loanBillDetail.itemObj" :rules="itemIdRules" :counter="100"
          :items="$store.state.lookup.item.mini" :loading="$store.state.lookup.item.miniLoading" item-text="itemName"
          item-value="id" return-object></v-select>
      </v-col>
      
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Determining Method" v-model="loanBillDetail.determiningMethod" :rules="determiningMethodRules"
          :counter="100" :items="$store.state.loan.determiningMethods"
          :loading="$store.state.loan.determiningMethodsLoading" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Quantity" v-model="loanBillDetail.quantity" :rules="quantityRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Cost" v-model="loanBillDetail.rawUnitCost" 
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Price" v-model="loanBillDetail.rawUnitPrice" :rules="unitPriceRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="loanBillDetail.rawAmount" :rules="amountRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanBillDetailModel from "./LoanBillDetailModel";
export default {
  components: {},
  name: "LoanBillDetail",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: loanBillDetailModel.path,
    loanBillDetail: loanBillDetailModel.loanBillDetail,
    loanBillRules: [(v) => !!v || "Loan Bill is required",
    ], itemIdRules: [(v) => !!v || "Item is required",
    ], itemNameRules: [(v) => !!v || "Item Name is required",
    (v) => v.length < 100 || "Item Name length must be less or equal to 100",], determiningMethodRules: [(v) => !!v || "Determining Method is required",
    ], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitCostRules: [(v) => !!v || "Unit Cost is required",
    ], unitPriceRules: [(v) => !!v || "Unit Price is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ],
  }),
  created() {
    this.$store.dispatch("loan/loanbill/getMini");
    this.$store.dispatch("lookup/item/getMini");
    this.$store.dispatch("loan/getDeterminingMethods");
  },
  computed: {
    itemObj() {
      return this.loanBillDetail.itemObj;
    },
    quantity() {
      return this.loanBillDetail.quantity;
    },

    unitPrice() {
      return this.loanBillDetail.rawUnitPrice;
    },

  },

  watch: {
    itemObj() {
      if (this.itemObj) {
        this.loanBillDetail.itemId = this.itemObj.id;
        this.loanBillDetail.itemName = this.itemObj.itemName;
      } else {
        this.loanBillDetail.itemId = "";
        this.loanBillDetail.itemName = "";
      }
    },

    quantity() {
      this.setAmount();
    },

    unitPrice() {
      this.setAmount();
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.loanBillDetail });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.loanBillDetail.id}`, body: this.loanBillDetail });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanBillDetail = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanBillDetail.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.loanBillDetail = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanBillDetail)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    setItemData() {
      this.loanBillDetail.itemId = this.loanBillDetail.itemObj.id;
      this.loanBillDetail.itemName = this.loanBillDetail.itemObj.itemName;
    },

    setAmount() {
      this.loanBillDetail.rawAmount = this.unitPrice * this.quantity;
    }
  }
};
</script>