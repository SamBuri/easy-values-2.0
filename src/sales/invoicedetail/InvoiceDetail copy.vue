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
    <template slot="heading">Invoice Details</template>

    <template slot="form-data">
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Invoice"
          v-model="invoiceDetails.invoice"
          :rules="invoiceRules"
          :counter="100"
          required
          :items="$store.state.invoices.invoice.mini"
          item-text="invoiceName"
          item-value="id"
          return-object
        ></v-select>
      </v-col> -->
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Item"
          v-model="invoiceDetails.itemObj"
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
        <v-select
          label="Measure"
          v-model="invoiceDetails.measureObj"
          :rules="measureRules"
          :items="itemUnitMeasures"
           :loading="$store.state.lookup.item.itemLoading"
          item-value="id"
          item-text="measureName"
          required
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Measure Quantity"
          v-model="invoiceDetails.measureQuantity"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Measure Size"
          v-model="invoiceDetails.measureSize"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Unit Measure"
          v-model="invoiceDetails.unitMeasure"
          :rules="unitMeasureRules"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Quantity"
          v-model="invoiceDetails.quantity"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Unit Cost"
          v-model="invoiceDetails.unitCost"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Unit Price"
          v-model="invoiceDetails.unitPrice"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Discount"
          v-model="invoiceDetails.discount"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Amount"
          v-model="invoiceDetails.amount"
          :rules="amountRules"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <!-- <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Location"
          v-model="invoiceDetails.location"
         
        ></v-text-field>
      </v-col> -->
    </template>
  </crud-form>
</template>
<script>
import invoiceDetailModel from "./InvoiceDetailModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "InvoiceDetails",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: invoiceDetailModel.path,
    invoiceDetails: invoiceDetailModel.invoiceDetails,
    invoiceRules: [(v) => !!v || "Invoice is required"],
    itemIdRules: [(v) => !!v || "Item is required"],
    
   
    measureRules: [
      (v) => !!v || "Measure is required",
    ],
    unitMeasureRules: [
      (v) => !!v || "Unit Measure is required",
    ],
    amountRules: [
      (v) => !!v || "Amount is required",
    ],

    itemUnitMeasures: [],
  
  }),
  created() {
    this.$store.dispatch("lookup/item/getMini");
  },
  computed: {
    itemObj(){
      return this.invoiceDetails.itemObj;
    },
    measureObj(){
      return this.invoiceDetails.measureObj;
    },
    measureQuantity(){
      return this.invoiceDetails.measureQuantity;
    },
   discount(){return this.invoiceDetails.discount;},

  },

  watch: {
     itemObj(){
       if(!this.itemObj)return;
      this.invoiceDetails.itemId = this.itemObj.id;
       this.invoiceDetails.itemName = this.itemObj.itemName;
       console.log("Item Obj", this.itemObj);
      this.setItem();

    },
    measureObj(){
      this.invoiceDetails.measure = this.invoiceDetails.measureObj.measureName;
      this.invoiceDetails.measureSize = this.invoiceDetails.measureObj.measureSize;
      this.calcQuantity();
    },
    measureQuantity(){
      this.calcQuantity();
    }, 
    discount(){
      this.calcAmount();
    }
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.invoiceDetails,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.invoiceDetails.id}`,
        body: this.invoiceDetails,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.invoiceDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.invoiceDetails.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.invoiceDetails = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.invoiceDetails)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    async setItem(){
      if(!this.invoiceDetails.itemId) return;
       await this.$store.dispatch("lookup/item/getItem", this.invoiceDetails.itemId);
       let item = this.$store.state.lookup.item.item;
       this.invoiceDetails.unitCost = item.unitCost;
       this.invoiceDetails.unitPrice = item.unitPrice;
       this.itemUnitMeasures = item.measureGroup.measureRelation;
       let basicUnitMeasure = this.itemUnitMeasures.filter(itm=>itm.basic===true);
       let defaultInvoicingMeasures = this.itemUnitMeasures.filter(itm=>itm.defaultUsage==="Invoicing");
       let defaultInvoicingMeasure = defaultInvoicingMeasures.length>0?defaultInvoicingMeasures[0]:'basicUnitMeasure'[0];

       this.invoiceDetails.unitMeasure = basicUnitMeasure.length>0?basicUnitMeasure[0].measureName:"";
       this.invoiceDetails.measureObj = defaultInvoicingMeasure
       this.invoiceDetails.measure = this.invoiceDetails.measureObj.measureName
       this.invoiceDetails.measureSize = this.invoiceDetails.measureObj.measureSize;
    },
    calcQuantity(){
    this.invoiceDetails.quantity = this.invoiceDetails.measureQuantity*this.invoiceDetails.measureSize;
    this.calcAmount();
  },

  calcAmount(){
    this.invoiceDetails.amount = (this.invoiceDetails.quantity* this.invoiceDetails.unitPrice)-this.invoiceDetails.discount;
  }
  },
  
};
</script>
