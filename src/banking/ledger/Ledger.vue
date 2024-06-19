<template>
  <s-ledger :maxWidth="maxWidth" :headers="accountLedgerNav.headers" :model="model" :title="title"
    :passedColumn="passedColumn" :accountHeaders="bankAccountNav.menu.miniHeaders" :accountItems="accounts"
    @setAccountIdData="setAccountIdData" @accountIdChanged="accountIdChanged">
  </s-ledger>
</template>
<script>

import ledgerNav from './LedgerNav'
import bankAccountNav from '../bankaccount/BankAccountNav'
export default {
  name: "Ledger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    accountLedgerNav: ledgerNav,
    title: "Bank Account Ledger",
    passedColumn: "amount",
    bankAccountNav: bankAccountNav,
    model: ledgerNav.model



  }),
  created() {
    this.$store.dispatch("banking/bankaccount/getMini");

  },
  computed: {
    accounts() {
      return this.$store.state.banking.bankaccount.mini;
    }
  },

  watch: {

  },

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
      this.model.accountName = data.bankAccountName;
    },

    accountIdChanged(id){
      if(this.accounts.length>0){
          let filteredAccounts = this.accounts.filter(a=>a.id==id);
          if(filteredAccounts.length>0){
            let account = filteredAccounts[0];
            this.model.accountName = account.bankAccountName;
          }
      }

    }

  },
};
</script>
  