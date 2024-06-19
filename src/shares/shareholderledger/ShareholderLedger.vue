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
    <template slot="heading">Shareholder Ledger</template>

    <template slot="form-data">
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Shareholder Id"
          v-model="shareholderLedger.shareholderId"
 :rules="shareholderIdRules"
:counter="20"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Shareholder Name"
          v-model="shareholderLedger.shareholderName"
 :rules="shareholderNameRules"
:counter="50"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
 <s-date-picker label="Tran Date"
          v-model="shareholderLedger.tranDate"
 :rules="tranDateRules"
/></v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-select label="Document Type"
          v-model="shareholderLedger.documentType"
 :rules="documentTypeRules"
:counter="100"
:items="$store.state.shares.documentTypes"
:loading="$store.state.shares.documentTypesLoading"
          return-object
></v-select>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Document No"
          v-model="shareholderLedger.documentNo"
 :rules="documentNoRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Description"
          v-model="shareholderLedger.description"
 :rules="descriptionRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Share Type Id"
          v-model="shareholderLedger.shareTypeId"
 :rules="shareTypeIdRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<v-text-field
 label="Share Type"
          v-model="shareholderLedger.shareType"
 :rules="shareTypeRules"
:counter="100"
></v-text-field>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Quantity"
          v-model="shareholderLedger.quantity"
 :rules="quantityRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Amount"
          v-model="shareholderLedger.amount"
 :rules="amountRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Debit"
          v-model="shareholderLedger.debit"
 :rules="debitRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Credit"
          v-model="shareholderLedger.credit"
 :rules="creditRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Qty Balance"
          v-model="shareholderLedger.qtyBalance"
 :rules="qtyBalanceRules"
:counter="100"
></s-number-input>
</v-col>
<v-col :cols="cols" :sm="sm" :md="md">
<s-number-input
 label="Balance"
          v-model="shareholderLedger.balance"
 :rules="balanceRules"
:counter="100"
></s-number-input>
</v-col>
    </template>
  </crud-form>
</template>
<script>
import shareholderLedgerModel from "./ShareholderLedgerModel";
export default {
  components: {  },
  name: "ShareholderLedger",
data: () => ({
    cols: 12,
    sm:6,
       md: 3,
       maxWidth:1000,
path: shareholderLedgerModel.path,
    shareholderLedger: shareholderLedgerModel.shareholderLedger,
shareholderIdRules: [(v) => !!v || "Shareholder Id is required",
(v) => v.length < 20 || "Shareholder Id length must be less or equal to 20", ],shareholderNameRules: [(v) => !!v || "Shareholder Name is required",
(v) => v.length < 50 || "Shareholder Name length must be less or equal to 50", ],tranDateRules: [(v) => !!v || "Tran Date is required",
 ],documentTypeRules: [(v) => !!v || "Document Type is required",
 ],documentNoRules: [(v) => !!v || "Document No is required",
(v) => v.length < 100 || "Document No length must be less or equal to 100", ],descriptionRules: [(v) => !!v || "Description is required",
(v) => v.length < 100 || "Description length must be less or equal to 100", ],shareTypeIdRules: [(v) => !!v || "Share Type Id is required",
 ],shareTypeRules: [(v) => !!v || "Share Type is required",
(v) => v.length < 100 || "Share Type length must be less or equal to 100", ],quantityRules: [(v) => !!v || "Quantity is required",
 ],amountRules: [(v) => !!v || "Amount is required",
 ],debitRules: [(v) => !!v || "Debit is required",
 ],creditRules: [(v) => !!v || "Credit is required",
 ],qtyBalanceRules: [(v) => !!v || "Qty Balance is required",
 ],balanceRules: [(v) => !!v || "Balance is required",
 ],

showPrintPrompt: true,  }),
 created() {this.$store.dispatch("shares/getDocumentTypes");
},
  computed: {},

watch: {
},
methods: {save() {
      this.$store.dispatch("post", { path: this.path, body: this.shareholderLedger});
    },
update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.shareholderLedger.id}`,body: this.shareholderLedger});
    },
updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
async search() {
      var obj = this.$store.state.obj;
      this.shareholderLedger = Object.assign({}, obj);
      this.setObjects(obj);
    },
reset() {
      this.shareholderLedger.clear();
    },
setObjects(obj){
console.log(obj);
},setDialog(obj) {
this.shareholderLedger = Object.assign({}, obj);
this.setObjects(obj);
},
done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.shareholderLedger)
      );
    },
updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
resetCrudTableDialog() {
      this.reset();
    },
print(){let data = [];
data.push({ text: "Shareholder Id", value: this.shareholderLedger.shareholderId });
data.push({ text: "Shareholder Name", value: this.shareholderLedger.shareholderName });
data.push({ text: "Tran Date", value: this.shareholderLedger.tranDate });
data.push({ text: "Document Type", value: this.shareholderLedger.documentType });
data.push({ text: "Document No", value: this.shareholderLedger.documentNo });
data.push({ text: "Description", value: this.shareholderLedger.description });
data.push({ text: "Share Type Id", value: this.shareholderLedger.shareTypeId });
data.push({ text: "Share Type", value: this.shareholderLedger.shareType });
data.push({ text: "Quantity", value: this.shareholderLedger.quantity });
data.push({ text: "Amount", value: this.shareholderLedger.amount });
data.push({ text: "Debit", value: this.shareholderLedger.debit });
data.push({ text: "Credit", value: this.shareholderLedger.credit });
data.push({ text: "Qty Balance", value: this.shareholderLedger.qtyBalance });
data.push({ text: "Balance", value: this.shareholderLedger.balance });

 let options = {
        data: data,
        startXPos: 10,
        startYPos: 25,
        lineBreak: 4,
        hSpace: 50,
        vSpace: 10,
        title: "Shareholder Ledger"

      }

      this.makePDFDocument(options);},
}};
</script>
