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
    :showPrintPrompt="showPrintPrompt"    @print="print"  >
    <template slot="heading">Creditor Ledger</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 id="creditorId" label="Creditor Id"
          v-model="creditorLedger.creditorId"
 :rules="creditorIdRules"
:counter="20"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 id="creditorName" label="CreditorName"
          v-model="creditorLedger.creditorName"
 :rules="creditorNameRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker id="tranDate" label="TranDate"
          v-model="creditorLedger.tranDate"
 :rules="tranDateRules"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select id="documentType" label="DocumentType"
          v-model="creditorLedger.documentType"
 :rules="documentTypeRules"
:counter="100"
:items="$store.state.creditor.documentTypes"
:loading="$store.state.creditor.documentTypesLoading"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 id="documentNo" label="DocumentNo"
          v-model="creditorLedger.documentNo"
 :rules="documentNoRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 id="description" label="Description"
          v-model="creditorLedger.description"
 :rules="descriptionRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="amount" label="Amount"
          v-model="creditorLedger.amount"
 :rules="amountRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="debit" label="Debit"
          v-model="creditorLedger.debit"
 :rules="debitRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="credit" label="Credit"
          v-model="creditorLedger.credit"
 :rules="creditRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 id="balance" label="Balance"
          v-model="creditorLedger.balance"
 :rules="balanceRules"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import creditorLedgerModel from "./CreditorLedgerModel";
export default {
  components: {  },
  name: "CreditorLedger",
data: () => ({
    cols: 12,
    sm:6,
       md: 3,
       maxWidth:1000,
path: creditorLedgerModel.path,
    creditorLedger: creditorLedgerModel.creditorLedger,
creditorIdRules: [(v) => !!v || "Creditor Id is required",
(v) => v.length < 20 || "Creditor Id length must be less or equal to 20", ],creditorNameRules: [(v) => !!v || "CreditorName is required",
(v) => v.length < 100 || "CreditorName length must be less or equal to 100", ],tranDateRules: [(v) => !!v || "TranDate is required",
 ],documentTypeRules: [(v) => !!v || "DocumentType is required",
 ],documentNoRules: [(v) => !!v || "DocumentNo is required",
(v) => v.length < 100 || "DocumentNo length must be less or equal to 100", ],descriptionRules: [(v) => !!v || "Description is required",
(v) => v.length < 100 || "Description length must be less or equal to 100", ],amountRules: [(v) => !!v || "Amount is required",
 ],debitRules: [(v) => !!v || "Debit is required",
 ],creditRules: [(v) => !!v || "Credit is required",
 ],balanceRules: [(v) => !!v || "Balance is required",
 ],

showPrintPrompt: true,  }),
 created() {this.$store.dispatch("creditor/getDocumentTypes");
},
computed: {
documentType(){
      return this.creditorLedger.documentType;
    },

},

watch: {
documentType(){
if(this.documentType){       this.creditorLedger.documentTypeId =this.documentType.id;
    }
},

},
methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.creditorLedger});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.creditorLedger.id}`,body: this.creditorLedger});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.creditorLedger = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.creditorLedger.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.creditorLedger = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.creditorLedger)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    },
print(){let data = [];
data.push({ text: "Creditor Id", value: this.creditorLedger.creditorId });
data.push({ text: "CreditorName", value: this.creditorLedger.creditorName });
data.push({ text: "TranDate", value: this.creditorLedger.tranDate });
data.push({ text: "DocumentType", value: this.creditorLedger.documentType });
data.push({ text: "DocumentNo", value: this.creditorLedger.documentNo });
data.push({ text: "Description", value: this.creditorLedger.description });
data.push({ text: "Amount", value: this.creditorLedger.amount });
data.push({ text: "Debit", value: this.creditorLedger.debit });
data.push({ text: "Credit", value: this.creditorLedger.credit });
data.push({ text: "Balance", value: this.creditorLedger.balance });

 let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Creditor Ledger"

      }

      this.makePDFDocument(options);},
}};
</script>
