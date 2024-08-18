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
    <template slot="heading">Bank Transfer</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="From Account Type"
          v-model="bankTransfer.fromAccountType"
          :rules="fromAccountTypeRules"
          :counter="100"
          :items="$store.state.banking.bankAccountTypes"
          :loading="$store.state.banking.bankAccountTypesLoading"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="From Account"
          v-model="bankTransfer.fromAccount"
          :rules="fromAccountRules"
          :counter="100"
          :items="$store.state.banking.bankaccount.fromBankAccountsByType"
          :loading="
            $store.state.banking.bankaccount.fromBankAccountsByTypeLoading
          "
          item-text="bankAccountName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="From Currency"
          v-model="bankTransfer.fromCurrency"
          disabled
        ></v-text-field>
      </v-col>

     

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="From Balance"
          v-model="bankTransfer.fromBalance"
          :disabled="true"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount Tendered"
          v-model="bankTransfer.amountTendered"
          :rules="amountTenderedRules"
          :counter="100"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount"
          v-model="bankTransfer.amount"
          :rules="amountRules"
          :disabled="true"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="To Account Type"
          v-model="bankTransfer.toAccountType"
          :rules="toAccountTypeRules"
          :counter="100"
          :items="$store.state.banking.bankAccountTypes"
          :loading="$store.state.banking.bankAccountTypesLoading"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="To Account"
          v-model="bankTransfer.toAccount"
          :rules="toAccountRules"
          :counter="100"
          :items="$store.state.banking.bankaccount.bankAccountsByType"
          :loading="$store.state.banking.bankaccount.bankAccountsByTypeLoading"
          item-text="bankAccountName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="To Balance"
          v-model="bankTransfer.toBalance"
          :disabled="true"
        ></s-number-input>
      </v-col>


      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Exchange Rate"
          v-model="bankTransfer.exchangeRate"
          :rules="exchangeRateRules"
          :disabled="true"
        ></s-number-input>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="To Currency"
          v-model="bankTransfer.toCurrency"
          disabled
        ></v-text-field>
      </v-col>
      
      
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          label="Transfer Date"
          v-model="bankTransfer.transferDate"
          :rules="transferDateRules"
      /></v-col>
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Transfer Charge"
          v-model="bankTransfer.transferCharge"
        ></s-number-input>
      </v-col>
      
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-textarea
          label="Notes"
          v-model="bankTransfer.notes"
          :rules="notesRules"
          :counter="200"
          rows="1"
          auto-grow
        ></v-textarea>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Reference No"
          v-model="bankTransfer.referenceNo"
          :rules="referenceNoRules"
          :counter="100"
        ></v-text-field>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import bankTransferModel from "./BankTransferModel";
export default {
  components: {},
  name: "BankTransfer",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1200,
    path: bankTransferModel.path,
    bankTransfer: bankTransferModel.bankTransfer,
    fromAccountTypeRules: [(v) => !!v || "From Account Type is required"],
    fromAccountRules: [(v) => !!v || "From Account is required"],
    fromCurrencyIdRules: [(v) => !!v || "From Currency is required"],
    toAccountTypeRules: [(v) => !!v || "To Account Type is required"],
    toAccountRules: [(v) => !!v || "To Account is required"],
    toCurrencyIdRules: [(v) => !!v || "To Currency is required"],
    referenceNoRules: [
      (v) =>
        v.length < 100 || "Reference No length must be less or equal to 100",
    ],
    exchangeRateRules: [(v) => !!v || "Exchange Rate is required"],
    amountTenderedRules: [(v) => !!v || "Amount Tendered is required"],
    amountRules: [(v) => !!v || "Amount is required"],
    transferDateRules: [(v) => !!v || "Transfer Date is required"],
    notesRules: [
      (v) => v.length < 200 || "Notes length must be less or equal to 200",
    ],
  }),
  created() {
    this.$store.dispatch("banking/getBankAccountTypes");
  },
  computed: {
    fromAccountType() {
      return this.bankTransfer.fromAccountType;
    },

    toAccountType() {
      return this.bankTransfer.toAccountType;
    },

    fromAccount() {
      return this.bankTransfer.fromAccount;
    },
    toAccount() {
      return this.bankTransfer.toAccount;
    },
    amountTendered() {
      return this.bankTransfer.amountTendered;
    },
    amount() {
      return this.bankTransfer.amount;
    },
  },

  watch: {
    fromAccountType() {
      if(this.fromAccountType){
      this.$store.dispatch(
        "banking/bankaccount/getFromBankAccountsByType",
        this.fromAccountType
      );
      }
    },
    toAccountType() {
      if(this.toAccountType){
      this.$store.dispatch(
        "banking/bankaccount/getBankAccountsByType",
        this.toAccountType
      );
      }
    },

    toAccount() {
      if(this.toAccount){
      this.bankTransfer.toCurrency = this.toAccount.currency;
      this.bankTransfer.toBalance = this.toAccount.balance;
      }
    },
    async fromAccount() {
      if(this.fromAccount){
      this.bankTransfer.fromCurrency = this.fromAccount.currency;
      this.bankTransfer.fromBalance = this.fromAccount.balance;
      await this.setExchangeRate();
    }
    },
    amountTendered() {
      this.calculateAmount();
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.bankTransfer,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.bankTransfer.id}`,
        body: this.bankTransfer,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.bankTransfer = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.bankTransfer.clear();
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.bankTransfer = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.bankTransfer)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    async setExchangeRate() {
      await this.$store.dispatch(
        "get",
        `currencies/${this.fromAccount.currencyId}`
      );
      var obj = this.$store.state.obj;
      this.bankTransfer.exchangeRate = obj.buying;
      this.calculateAmount();
    },
    calculateAmount() {
      if (
        !(this.bankTransfer.amountTendered || this.bankTransfer.exchangeRate)
      ) {
        this.bankTransfer.amount = 0;
      } else {
        let amt = this.bankTransfer.amountTendered;
        amt = amt.toString().replace(/[,]/g, "");
        let exr = this.bankTransfer.exchangeRate;
        exr = exr.toString().replace(/[,]/g, "");
        this.bankTransfer.amount = amt * exr;
      }
    },
  },
};
</script>
