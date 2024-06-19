<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Journal</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Financial Period Id" v-model="journal.financialPeriodId" :rules="financialPeriodIdRules"
          :counter="20" disabled></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Tran Date" v-model="journal.tranDate" :rules="tranDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Description" v-model="journal.description" :rules="descriptionRules" :counter="200" rows="1"
          auto-grow></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Reference No" v-model="journal.referenceNo" :counter="100"></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Currency" v-model="journal.currencyObj" :rules="currencyObjRules" :counter="20"
          :items="$store.state.lookup.currency.mini" :loading="$store.state.lookup.currency.miniLoading"
          item-text="currency" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Base Amount" v-model="journal.baseAmount" :rules="baseAmountRules"
          :counter="100" :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Exchange Rate" v-model="journal.exchangeRate" :rules="exchangeRateRules"
          :counter="100" :disabled="true"></s-number-input >
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="journal.amount" :rules="amountRules" :counter="100" :disabled="true"></s-number-input>
      </v-col>
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Amount Words" v-model="journal.amountWords" :rules="amountWordsRules" :counter="200" rows="1"
          auto-grow :disabled="true"></v-textarea>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-checkbox label="Balanced" v-model="balanced" :rules="balancedRules"  :disabled="true"></v-checkbox>
      </v-col>

      <v-col cols="12">
        <crud-table title="Journal Details" :headers="journalDetailsNav.menu.editHeaders"
          :items="journal.journalDetails" :component="journalDetailsNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import journalModel from "./JournalModel";
import CrudTable from "../../components/CrudTable.vue";
import journalDetailsNav from '../journaldetails/JournalDetailsNav.js';
import funcs from "../../utils/funcs";
export default {
  components: { CrudTable },
  name: "Journal",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: journalModel.path,
    journal: journalModel.journal,
    journalDetailsNav: journalDetailsNav,
    financialPeriodIdRules: [(v) => !!v || "Financial Period Id is required",
    (v) => v.length < 20 || "Financial Period Id length must be less or equal to 20",],
    tranDateRules: [(v) => !!v || "Tran Date is required",
    ], descriptionRules: [(v) => !!v || "Description is required",
    (v) => v.length < 200 || "Description length must be less or equal to 200",],
    referenceNoRules: [(v) => !!v || "Reference No is required",
    (v) => v.length < 100 || "Reference No length must be less or equal to 100",],
    currencyObjRules: [(v) => !!v || "Currency is required",
    ], baseAmountRules: [(v) => !!v || "Base Amount is required",
    ], exchangeRateRules: [(v) => !!v || "Exchange Rate is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ], amountWordsRules: [(v) => !!v || "Amount Words is required",
    (v) => v.length < 200 || "Amount Words length must be less or equal to 200",],
    postStatusRules: [(v) => !!v || "Post Status is required",
    ],
    journalDetailsRules: [(v) => !!v || "Journal Details is required",
    ],
    balancedRules: [(v) => !!v || "Total Debits must be equal to Total Credits",
    ],
    balanced: false,
  }),
  created() {
    this.$store.dispatch("lookup/currency/getMini");
    this.$store.dispatch("accounting/financialperiod/getActiveFinancialPeriod");
  },
  mounted() {
    this.setDefaultCurrency();
  },
  computed: {
    activeFinancialPeriod() {
      return this.$store.state.accounting.financialperiod.activeFinancialPeriod;
    },

    currencies() {
      return this.$store.state.lookup.currency.mini;

    },

    currencyObj() {
      return this.journal.currencyObj;
    },

    journalDetails(){
      return this.journal.journalDetails;
    },

    
    exchangeRate(){
      let exchangeRate  = this.journal.exchangeRate;
      return exchangeRate!==null?Number(this.journal.exchangeRate):0;
     
    }


  },

  watch: {
    activeFinancialPeriod() {
      if (this.activeFinancialPeriod)
        this.journal.financialPeriodId = this.activeFinancialPeriod.id;
    },

    currencies() {
      this.setDefaultCurrency()

    },

    currencyObj() {
      if (this.currencyObj) {
        this.journal.currencyId = this.currencyObj.id;
        this.journal.exchangeRate = this.currencyObj.buying;
      }
    },

    journalDetails(){
      this.calculateAmount();
    },

    exchangeRate(){
      this.calculateAmount();
    }

  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.journal });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.journal.id}`, body: this.journal });
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
      this.setDefaultCurrency();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.journal = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit(
      //   "crudtable/data", Object.assign({}, this.journal)
      // );
    },
    updateCrudTableDialog() {
      // this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      // this.reset();
    },

    calculateAmount() {
      let totalBaseAmount = 0
      let totalDebits = 0;
      let totalCredits = 0
      let exchangeRate = this.exchangeRate;
     

      for (let journalDetails of this.journal.journalDetails) {
        let baseAmount = Number(journalDetails.baseAmount)
        let amount =  baseAmount*exchangeRate;
        journalDetails.amount = amount;
        if (journalDetails.accountAction == "Debit"
        ) {
          totalBaseAmount+=baseAmount;
          totalDebits += amount;
        } else if (journalDetails.accountAction =="Credit") {
          totalCredits +=amount;
        }

      }

      this.journal.amount = totalDebits;
      this.journal.baseAmount = totalBaseAmount;
      this.journal.amount = totalDebits
      this.journal.amountWords = funcs.toWords(totalDebits);
      this.balanced = (totalDebits === totalCredits);
      
    },

    setDefaultCurrency() {
      let defaultCurrency = this.$store.state.lookup.currency.defaultCurrency;
       this.journal.currencyObj = defaultCurrency;
      
    },
  }
};
</script>
