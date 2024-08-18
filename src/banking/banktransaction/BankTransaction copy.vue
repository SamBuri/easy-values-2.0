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
    <template slot="heading">Bank Transaction</template>

    <template slot="form-data">
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Bank Account"
          v-model="bankTransaction.bankAccount"
          :rules="bankAccountRules"
          :counter="100"
          :items="$store.state.banking.bankaccount.mini"
          :loading="$store.state.banking.bankaccount.miniLoading"
          item-text="bankAccountName"
          item-value="id"
          return-object
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Currency"
          v-model="bankTransaction.currency"
          :rules="currencyRules"
          :counter="100"
          disabled
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Balance"
          v-model="bankTransaction.balance"
          :disabled="true"
        ></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker
          label="Tran Date"
          v-model="bankTransaction.tranDate"
          :rules="tranDateRules"
      /></v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select
          label="Account Action"
          v-model="bankTransaction.accountAction"
          :rules="accountActionRules"
          :counter="100"
          :items="$store.state.lookup.accountActions"
          :loading="$store.state.lookup.accountActionsLoading"
        ></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field
          label="Notes"
          v-model="bankTransaction.notes"
          :rules="notesRules"
          :counter="100"
        ></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input
          label="Amount"
          v-model="bankTransaction.amount"
          :rules="amountRules"
          :counter="100"
        ></s-number-input>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import bankTransactionModel from "./BankTransactionModel";
export default {
  components: {},
  name: "BankTransaction",
  data: () => ({
    cols: 12,
    sm: 6,
    md: 4,
    maxWidth: 1000,
    path: bankTransactionModel.path,
    bankTransaction: bankTransactionModel.bankTransaction,
    bankAccountRules: [(v) => !!v || "Bank Account is required"],
    currencyRules: [
      (v) => !!v || "Currency is required",
      (v) => v.length < 100 || "Currency length must be less or equal to 100",
    ],
    balanceRules: [(v) => !!v || "Balance is required"],
    tranDateRules: [(v) => !!v || "Tran Date is required"],
    accountActionRules: [(v) => !!v || "Account Action is required"],
    notesRules: [
      (v) => !!v || "Notes is required",
      (v) => v.length < 100 || "Notes length must be less or equal to 100",
    ],
    amountRules: [(v) => !!v || "Amount is required"],
  }),
  created() {
    this.$store.dispatch("banking/bankaccount/getMini");
    this.$store.dispatch("lookup/getAccountActions");
  },
   computed: {
    bankAccount() {
      return this.bankTransaction.bankAccount;
    },
  },

  watch: {
    bankAccount() {
      this.bankTransaction.currency = "";
      this.bankTransaction.balance = 0;
      if (!this.bankAccount) return;
      this.bankTransaction.currency = this.bankAccount.currency;
      this.bankTransaction.balance = this.bankAccount.balance;
    },
  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.bankTransaction,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.bankTransaction.id}`,
        body: this.bankTransaction,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.bankTransaction = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.bankTransaction.clear();
      this.$store.dispatch("banking/bankaccount/getMini");
      this.bankTransaction.balance = 0;
    },
    setObjects(obj) {
      console.log(obj);
    },
    setDialog(obj) {
      this.bankTransaction = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.bankTransaction)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
  },
};
</script>
