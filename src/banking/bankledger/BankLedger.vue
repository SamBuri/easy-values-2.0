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
    <template slot="heading">Bank Ledger</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Bank Account Id"
          v-model="bankLedger.bankAccountId"
 :rules="bankAccountIdRules"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Bank Account Name"
          v-model="bankLedger.bankAccountName"
 :rules="bankAccountNameRules"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Document Type"
          v-model="bankLedger.documentType"
 :rules="documentTypeRules"
:counter="100"          required
:items="$store.state.lookup.documentTypes"
          ></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Document No"
          v-model="bankLedger.documentNo"
 :rules="documentNoRules"
:counter="100"          required
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
          v-model="bankLedger.tranDate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="bankLedger.tranDate"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker>
        </v-menu></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Description"
          v-model="bankLedger.description"
 :rules="descriptionRules"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Amount"
          v-model="bankLedger.amount"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Debit"
          v-model="bankLedger.debit"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Credit"
          v-model="bankLedger.credit"
:counter="100"          required
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Balance"
          v-model="bankLedger.balance"
:counter="100"          required
></v-text-field>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import bankLedgerModel from "./BankLedgerModel";
import CrudForm from "../../components/CrudForm.vue";
export default {
  components: { CrudForm },
  name: "BankLedger",
data: () => ({
    cols: 12,
    sm:6,
       md: 3,
       maxWidth:1000,
path: bankLedgerModel.path,
    bankLedger: bankLedgerModel.bankLedger,
bankAccountIdRules: [(v) => !!v || "Bank Account Id is required",
(v) => v.length < 100 || "Bank Account Id length must be less or equal to 100", ],bankAccountNameRules: [(v) => !!v || "Bank Account Name is required",
(v) => v.length < 100 || "Bank Account Name length must be less or equal to 100", ],documentTypeRules: [(v) => !!v || "Document Type is required",
 ],documentNoRules: [(v) => !!v || "Document No is required",
(v) => v.length < 100 || "Document No length must be less or equal to 100", ],descriptionRules: [(v) => !!v || "Description is required",
(v) => v.length < 100 || "Description length must be less or equal to 100", ],  }),
 created() {this.$store.dispatch("lookup/getDocumentTypes");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.bankLedger});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.bankLedger.id}`,body: this.bankLedger});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.bankLedger = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.bankLedger.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.bankLedger = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.bankLedger)
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
