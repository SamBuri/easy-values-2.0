<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Expense Details</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Expense Group" v-model="expenseDetails.expenseGroup" :rules="expenseGroupRules" :counter="100"
          :items="$store.state.expenses.expensegroup.mini" :loading="$store.state.expenses.expensegroup.miniLoading"
          item-text="itemCategory" item-value="id" return-object></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Item" v-model="expenseDetails.item" :rules="itemIdRules" :counter="100"
          :items="$store.state.lookup.item.categoryItems" :loading="$store.state.lookup.item.categoryItemsLoading"
          item-text="itemName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Quantity" v-model="expenseDetails.quantity" :rules="quantityRules"
          :disabled="disableQuantity" :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Unit Cost" v-model="expenseDetails.unitCost" :rules="unitCostRules" :counter="100"
          :disabled="disableUnitCost"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="expenseDetails.amount" :rules="amountRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import expenseDetailsModel from "./ExpenseDetailModel";
export default {
  components: {},
  name: "ExpenseDetail",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: expenseDetailsModel.path,
    expenseDetails: expenseDetailsModel.expenseDetails,
    expenseGroupRules: [(v) => !!v || "Expense Group is required",
    ], expenseRules: [(v) => !!v || "Expense is required",
    ], itemIdRules: [(v) => !!v || "Item is required",
    ], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitCostRules: [(v) => !!v || "Unit Cost is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ],
  }),
  created() {
    this.$store.dispatch("expenses/expensegroup/getMini");
    this.$store.dispatch("lookup/item/getMini");

  },
  computed: {
    unitCost() {
      return this.expenseDetails.unitCost;
    },
    quantity() {
      return this.expenseDetails.quantity;
    },

    item() {
      return this.expenseDetails.item;
    },

    itemCategoryId() {
      return this.expenseDetails.expenseGroup.itemCategoryId;

    },

    disableUnitCost() {
      console.log(this.item)
      if (this.item){
        return !this.item.editUnitCost;
      }
      return true;
    },

    disableQuantity() {
      console.log(this.item)
      if (this.item){
        return !this.item.editQuantity;
      }
      return true;
    },



  },

  watch: {
    quantity() {
      this.setAmount();
    },
    unitCost() {
      this.expenseDetails.baseUnitCost = this.unitCost;
      this.setAmount();
    },
    item() {
      if (this.item) {
        this.expenseDetails.itemId = this.item.id;
        this.expenseDetails.itemName = this.item.itemName;
        this.expenseDetails.baseUnitCost = this.item.baseUnitCost;
        this.expenseDetails.unitCost = this.item.unitCost;
      }
    },


    itemCategoryId() {
      if (this.itemCategoryId) {
        this.$store.dispatch("lookup/item/getCategoryItems", this.itemCategoryId)
      }
    },


  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.expenseDetails });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.expenseDetails.id}`, body: this.expenseDetails });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.expenseDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.expenseDetails.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.expenseDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.expenseDetails)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },

    setAmount() {
      let amount = (this.unitCost ||0) * (this.quantity ||0);
      this.expenseDetails.amount = amount;
      this.expenseDetails.baseAmount = amount;

    }
  }
};
</script>
