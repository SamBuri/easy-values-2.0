<template>
  <s-ledger :maxWidth="maxWidth" :headers="accountLedgerNav.headers" :model="model" :title="title"
    :passedColumn="passedColumn" :accountHeaders="accountNav.menu.minHeaders" :accountItems="accounts"
    @setAccountIdData="setAccountIdData" @accountIdChanged="accountIdChanged">
  </s-ledger>
</template>
<script>

import shLedgerNav from './ShLedgerNav';
import shareholderNav from '../shareholder/ShareholderNav'
export default {
  name: "ShLedger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    maxWidth: 1000,
    accountLedgerNav: shLedgerNav,
    title: "Shareholder Ledger",
    passedColumn: "amount",
    accountNav: shareholderNav,
    model: shLedgerNav.model



  }),
  created() {
    this.$store.dispatch("shares/shareholder/getMini");
    

  },
  computed: {
    accounts() {
      return this.$store.state.shares.shareholder.mini;
    }
  },

  watch: {

  },

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
      this.model.accountName = data.name;
    },

    accountIdChanged(id){
      if(this.accounts.length>0){
          let filteredAccounts = this.accounts.filter(a=>a.id==id);
          if(filteredAccounts.length>0){
            let account = filteredAccounts[0];
            this.model.accountName = account.name;
          }
      }

    }

  },
};
</script>
  