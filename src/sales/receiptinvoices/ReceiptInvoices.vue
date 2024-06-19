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
    <template slot="heading">ReceiptInvoices</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Receipt"
          v-model="receiptInvoices.receipt"
 :rules="receiptRules"
:counter="100"          required
:items="$store.state.sales.receipt.mini"
item-text="receiptName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Invoice"
          v-model="receiptInvoices.invoice"
 :rules="invoiceRules"
:counter="100"          required
:items="$store.state.sales.invoice.mini"
item-text="invoiceName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Amount"
          v-model="receiptInvoices.amount"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Amount Refunded"
          v-model="receiptInvoices.amountRefunded"
:counter="100"          required
></v-text-field>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import receiptInvoicesModel from "./ReceiptInvoicesModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "ReceiptInvoices",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: receiptInvoicesModel.path,
    receiptInvoices: receiptInvoicesModel.receiptInvoices,
receiptRules: [(v) => !!v || "Receipt is required",
 ],invoiceRules: [(v) => !!v || "Invoice is required",
 ],  }),
 created() {this.$store.dispatch("sales/receipt/getMini");
this.$store.dispatch("sales/invoice/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.receiptInvoices});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.receiptInvoices.id}`,body: this.receiptInvoices});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.receiptInvoices = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.receiptInvoices.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.receiptInvoices = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.receiptInvoices)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    }
}};
</script>
