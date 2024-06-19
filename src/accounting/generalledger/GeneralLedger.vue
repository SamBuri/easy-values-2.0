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
    <template slot="heading">General Ledger</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Financial Period Id"
          v-model="generalLedger.financialPeriodId"
 :rules="financialPeriodIdRules"
:counter="20"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Document Type"
          v-model="generalLedger.documentType"
 :rules="documentTypeRules"
:counter="100"
:items="$store.state.accounting.documentTypes"
:loading="$store.state.accounting.documentTypesLoading"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Document No"
          v-model="generalLedger.documentNo"
 :rules="documentNoRules"
:counter="20"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Account Id"
          v-model="generalLedger.accountId"
 :rules="accountIdRules"
:counter="20"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Account Name"
          v-model="generalLedger.accountName"
 :rules="accountNameRules"
:counter="40"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Account  Type"
          v-model="generalLedger.accountType"
 :rules="accountTypeRules"
:counter="40"
:items="$store.state.accounting.accounttypes.mini"
:loading="$store.state.accounting.accounttypes.miniLoading"
item-text="accountTypesName"
          item-value="id"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker label="Tran Date"
          v-model="generalLedger.tranDate"
 :rules="tranDateRules"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-textarea
 label="Description"
          v-model="generalLedger.description"
 :rules="descriptionRules"
:counter="200"
rows="1"
           auto-grow></v-textarea>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Amount"
          v-model="generalLedger.amount"
 :rules="amountRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Debit"
          v-model="generalLedger.debit"
 :rules="debitRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Credit"
          v-model="generalLedger.credit"
 :rules="creditRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Balance"
          v-model="generalLedger.balance"
 :rules="balanceRules"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import generalLedgerModel from "./GeneralLedgerModel";
export default {
  components: {  },
  name: "GeneralLedger",
data: () => ({
    cols: 12,
    sm:6,
       md: 3,
       maxWidth:1000,
path: generalLedgerModel.path,
    generalLedger: generalLedgerModel.generalLedger,
financialPeriodIdRules: [(v) => !!v || "Financial Period Id is required",
(v) => v.length < 20 || "Financial Period Id length must be less or equal to 20", ],documentTypeRules: [(v) => !!v || "Document Type is required",
 ],documentNoRules: [(v) => !!v || "Document No is required",
(v) => v.length < 20 || "Document No length must be less or equal to 20", ],accountIdRules: [(v) => !!v || "Account Id is required",
(v) => v.length < 20 || "Account Id length must be less or equal to 20", ],accountNameRules: [(v) => !!v || "Account Name is required",
(v) => v.length < 40 || "Account Name length must be less or equal to 40", ],accountTypeRules: [(v) => !!v || "Account  Type is required",
 ],tranDateRules: [(v) => !!v || "Tran Date is required",
 ],descriptionRules: [(v) => !!v || "Description is required",
(v) => v.length < 200 || "Description length must be less or equal to 200", ],amountRules: [(v) => !!v || "Amount is required",
 ],debitRules: [(v) => !!v || "Debit is required",
 ],creditRules: [(v) => !!v || "Credit is required",
 ],balanceRules: [(v) => !!v || "Balance is required",
 ],  }),
 created() {this.$store.dispatch("accounting/getDocumentTypes");
this.$store.dispatch("accounting/accounttypes/getMini");
},
  computed: {},

  watch: {},

methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.generalLedger});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.generalLedger.id}`,body: this.generalLedger});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.generalLedger = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.generalLedger.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.generalLedger = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.generalLedger)
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
