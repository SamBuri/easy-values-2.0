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
    <template slot="heading">Customer Ledger</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Customer Id"
          v-model="customerLedger.customerId"
 :rules="customerIdRules"
:counter="20"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Customer Name"
          v-model="customerLedger.customerName"
 :rules="customerNameRules"
:counter="40"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
 label="Tran Date"
          v-model="customerLedger.tranDate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="customerLedger.tranDate"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker>
        </v-menu></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Document Type"
          v-model="customerLedger.documentType"
 :rules="documentTypeRules"
:counter="100"          required
:items="$store.state.customer.documentTypes"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Document No"
          v-model="customerLedger.documentNo"
 :rules="documentNoRules"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Description"
          v-model="customerLedger.description"
 :rules="descriptionRules"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Amount"
          v-model="customerLedger.amount"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Debit"
          v-model="customerLedger.debit"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Credit"
          v-model="customerLedger.credit"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Balance"
          v-model="customerLedger.balance"
:counter="100"          required
></v-text-field>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import customerLedgerModel from "./CustomerLedgerModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "CustomerLedger",
data: () => ({
    cols: 12,
    sm:6,
       md: 3,
       maxWidth:1000,
path: customerLedgerModel.path,
    customerLedger: customerLedgerModel.customerLedger,
customerIdRules: [(v) => !!v || "Customer Id is required",
(v) => v.length < 20 || "Customer Id length must be less or equal to 20", ],customerNameRules: [(v) => !!v || "Customer Name is required",
(v) => v.length < 40 || "Customer Name length must be less or equal to 40", ],documentTypeRules: [(v) => !!v || "Document Type is required",
 ],documentNoRules: [(v) => !!v || "Document No is required",
(v) => v.length < 100 || "Document No length must be less or equal to 100", ],descriptionRules: [(v) => !!v || "Description is required",
(v) => v.length < 100 || "Description length must be less or equal to 100", ],  }),
 created() {this.$store.dispatch("customer/getDocumentTypes");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.customerLedger});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.customerLedger.id}`,body: this.customerLedger});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.customerLedger = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.customerLedger.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.customerLedger = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.customerLedger)
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
