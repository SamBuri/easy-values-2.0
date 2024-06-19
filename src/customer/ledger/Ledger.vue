<template>
  <s-ledger :maxWidth="maxWidth" :headers="accountLedgerNav.headers" :model="model" :title="title"
    :passedColumn="passedColumn" :accountHeaders="customerNav.menu.miniHeaders" :accountItems="accounts"
    @setAccountIdData="setAccountIdData" @accountIdChanged="accountIdChanged">

    <v-toolbar slot="extra" flat>
      <v-col :cols="cols" :sm="sm" :md="lmd" compact>
        Phone Number
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="lmd" compact class="bold-text">
        {{phoneNo}}
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="lmd" compact>
      Address
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="4" compact class="bold-text">
        {{address}}
      </v-col>
    </v-toolbar>


  </s-ledger>
</template>
<script>

import ledgerNav from './LedgerNav'
import customerNav from '../customer/CustomerNav';
export default {
  name: "Ledger",

  data: () => ({
    cols: 12,
    sm: 6,
    md: 3,
    lmd: 2,
    maxWidth: 1000,
    accountLedgerNav: ledgerNav,
    title: "Customer  Ledger",
    passedColumn: "amount",
    customerNav: customerNav,
    model: ledgerNav.model,
    address:  '',
    phoneNo: '',



  }),
  created() {
    this.$store.dispatch("customer/customer/getMini");

  },
  computed: {
    accounts() {
      return this.$store.state.customer.customer.mini;
    }
  },

  watch: {

  },

  methods: {
    setAccountIdData(data) {
      this.model.accountId = data.id;
     this.fill(data)
    },

    accountIdChanged(id) {
      if (this.accounts.length > 0) {
        let filteredAccounts = this.accounts.filter(a => a.id == id);
        if (filteredAccounts.length > 0) {
          let account = filteredAccounts[0];
        this.fill(account);
        }
      }

    },

    fill(data){
      this.model.accountName = data.customerName;
      this.address = data.address
      this.phoneNo = data.phoneNo;
    }

  },
};
</script>
<style>
.bold-text {
  font-weight: bold;
}
</style>