<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Expense</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Tran Date" v-model="expense.tranDate" :rules="tranDateRules" /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account Type" v-model="expense.bankAccountType" :rules="bankAccountTypeRules" :counter="100"
          :items="$store.state.banking.bankAccountTypes" :loading="$store.state.banking.bankAccountTypesLoading"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Bank Account" v-model="expense.bankAccountId" :rules="bankAccountIdRules" :counter="20"
          :items="$store.state.banking.bankaccount.bankAccountsByType"
          :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading" item-text="bankAccountName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Base Amount" v-model="expense.baseAmount" :rules="baseAmountRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Currency" v-model="expense.currencyObj" :rules="currencyIdRules" :counter="100"
          :items="$store.state.lookup.currency.mini" :loading="$store.state.lookup.currency.miniLoading"
          item-text="currency" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Exchange Rate" v-model="expense.exchangeRate" :rules="exchangeRateRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="expense.amount" :rules="amountRules" :counter="100"
          :disabled="true"></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Amount Words" v-model="expense.amountWords" :rules="amountWordsRules" :counter="200" rows="1"
          auto-grow disabled></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea label="Description" v-model="expense.description" :rules="descriptionRules" :counter="200" rows="1"
          auto-grow></v-textarea>
      </v-col>
      <v-col cols="12">
        <crud-table title="Expense Details" :headers="expenseDetailsNav.menu.editHeaders" :items="expense.expenseDetails"
          :component="expenseDetailsNav.menu.component" maxWidth="700px" />
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import expenseModel from "./ExpenseModel";
import CrudTable from "../../components/CrudTable.vue";
import expenseDetailNav from '../expensedetail/ExpenseDetailNav.js';
import funcs from "../../utils/funcs";

export default {
  components: { CrudTable },
  name: "Expense",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    path: expenseModel.path,
    expense: expenseModel.expense,
    expenseDetailsNav: expenseDetailNav,
    tranDateRules: [(v) => !!v || "Tran Date is required",
    ], bankAccountTypeRules: [(v) => !!v || "Bank AccountType is required",
    ], bankAccountIdRules: [(v) => !!v || "Bank Account is required",
    ], baseAmountRules: [(v) => !!v || "Amount Tendered is required",
    ], currencyIdRules: [(v) => !!v || "Currency is required",
    ], exchangeRateRules: [(v) => !!v || "Exchange Rate is required",
    ], amountRules: [(v) => !!v || "Amount is required",
    ], amountWordsRules: [(v) => !!v || "Amount Words is required",
    (v) => v.length < 200 || "Amount Words length must be less or equal to 200",], descriptionRules: [(v) => !!v || "Description is required",
    (v) => v.length < 200 || "Description length must be less or equal to 200",], expenseDetailsRules: [(v) => !!v || "Expense Details is required",
    ],
  }),
  created() {
    this.$store.dispatch("banking/getBankAccountTypes");
    this.$store.dispatch("lookup/currency/getMini");
  },
  computed: {
    bankAccountType() {
      return this.expense.bankAccountType;
    },

    currencyObj() {
      return this.expense.currencyObj;

    },

    currencies() {
      return this.$store.state.lookup.currency.mini;

    },

    expenseDetails() {
      return this.expense.expenseDetails;
    },



    exchangeRate() {
      let exchangeRate = this.expense.exchangeRate;
      return exchangeRate !== null ? Number(this.expense.exchangeRate) : 0;

    }


  },

  watch: {

    bankAccountType() {
      if (this.bankAccountType) {
        this.$store.dispatch("banking/bankaccount/getBankAccountsByType", this.bankAccountType
        );
      }
    },

    currencyObj() {
      if (this.currencyObj) {
        this.expense.currencyId = this.currencyObj.id;
        this.expense.exchangeRate = this.currencyObj.buying;
      }
    },


    currencies() {
      this.setDefaultCurrency();

    },

    expenseDetails() {
      this.calculateAmount();
    },

    exchangeRate() {
      this.calculateAmount();
    }


  },

  methods: {
    save() {
      this.$store.dispatch("post", { path: this.path, body: this.expense });
    },
    update() {
      this.$store.dispatch("put", { path: `${this.path}/${this.expense.id}`, body: this.expense });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.expense = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.expense.clear();
    },
    setObjects(obj) {
      console.log(obj);
    }, setDialog(obj) {
      this.expense = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      // this.$store.commit(
      //   "crudtable/data",
      //   Object.assign({}, this.expense)
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
      let totalAmount = 0;

      let exchangeRate = this.exchangeRate;


      for (let expenseDetails of this.expense.expenseDetails) {
        let baseAmount = Number(expenseDetails.baseAmount)
        let baseUnitCost = Number(expenseDetails.baseUnitCost)
        let amount = baseAmount * exchangeRate;
        expenseDetails.unitCost = baseUnitCost * exchangeRate;
        expenseDetails.amount = amount;

        totalBaseAmount += baseAmount
        totalAmount += amount;
       
        
      }

      this.expense.amount = totalAmount;
      this.expense.baseAmount = totalBaseAmount;
      this.expense.amountWords = funcs.toWords(totalAmount);
      console.log("Total Amount: ", totalAmount);

    },

    setDefaultCurrency() {
      let defaultCurrency = this.$store.state.lookup.currency.defaultCurrency;
      this.expense.currencyObj = defaultCurrency;

    },

  }
};
</script>
