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
    <template slot="heading">WriteOffInvoice</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Write Off"
          v-model="writeOffInvoice.writeOff"
 :rules="writeOffRules"
:counter="100"
:items="$store.state.sales.writeoff.mini"
:loading="$store.state.sales.writeoff.miniLoading"
item-text="writeOffName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Invoice"
          v-model="writeOffInvoice.invoice"
 :rules="invoiceRules"
:counter="100"
:items="$store.state.sales.invoice.mini"
:loading="$store.state.sales.invoice.miniLoading"
item-text="invoiceName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Amount"
          v-model="writeOffInvoice.amount"
 :rules="amountRules"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import writeOffInvoiceModel from "./WriteOffInvoiceModel";
export default {
  components: {  },
  name: "WriteOffInvoice",
data: () => ({
    cols: 12,
    sm:6,
       md: 4,
       maxWidth:700,
path: writeOffInvoiceModel.path,
    writeOffInvoice: writeOffInvoiceModel.writeOffInvoice,
writeOffRules: [(v) => !!v || "Write Off is required",
 ],invoiceRules: [(v) => !!v || "Invoice is required",
 ],amountRules: [(v) => !!v || "Amount is required",
 ],  }),
 created() {this.$store.dispatch("sales/writeoff/getMini");
this.$store.dispatch("sales/invoice/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.writeOffInvoice});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.writeOffInvoice.id}`,body: this.writeOffInvoice});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.writeOffInvoice = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.writeOffInvoice.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.writeOffInvoice = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.writeOffInvoice)
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
