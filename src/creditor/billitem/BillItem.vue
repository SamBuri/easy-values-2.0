<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth" :showPrintPrompt="showPrintPrompt" @print="print">
    <template slot="heading">BillItem</template>

    <template slot="form-data">

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="itemId" label="Item Id" v-model="billItem.itemId" :rules="itemIdRules" :counter="100"
          append-icon="mdi-view-list" @click:append="showItemIdDialog"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="itemName" label="Item Name" v-model="billItem.itemName" :rules="itemNameRules" :counter="100"
          disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field id="itemCategory" label="Item Category" v-model="billItem.itemCategory" :rules="itemCategoryRules"
          :counter="100" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="quantity" label="Quantity" v-model="billItem.quantity" :rules="quantityRules"
          :counter="100"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="unitCost" label="Unit Cost" v-model="billItem.unitCost" :rules="unitCostRules" :counter="100"
          :disabled="disableUnitCost"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input id="amount" label="Amount" v-model="billItem.amount" :rules="amountRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-dialog v-model="itemIdDialog" persistent :max-with="600">
        <search-mini :mtdsProvided="mtdsProvided" @ok="itemIdOk" @close="itemIdClose"
          :items="$store.state.lookup.item.mini" :headers="itemNav.menu.miniHeaders" />
      </v-dialog>
    </template>
  </crud-form>
</template>
<script>
import billItemModel from "./BillItemModel";
import itemNav from "../../lookup/item/ItemNav";
export default {
  components: {},
  name: "BillItem",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 700,
    path: billItemModel.path,
    billItem: billItemModel.billItem,
    itemNav: itemNav,
    itemIdRules: [(v) => !!v || "Item Id is required",
    ], itemNameRules: [(v) => !!v || "Item Name is required",
    (v) => v.length < 100 || "Item Name length must be less or equal to 100",], itemCategoryRules: [(v) => !!v || "Item Category is required",
    (v) => v.length < 100 || "Item Category length must be less or equal to 100",], quantityRules: [(v) => !!v || "Quantity is required",
    ], unitCostRules: [(v) => !!v || "Unit Cost is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ],

    itemIdDialog: false,
    itemIdData: null,
    mtdsProvided: true,
    showPrintPrompt: true,
    disableUnitCost: true,
    disableQuantity: true,
  }),
  created() {
    this.$store.dispatch("creditor/bill/getMini");
    this.$store.dispatch("lookup/item/getMini");
  },
  computed: {
    bill() {
      return this.billItem.bill;
    },



    unitCost() {
      return this.billItem.unitCost;
    },

    quantity() {
      return this.billItem.quantity;
    }

  },

  watch: {
    itemIdData() {
      if (this.itemIdData) {
        this.billItem.itemId = this.itemIdData.id;
        this.billItem.itemName = this.itemIdData.itemName;
        this.billItem.itemCategory = this.itemIdData.itemCategory.itemCategory;
        this.billItem.unitCost = this.itemIdData.unitCost;
        this.disableUnitCost = this.itemIdData.disableUnitCost;
        this.disableQuantity = this.itemIdData.disableQuantity;
        this.billItem.quantity=1;
      }

    },
    bill() {
      if (this.bill) {
        this.billItem.billId = this.bill.id;
      }
    },

    unitCost() {
      this.setAmount();
    },

    quantity() {
      this.setAmount();
    }

  },
  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.billItem });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.billItem.id}`, body: this.billItem });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.billItem = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.billItem.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.billItem = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.billItem)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    print() {
      let data = [];
      data.push({ text: "Bill", value: this.billItem.bill });
      data.push({ text: "Item Id", value: this.billItem.itemId });
      data.push({ text: "Item Name", value: this.billItem.itemName });
      data.push({ text: "Item Category", value: this.billItem.itemCategory });
      data.push({ text: "Quantity", value: this.billItem.quantity });
      data.push({ text: "Unit Cost", value: this.billItem.unitCost });
      data.push({ text: "Amount", value: this.billItem.amount });

      let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "BillItem"

      }

      this.makePDFDocument(options);
    },
    itemIdOk(data) {
      this.itemIdData = data
    },
    itemIdClose() {
      this.itemIdDialog = false;
    },

    showItemIdDialog() {
      this.itemIdDialog = true;
    },

    setAmount() {
      let amount = (this.unitCost || 0) * (this.quantity || 0);
      this.billItem.amount = amount;

    }
  }
};
</script>
