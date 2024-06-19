<template>
  <crud-form
    @save="save"
    @update="update"
    @search="search"
    @updateDialog="updateDialog"
    @reset="reset"
    :path="path"
    :maxWidth="maxWidth"
  >
    <template slot="heading">Journal</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Financial Period"
          v-model="journal.financialPeriod"
          :rules="financialPeriodRules"
          :counter="100"
          required
          :items="$store.state.posting.financialperiod.mini"
          item-text="description"
          item-value="id"
          return-object
        ></v-select>
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
              v-model="journal.tranDate"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="journal.tranDate"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker> </v-menu
      ></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Description"
          v-model="journal.description"
          :rules="descriptionRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Document Type"
          v-model="journal.documentType"
          :rules="documentTypeRules"
          :counter="100"
          required
          :items="$store.state.lookup.documentTypes"
         
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Document No"
          v-model="journal.documentNo"
          :rules="documentNoRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Reference No"
          v-model="journal.referenceNo"
          :rules="referenceNoRules"
          :counter="100"
          required
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Currency"
          v-model="journal.currencyObj"
          :rules="currencyIdRules"
          :counter="100"
          required
          :items="$store.state.organisation.currency.mini"
          item-text="currency"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Base Amount"
          v-model="journal.baseAmount"
          :counter="100"
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Exchange Rate"
          v-model="journal.exchangeRate"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Amount"
          v-model="journal.amount"
          :counter="100"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Amount Words"
          v-model="journal.amountWords"
          :rules="amountWordsRules"
          :counter="200"
          required
          disabled
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>

       <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Balance"
          v-model="balance"
          required
          :rules="balanceRules"
          disabled
          :append-icon="icon"
        ></v-text-field>
      </v-col>
      
      <v-col cols="12">
        <crud-table
          title="Journal Details"
          :headers="journalDetailsNav.menu.editHeaders"
          :items="journal.journalDetails"
          :component="journalDetailsNav.menu.component"
          maxWidth="700px"
        />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import journalModel from "./JournalModel";
import CrudForm from "../../components/CrudForm.vue";
import CrudTable from "../../components/CrudTable.vue";
import journalDetailsNav from "../journaldetails/JournalDetailsNav.js";
import funcs from "../../utils/funcs";
export default {
  components: { CrudForm, CrudTable },
  name: "Journal",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1200,
    path: journalModel.path,
    journal: journalModel.journal,
    journalDetailsNav: journalDetailsNav,
    financialPeriodRules: [(v) => !!v || "Financial Period is required"],
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        v.length < 100 || "Description length must be less or equal to 100",
    ],
    documentTypeRules: [(v) => !!v || "Document Type is required"],
    documentNoRules: [
      (v) => !!v || "Document No is required",
      (v) =>
        v.length < 100 || "Document No length must be less or equal to 100",
    ],
    referenceNoRules: [
      (v) => !!v || "Reference No is required",
      (v) =>
        v.length < 100 || "Reference No length must be less or equal to 100",
    ],
    currencyIdRules: [(v) => !!v || "Currency is required"],
    amountWordsRules: [
      (v) => !!v || "Amount Words is required",
      (v) =>
        v.length < 200 || "Amount Words length must be less or equal to 200",
    ],
    balanceRules: [(v) => v===0|| "Total Debits must be equal to total credits"],
  
    menu: false,
  }),
  created() {
    this.$store.dispatch("posting/financialperiod/getMini");
    this.$store.dispatch("lookup/getDocumentTypes");
    this.$store.dispatch("organisation/currency/getMini");
    this.$store.dispatch("lookup/getJournalTypes");
    this.$store.dispatch("lookup/getEntryModes");
  },
  computed: {
    setWords() {
      return funcs.toWords(20000);
    },
    amount() {
      return this.journal.amount;
    },

    currencyObj() {
      return this.journal.currencyObj;
    },

    baseAmount() {
      return this.journal.baseAmount;
    },
    journalDetails() {
      return this.journal.journalDetails;
    },

    balance(){
       let credits = this.journal.journalDetails
        .filter((jd) => jd.accountAction == "Credit")
        .map((a) => a.amount)
        .map(Number)
        .reduce((a, b) => a + b, 0);

        return this.journal.baseAmount-credits;
    },
    icon(){
      return this.balance===0?"mdi-check": "";
    }
  },

  watch: {
    journalDetails() {
      this.journal.baseAmount = this.journal.journalDetails
        .filter((jd) => jd.accountAction == "Debit")
        .map((a) => a.amount)
        .map(Number)
        .reduce((a, b) => a + b, 0);
    },
    amount() {
      this.journal.amountWords = funcs.toWords(this.journal.amount);
    },
    currencyObj() {
      this.journal.currencyId = this.currencyObj.id;
      this.journal.exchangeRate = this.currencyObj.buying;
      this.journal.amount = this.journal.exchangeRate * this.journal.baseAmount;
    },
    baseAmount() {
      let amount = this.journal.exchangeRate * this.journal.baseAmount;
      this.journal.amount = amount < 0 ? 0 : amount;
    },
    
  },

  methods: {
    save() {
      this.modify();
      this.$store.dispatch("post", { path: this.path, body: this.journal });
    },
    update() {
      this.modify();
      this.$store.dispatch("put", {
        path: `${this.path}/${this.journal.id}`,
        body: this.journal,
      });
    },
    modify() {
      this.journal.entryMode = 'Manual';
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.journal = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.journal.clear();
    },
    setObjects(obj) {
      console.log("Obj", obj);
      // this.journal.currencyObj = {id: obj.currencyId, currency: obj.currency};
      let currencies =  this.$store.state.organisation.currency.mini.filter(item=>item.id===obj.currencyId);
    
      this.journal.currencyObj = currencies[0];
      console.log("Why doesn't it work");
    },
    setDialog(obj) {
      this.journal = Object.assign({}, obj);
      this.setObjects(obj);
    },

    setToWords(value) {
      this.journal.amountWords = funcs.toWords(value);
    },
  },
};
</script>
