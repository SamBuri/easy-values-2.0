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
    <template slot="heading">RefundReceiptInvoice</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Refund"
          v-model="refundReceiptInvoice.refund"
 :rules="refundRules"
:counter="100"
:items="$store.state.sales.refund.mini"
:loading="$store.state.sales.refund.miniLoading"
item-text="refundName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Receipt Invoice"
          v-model="refundReceiptInvoice.receiptInvoice"
 :rules="receiptInvoiceRules"
:counter="100"
:items="$store.state.sales.receiptinvoice.mini"
:loading="$store.state.sales.receiptinvoice.miniLoading"
item-text="receiptInvoiceName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Amount"
          v-model="refundReceiptInvoice.amount"
 :rules="amountRules"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import refundReceiptInvoiceModel from "./RefundReceiptInvoiceModel";
export default {
  components: {  },
  name: "RefundReceiptInvoice",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: refundReceiptInvoiceModel.path,
    refundReceiptInvoice: refundReceiptInvoiceModel.refundReceiptInvoice,
refundRules: [(v) => !!v || "Refund is required",
 ],receiptInvoiceRules: [(v) => !!v || "Receipt Invoice is required",
 ],amountRules: [(v) => !!v || "Amount is required",
 ],  }),
 created() {this.$store.dispatch("sales/refund/getMini");
this.$store.dispatch("sales/receiptinvoice/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.refundReceiptInvoice});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.refundReceiptInvoice.id}`,body: this.refundReceiptInvoice});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.refundReceiptInvoice = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.refundReceiptInvoice.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.refundReceiptInvoice = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.refundReceiptInvoice)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    },
}};
</script>
